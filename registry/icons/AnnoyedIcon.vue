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
  animate('.eyes', { scaleX: 0.7 }, { duration: 0.2, ease: 'easeOut' })
  animate('.mouth', { y: 1 }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.eyes', { scaleX: 1 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.mouth', { y: 0 }, { duration: 0.2, ease: 'easeInOut' })
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
    <circle cx="12" cy="12" r="10" />
    <path class="mouth" d="M8 15h8" />
    <g class="eyes">
      <path d="M8 9h2" />
      <path d="M14 9h2" />
    </g>
  </svg>
</template>
