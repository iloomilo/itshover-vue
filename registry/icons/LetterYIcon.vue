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
  animate('.y-stem', { scaleY: [1, 1.2, 0.9, 1.1, 1] }, { duration: 0.4, ease: 'easeOut' })
  animate('.y-arms', { y: [0, -2, 0] }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.y-stem, .y-arms', { scaleY: 1, y: 0 }, { duration: 0.2 })
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
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path class="y-arms" d="M7 4l5 9l5 -9" />
    <path class="y-stem" d="M12 13l0 7" :style="{ transformOrigin: '12px 13px' }" />
  </svg>
</template>
