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
  animate('.book-2', { y: -3, rotate: -8 }, { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] })
  animate('.book-3', { rotate: -12 }, { duration: 0.4, ease: 'easeOut' })
  animate('.book-4', { rotate: -5 }, { duration: 0.4, ease: 'easeOut' })
  animate('.book-1', { rotate: 12 }, { duration: 0.4, ease: 'easeOut' })
}

const stop = () => {
  animate(
    '.book-1, .book-2, .book-3, .book-4',
    { rotate: 0, y: 0 },
    { duration: 0.3, ease: 'easeInOut' }
  )
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
    <path class="book-1" d="m16 6 4 14" :style="{ transformOrigin: '18px 20px' }" />
    <path class="book-2" d="M12 6v14" :style="{ transformOrigin: '12px 20px' }" />
    <path class="book-3" d="M8 8v12" :style="{ transformOrigin: '8px 20px' }" />
    <path class="book-4" d="M4 4v16" :style="{ transformOrigin: '4px 20px' }" />
  </svg>
</template>
