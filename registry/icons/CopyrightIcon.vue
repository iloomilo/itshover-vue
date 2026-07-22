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
    'circle',
    { pathLength: [1, 0.9, 1], rotate: [0, 360] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  )
  animate('path', { scale: [1, 1.1, 1] }, { duration: 1, repeat: Infinity, ease: 'easeInOut' })
}

const stop = () => {
  animate('circle', { pathLength: 1, rotate: 0 }, { duration: 0.3 })
  animate('path', { scale: 1 }, { duration: 0.3 })
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
    <circle cx="12" cy="12" r="10" :style="{ transformOrigin: 'center' }" />
    <path d="M14.83 14.83a4 4 0 1 1 0-5.66" :style="{ transformOrigin: 'center' }" />
  </svg>
</template>
