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
    '.youtube-play',
    {
      pathLength: [0, 1]
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return

  animate(
    '.youtube-play',
    {
      scale: [1, 0.8, 1]
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate(
    '.youtube-play',
    {
      scale: 1,
      x: 0
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
  )

  animate(
    '.youtube-frame',
    {
      scale: 1
    },
    {
      duration: 0.2,
      ease: 'easeOut'
    }
  )
}

defineExpose({
  startAnimation,
  stopAnimation
} satisfies AnimatedIconHandle)
</script>

<template>
  <svg
    ref="scope"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path
      d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"
      class="youtube-frame"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path d="M10 9l5 3l-5 3z" class="youtube-play" :style="{ transformOrigin: '50% 50%' }" />
  </svg>
</template>
