import { nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps } from '../types/types'

type Animate = ReturnType<typeof useAnimate>[1]
type Controls = ReturnType<Animate>
type Callback = () => void | Promise<void>
type Run = {
  cancelled: boolean
  looping: boolean
  pending: Set<Promise<unknown>>
  cancel: Set<() => void>
  error?: unknown
}

const cancelled = Symbol('animation cancelled')

// Clone transitions only in loop mode. Property-specific transitions can also repeat.
function finiteTransitions(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(finiteTransitions)
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [
      key,
      key === 'repeat' && entry === Infinity ? 0 : finiteTransitions(entry)
    ])
  )
}

export function createAnimationController(
  rawAnimate: Animate,
  props: () => AnimatedIconProps,
  callbacks: { start: Callback; stop: Callback },
  reportError: (error: unknown) => void = (error) => console.error(error)
) {
  let active: Run | undefined
  let playing = false
  let disposed = false
  const legacyTimers = new Set<ReturnType<typeof setTimeout>>()

  function track<T>(run: Run, work: PromiseLike<T>, cleanup?: () => void): Promise<T> {
    let cancel: () => void
    const promise = new Promise<T>((resolve, reject) => {
      cancel = () => {
        cleanup?.()
        reject(cancelled)
      }
      run.cancel.add(cancel)
      Promise.resolve(work).then(resolve, reject)
    })
    run.pending.add(promise)
    // Attach a rejection handler even for animations the icon does not await.
    void promise.then(
      () => {
        run.pending.delete(promise)
        run.cancel.delete(cancel)
      },
      (error) => {
        run.pending.delete(promise)
        run.cancel.delete(cancel)
        run.error = error
      }
    )
    return promise
  }

  function cancelRun() {
    if (!active) return
    active.cancelled = true
    active.cancel.forEach((cancel) => cancel())
    active.cancel.clear()
    active = undefined
  }

  const animate = ((...args: Parameters<Animate>) => {
    const run = active
    const forwarded = [...args] as Parameters<Animate>
    if (run?.looping && forwarded.length > 2) {
      forwarded[2] = finiteTransitions(forwarded[2]) as (typeof forwarded)[2]
    }
    const controls = rawAnimate(...forwarded)
    if (!run) return controls
    const completion = track(run, Promise.resolve(controls), () => controls.stop())
    return new Proxy(controls, {
      get(target, key) {
        if (key === 'then') return completion.then.bind(completion)
        const value = Reflect.get(target, key, target)
        return typeof value === 'function' ? value.bind(target) : value
      }
    }) as Controls
  }) as Animate

  function schedule(callback: () => void, duration: number) {
    const run = active
    if (!run) {
      const timer = setTimeout(() => {
        legacyTimers.delete(timer)
        if (!disposed) callback()
      }, duration)
      legacyTimers.add(timer)
      return
    }
    let timer: ReturnType<typeof setTimeout>
    const work = new Promise<void>((resolve, reject) => {
      timer = setTimeout(() => {
        if (run.cancelled) return
        try {
          callback()
          resolve()
        } catch (error) {
          reject(error)
        }
      }, duration)
    })
    void track(run, work, () => clearTimeout(timer))
  }

  function delay(duration: number) {
    const run = active
    let timer: ReturnType<typeof setTimeout>
    const work = new Promise<void>((resolve) => {
      timer = setTimeout(resolve, duration)
    })
    if (run) return track(run, work, () => clearTimeout(timer))
    legacyTimers.add(timer!)
    return work.finally(() => legacyTimers.delete(timer))
  }

  async function drain(run: Run) {
    while (run.pending.size) {
      await Promise.all([...run.pending])
    }
    if (run.cancelled) throw cancelled
    if (run.error !== undefined) throw run.error
  }

  function newRun(looping: boolean): Run {
    const run = {
      cancelled: false,
      looping,
      pending: new Set<Promise<unknown>>(),
      cancel: new Set<() => void>()
    }
    active = run
    return run
  }

  async function execute(run: Run, callback: Callback) {
    await callback()
    await drain(run)
    run.cancel.clear()
  }

  function handleError(error: unknown, run: Run) {
    if (error === cancelled) return
    if (active === run) {
      cancelRun()
      playing = false
      callbacks.stop()
    }
    reportError(error)
  }

  function startAnimation() {
    if (disposed) return
    const restarting = playing || !!active
    playing = true
    if (!props().autoplay && !props().loop && !active) return callbacks.start()
    cancelRun()
    const run = newRun(!!props().loop)
    const playback = async () => {
      if (restarting) await execute(run, callbacks.stop)
      do {
        await execute(run, callbacks.start)
        if (!run.looping) break
        await execute(run, callbacks.stop)
      } while (!run.cancelled)
      if (active === run) {
        active = undefined
        playing = false
      }
    }
    return playback().catch((error) => handleError(error, run))
  }

  function stopAnimation() {
    if (disposed) return
    playing = false
    const managed = !!active || !!props().autoplay || !!props().loop
    cancelRun()
    if (!managed) return callbacks.stop()
    const run = newRun(false)
    return execute(run, callbacks.stop)
      .then(() => {
        if (active === run) active = undefined
      })
      .catch((error) => handleError(error, run))
  }

  function dispose() {
    disposed = true
    playing = false
    cancelRun()
    legacyTimers.forEach(clearTimeout)
    legacyTimers.clear()
  }

  return {
    animate,
    delay,
    schedule,
    startAnimation,
    stopAnimation,
    dispose,
    isPlaying: () => playing,
    currentRun: () => active,
    isCurrentRun: (run: unknown) => !disposed && run === active && !active?.cancelled,
    onMouseEnter: () => {
      if (!props().disableHover && !props().autoplay) return startAnimation()
    },
    onMouseLeave: () => {
      if (!props().disableHover && !props().autoplay) return stopAnimation()
    }
  }
}

export function useAnimatedIcon(
  props: AnimatedIconProps,
  callbacks: { start: () => void | Promise<void>; stop: () => void | Promise<void> }
) {
  const [scope, rawAnimate] = useAnimate()
  // motion-v retains scoped controls for unmount cleanup. Remove completed and
  // stopped controls so continuous playback does not grow that list indefinitely.
  const scopedAnimate = ((...args: Parameters<typeof rawAnimate>) => {
    const controls = rawAnimate(...args)
    const remove = () => {
      const index = scope.animations.indexOf(controls)
      if (index !== -1) scope.animations.splice(index, 1)
    }
    void Promise.resolve(controls).then(remove, remove)
    return new Proxy(controls, {
      get(target, key) {
        if (key === 'stop')
          return () => {
            target.stop()
            remove()
          }
        const value = Reflect.get(target, key, target)
        return typeof value === 'function' ? value.bind(target) : value
      }
    })
  }) as typeof rawAnimate
  const controller = createAnimationController(scopedAnimate, () => props, callbacks)

  // Existing icon mount hooks initialize their DOM before autoplay starts.
  onMounted(async () => {
    await nextTick()
    if (props.autoplay) controller.startAnimation()
  })
  watch(
    () => [props.autoplay, props.loop] as const,
    ([autoplay, loop], [previousAutoplay, previousLoop]) => {
      if (autoplay !== previousAutoplay) {
        if (autoplay) controller.startAnimation()
        else controller.stopAnimation()
      } else if (loop !== previousLoop && controller.isPlaying()) {
        controller.startAnimation()
      }
    }
  )
  onBeforeUnmount(controller.dispose)

  return { scope, ...controller }
}
