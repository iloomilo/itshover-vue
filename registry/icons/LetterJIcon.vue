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
  animate('.j-hook', { rotate: [0, 15, -15, 10, -10, 5, 0] }, { duration: 0.7, ease: 'easeInOut' })
}

const stop = () => {
  animate('.j-hook', { rotate: 0 }, { duration: 0.2 })
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
    <g class="j-hook" :style="{ transformOrigin: '14px 4px' }">
      <path d="M10 4H18" />
      <path d="M14 4V16" />
      <path d="M14 16C14 18.2091 12.2091 20 10 20H8" />
    </g>
  </svg>
</template>
