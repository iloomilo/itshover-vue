import { nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps } from '../types/types'

type Animate = ReturnType<typeof useAnimate>[1]
type Controls = ReturnType<Animate>
type PropertyControls = Pick<Controls, 'finished' | 'stop'>
type AnimationHandle = {
  controls: Controls
  finished: Promise<void>
  stop: () => void
  then: Promise<void>['then']
}
type Callback = () => void | Promise<void>
type Callbacks = { start: Callback; stop: Callback }
type ControllerOptions = {
  onError?: (error: unknown) => void
  onAnimationSettled?: (controls: Controls) => void
}
type Run = {
  cancelled: boolean
  looping: boolean
  pending: Set<Promise<unknown>>
  cancellations: Set<() => void>
  error?: unknown
}

const cancelled = Symbol('animation cancelled')

// Motion stops individual property animations when newer work replaces them,
// but their finished promises stay pending. Settle only the stopped properties
// so other properties in the same group still finish before the next cycle.
function animationCompletion(controls: Controls): Promise<void> {
  const animations = (controls as Controls & { animations?: PropertyControls[] }).animations
  if (!animations) return Promise.resolve(controls).then(() => {})
  return Promise.all(
    animations.map(
      (animation) =>
        new Promise<void>((resolve, reject) => {
          const stop = animation.stop.bind(animation)
          animation.stop = () => {
            stop()
            resolve()
          }
          animation.finished.then(() => resolve(), reject)
        })
    )
  ).then(() => {})
}

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
  callbacks: Callbacks,
  { onError = console.error, onAnimationSettled }: ControllerOptions = {}
) {
  let active: Run | undefined
  let playing = false
  let disposed = false
  let playbackRequested = false
  const timers = new Set<ReturnType<typeof setTimeout>>()

  function track<T>(run: Run, work: PromiseLike<T>, cleanup?: () => void): Promise<T> {
    let cancel: () => void
    const promise = new Promise<T>((resolve, reject) => {
      cancel = () => {
        cleanup?.()
        reject(cancelled)
      }
      run.cancellations.add(cancel)
      Promise.resolve(work).then(resolve, reject)
    })
    run.pending.add(promise)
    // Attach a rejection handler even for animations the icon does not await.
    const release = () => {
      run.pending.delete(promise)
      run.cancellations.delete(cancel)
    }
    void promise.then(release, (error) => {
      run.error = error
      release()
    })
    return promise
  }

  function cancelRun() {
    if (!active) return
    active.cancelled = true
    active.cancellations.forEach((cancel) => cancel())
    active.cancellations.clear()
    active = undefined
  }

  function animate(...args: Parameters<Animate>): AnimationHandle {
    const run = active
    const forwarded = [...args] as Parameters<Animate>
    if (run?.looping && forwarded.length > 2) {
      forwarded[2] = finiteTransitions(forwarded[2]) as (typeof forwarded)[2]
    }
    const controls = rawAnimate(...forwarded)
    const finished = animationCompletion(controls)
    const completion = run ? track(run, finished, () => controls.stop()) : finished
    const release = () => onAnimationSettled?.(controls)
    void completion.then(release, release)
    return {
      controls,
      finished: completion,
      stop: () => controls.stop(),
      then: completion.then.bind(completion)
    }
  }

  function wait(duration: number, callback?: () => void) {
    const run = active
    let timer: ReturnType<typeof setTimeout>
    const work = new Promise<void>((resolve, reject) => {
      timer = setTimeout(() => {
        timers.delete(timer)
        if (disposed || run?.cancelled) return
        try {
          callback?.()
          resolve()
        } catch (error) {
          reject(error)
        }
      }, duration)
    })
    timers.add(timer!)
    if (!run) {
      void work.catch(onError)
      return work
    }
    return track(run, work, () => {
      clearTimeout(timer)
      timers.delete(timer)
    })
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
      cancellations: new Set<() => void>()
    }
    active = run
    return run
  }

  async function execute(run: Run, callback: Callback) {
    await callback()
    await drain(run)
    run.cancellations.clear()
  }

  function handleError(error: unknown, run: Run) {
    if (error === cancelled) return
    if (active === run) {
      cancelRun()
      playing = false
      callbacks.stop()
    }
    onError(error)
  }

  function startAnimation() {
    playbackRequested = true
    if (disposed) return
    const restarting = playing || !!active
    playing = true
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
    playbackRequested = true
    if (disposed) return
    playing = false
    cancelRun()
    const run = newRun(false)
    return execute(run, callbacks.stop)
      .then(() => {
        if (active === run) active = undefined
      })
      .catch((error) => handleError(error, run))
  }

  function dispose() {
    playbackRequested = true
    disposed = true
    playing = false
    cancelRun()
    timers.forEach(clearTimeout)
    timers.clear()
  }

  return {
    animate,
    delay: (duration: number) => wait(duration),
    schedule: (callback: () => void, duration: number) => {
      void wait(duration, callback)
    },
    startAnimation,
    stopAnimation,
    startAutoplay: () => {
      if (!playbackRequested && props().autoplay) return startAnimation()
    },
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

export function useAnimatedIcon(props: AnimatedIconProps, callbacks: Callbacks) {
  const [scope, rawAnimate] = useAnimate()
  // motion-v retains scoped controls for unmount cleanup. Remove completed and
  // stopped controls so continuous playback does not grow that list indefinitely.
  const controller = createAnimationController(rawAnimate, () => props, callbacks, {
    onAnimationSettled(controls) {
      const index = scope.animations.indexOf(controls)
      if (index !== -1) scope.animations.splice(index, 1)
    }
  })

  // Existing icon mount hooks initialize their DOM before autoplay starts.
  onMounted(async () => {
    await nextTick()
    controller.startAutoplay()
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
