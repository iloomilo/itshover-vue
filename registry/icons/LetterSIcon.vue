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
    '.s-shape',
    { x: [0, 2, -2, 2, -1, 0], rotate: [0, 3, -3, 2, -1, 0] },
    { duration: 0.5, ease: 'easeInOut' }
  )
}

const stop = () => {
  animate('.s-shape', { x: 0, rotate: 0 }, { duration: 0.2 })
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
    <path
      class="s-shape"
      d="M18 6C18 6 16 4 12 4C8 4 6 6 6 8C6 10 8 11 12 12C16 13 18 14 18 16C18 18 16 20 12 20C8 20 6 18 6 18"
      :style="{ transformOrigin: '12px 12px' }"
    />
  </svg>
</template>
