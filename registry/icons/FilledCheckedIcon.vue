<script setup lang="ts">
import { useAnimatedIcon } from '../animation/useAnimatedIcon'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
  disableHover: false,
  autoplay: false,
  loop: false
})

const {
  scope,
  animate,
  startAnimation,
  stopAnimation,
  currentRun,
  isCurrentRun,
  onMouseEnter,
  onMouseLeave
} = useAnimatedIcon(props, {
  start: () => start(),
  stop: () => stop()
})

const start = async () => {
  const run = currentRun()

  await animate(
    'svg',
    {
      scale: 1.1
    },
    {
      duration: 0.1,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
  animate(
    '.filled-circle',
    {
      scale: 1.15,
      opacity: 0.8
    },
    {
      duration: 0.15,
      ease: 'easeOut'
    }
  )
  await animate(
    '.check-icon',
    {
      pathLength: 0
    },
    {
      duration: 0.1,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
  animate(
    '.filled-circle',
    {
      scale: 1,
      opacity: 1
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
  )
  await animate(
    '.check-icon',
    {
      pathLength: 1
    },
    {
      duration: 0.4,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
  await animate(
    'svg',
    {
      scale: 1
    },
    {
      duration: 0.2,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
}

const stop = () => {
  animate(
    'svg, .filled-circle, .check-icon',
    { scale: 1, opacity: 1, pathLength: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
}

defineExpose({
  startAnimation,
  stopAnimation
} satisfies AnimatedIconHandle)
</script>

<template>
  <div ref="scope" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="currentColor"
      class=""
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336z"
        :class="['filled-circle', className]"
        :style="{ transformOrigin: 'center' }"
      />
      <path
        d="M15.707 9.293a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
        class="check-icon text-background"
        fill="currentColor"
      />
    </svg>
  </div>
</template>
