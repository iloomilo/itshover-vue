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
    '.toggle-knob',
    {
      x: [0, 12]
    },
    {
      duration: 0.4,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
  animate(
    '.toggle-track',
    {
      opacity: [1, 0.8, 1]
    },
    {
      duration: 0.4,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate('.toggle-knob', { x: 0 }, { duration: 0.2, ease: 'easeOut' })
  animate('.toggle-track', { opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
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
    viewBox="0 0 32 32"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="square"
    stroke-miterlimit="10"
    :class="['cursor-pointer', className]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path
      class="toggle-track"
      d="m10,7h12c4.971,0,9,4.029,9,9h0c0,4.971-4.029,9-9,9h-12c-4.971,0-9-4.029-9-9h0c0-4.971,4.029-9,9-9Z"
    />

    <circle class="toggle-knob" cx="10" cy="16" r="5" :style="{ transformOrigin: '10px 16px' }" />
  </svg>
</template>
