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
    '.v-shape',
    { y: [0, -5, 0], scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] },
    { duration: 0.4, ease: 'easeOut' }
  )
}

const stop = () => {
  animate('.v-shape', { y: 0, scale: 1, rotate: 0 }, { duration: 0.2 })
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
    <g class="v-shape" :style="{ transformOrigin: '12px 20px' }">
      <path d="M4 4L12 20" />
      <path d="M12 20L20 4" />
    </g>
  </svg>
</template>
