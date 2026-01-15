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
  animate('.line-1', { scaleX: [1, 0.8, 1] }, { duration: 0.3 })
  animate('.line-2', { scaleX: [1, 1.2, 1] }, { duration: 0.3, delay: 0.1 })
  animate('.line-3', { scaleX: [1, 0.9, 1] }, { duration: 0.3, delay: 0.2 })
}

const stop = () => {
  animate('.line-1', { scaleX: 1 }, { duration: 0.2 })
  animate('.line-2', { scaleX: 1 }, { duration: 0.2 })
  animate('.line-3', { scaleX: 1 }, { duration: 0.2 })
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
    <path class="line-1" d="M4 6l16 0" :style="{ transformOrigin: 'center' }" />
    <path class="line-2" d="M8 12l8 0" :style="{ transformOrigin: 'center' }" />
    <path class="line-3" d="M6 18l12 0" :style="{ transformOrigin: 'center' }" />
  </svg>
</template>
