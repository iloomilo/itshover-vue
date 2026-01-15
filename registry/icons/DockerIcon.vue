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
  animate('.whale', { x: [0, 2, 0] }, { duration: 1.2, ease: 'easeInOut', repeat: Infinity })
  animate('.containers', { y: [0, -1, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
  animate('.dot', { scale: [1, 1.3, 1] }, { duration: 0.5, ease: 'easeInOut' })
}

const stop = () => {
  animate('.whale', { x: 0 }, { duration: 0.3 })
  animate('.containers', { y: 0 }, { duration: 0.3 })
  animate('.dot', { scale: 1 }, { duration: 0.3 })
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      class="whale"
      d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z"
    />
    <path class="containers" d="M5 10h3v3h-3z" />
    <path class="containers" d="M8 10h3v3h-3z" />
    <path class="containers" d="M11 10h3v3h-3z" />
    <path class="containers" d="M8 7h3v3h-3z" />
    <path class="containers" d="M11 7h3v3h-3z" />
    <path class="containers" d="M11 4h3v3h-3z" />
    <path class="whale" d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
    <path class="dot" :style="{ transformOrigin: '10 16' }" d="M10 16l0 .01" />
  </svg>
</template>
