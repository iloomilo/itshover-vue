<script setup lang="ts">
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()

const start = () => {
  animate('.peel', { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.5, ease: 'easeOut' })
  animate(
    '.banana',
    { rotate: [0, -5, 5, -5, 0], y: [0, -2, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  )
}

const stop = () => {
  animate('.peel', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
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
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path class="peel" d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
    <path
      class="banana"
      :style="{ transformOrigin: 'center' }"
      d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
    />
  </svg>
</template>
