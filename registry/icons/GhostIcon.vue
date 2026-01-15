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
    '.ghost-body',
    {
      y: [0, -8, -4, -8, 0],
      rotate: [0, -3, 3, -2, 0]
    },
    { duration: 1.2, ease: 'easeInOut' }
  )

  animate(
    '.ghost-eye',
    {
      scaleY: [1, 0.1, 1, 0.1, 1],
      scaleX: [1, 1.2, 1, 1.2, 1]
    },
    { duration: 0.8, ease: 'easeInOut' }
  )

  animate('.ghost-body', { scaleX: [1, 1.05, 0.98, 1.02, 1] }, { duration: 0.6, ease: 'easeInOut' })
}

const stop = () => {
  animate('.ghost-body', { y: 0, rotate: 0, scaleX: 1 }, { duration: 0.2 })
  animate('.ghost-eye', { scaleX: 1, scaleY: 1 }, { duration: 0.2 })
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
      class="ghost-body"
      :style="{ transformOrigin: '12px 14px' }"
      d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"
    />
    <path class="ghost-eye" :style="{ transformOrigin: '10px 10px' }" d="M10 10h.01" />
    <path class="ghost-eye" :style="{ transformOrigin: '14px 10px' }" d="M14 10h.01" />
  </svg>
</template>
