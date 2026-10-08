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
    '.l-base',
    { y: [0, -3, 5, -2, 0], scaleY: [1, 1.1, 0.9, 1.05, 1] },
    { duration: 0.4, ease: 'easeOut' }
  )
  if (!isCurrentRun(run)) return
  animate('.l-stem', { scaleY: [1, 0.98, 1.01, 1] }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.l-base, .l-stem', { y: 0, scaleY: 1 }, { duration: 0.2 })
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
    :style="{ overflow: 'visible' }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path class="l-stem" d="M6 4V20" :style="{ transformOrigin: '6px 20px' }" />
    <path class="l-base" d="M6 20H18" :style="{ transformOrigin: '6px 20px' }" />
  </svg>
</template>
