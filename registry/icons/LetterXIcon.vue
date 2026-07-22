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
  animate(
    '.x-stroke-1',
    { opacity: [1, 0.3, 1], scale: [1, 1.05, 1] },
    { duration: 0.3, ease: 'easeOut' }
  )
  animate(
    '.x-stroke-2',
    { opacity: [1, 0.3, 1], scale: [1, 1.05, 1] },
    { duration: 0.3, ease: 'easeOut', delay: 0.05 }
  )
}

const stop = () => {
  animate('.x-stroke-1, .x-stroke-2', { opacity: 1, scale: 1 }, { duration: 0.2 })
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
    <path class="x-stroke-1" d="M7 4l10 16" :style="{ transformOrigin: '12px 12px' }" />
    <path class="x-stroke-2" d="M17 4l-10 16" :style="{ transformOrigin: '12px 12px' }" />
  </svg>
</template>
