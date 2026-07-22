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
  animate('.wp-orbit-group', { rotate: 360 }, { duration: 1, ease: 'easeInOut' })
  animate(scope.value, { scale: 1.02 }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.wp-orbit-group', { rotate: 0 }, { duration: 0.5, ease: 'easeInOut' })
  animate(scope.value, { scale: 1 }, { duration: 0.3, ease: 'easeOut' })
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
    <g class="wp-orbit-group" :style="{ transformOrigin: '7px 7px' }">
      <path d="M9.5 9h3" />
      <path d="M4 9h2.5" />
      <path d="M11 9l3 11l4 -9" />
      <path d="M5.5 9l3.5 11l3 -7" />
      <path
        d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571"
      />
    </g>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  </svg>
</template>
