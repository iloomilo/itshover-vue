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
  animate('.peak-1', { y: [0, -3, 0] }, { duration: 0.4, ease: 'easeInOut' })
  animate('.peak-2', { y: [0, -3, 0] }, { duration: 0.4, ease: 'easeInOut', delay: 0.1 })
  animate('.peak-3', { y: [0, -3, 0] }, { duration: 0.4, ease: 'easeInOut', delay: 0.2 })
}

const stop = () => {
  animate('.peak-1, .peak-2, .peak-3', { y: 0 }, { duration: 0.2 })
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
    <path class="peak-1" d="M4 4L8 20" :style="{ transformOrigin: '4px 4px' }" />
    <path class="peak-2" d="M8 20L12 8" :style="{ transformOrigin: '12px 8px' }" />
    <path class="peak-3" d="M12 8L16 20" :style="{ transformOrigin: '12px 8px' }" />
    <path d="M16 20L20 4" />
  </svg>
</template>
