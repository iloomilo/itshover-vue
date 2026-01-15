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
  animate('.eyebrows', { y: 1, scaleY: 1.2 }, { duration: 0.3, ease: 'easeOut' })
  animate('.mouth', { scaleY: 1.2 }, { duration: 0.3, ease: 'easeOut' })
  animate('.eyes', { scale: 0.8 }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.eyebrows', { y: 0, scaleY: 1 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.mouth', { scaleY: 1 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.eyes', { scale: 1 }, { duration: 0.2, ease: 'easeInOut' })
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
    <path class="mouth" :style="{ transformOrigin: '12px 16px' }" d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <g class="eyebrows">
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
    </g>
    <g class="eyes">
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
    </g>
  </svg>
</template>
