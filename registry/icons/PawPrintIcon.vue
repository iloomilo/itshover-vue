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

  animate('.paw-inner', { opacity: 0, scale: 1.5, y: -20 }, { duration: 0 })
  await animate(
    '.paw-inner',
    { y: 0, opacity: 1, scale: 1 },
    { duration: 0.15, ease: [0.33, 1, 0.68, 1] }
  )
  if (!isCurrentRun(run)) return
  await animate(
    '.paw-inner',
    { scale: [1, 0.75, 1.1, 1], y: [0, -1, 0] },
    { duration: 0.3, ease: 'easeInOut' }
  )
  if (!isCurrentRun(run)) return
  animate('.paw-inner', { opacity: 0.6, scale: 1.03 }, { duration: 0.5, ease: 'easeOut' })
}

const stop = () => {
  animate('.paw-inner', { opacity: 1, scale: 1, y: 0 }, { duration: 0.3 })
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
    <g class="paw-inner" :style="{ transformOrigin: 'center' }">
      <circle cx="11" cy="4" r="2" :stroke="color" :stroke-width="strokeWidth" />
      <circle cx="18" cy="8" r="2" :stroke="color" :stroke-width="strokeWidth" />
      <circle cx="20" cy="16" r="2" :stroke="color" :stroke-width="strokeWidth" />
      <path
        d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
        :stroke="color"
        :stroke-width="strokeWidth"
      />
    </g>
  </svg>
</template>
