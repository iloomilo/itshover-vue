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
  animate('.building', { scaleY: [1, 1.2, 1], y: [0, -2, 0] }, { duration: 0.4, ease: 'easeInOut' })
}

const stop = () => {
  animate('.building', { scaleY: 1, y: 0 }, { duration: 0.3, ease: 'easeIn' })
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
    <path
      class="building"
      d="M4.75 6.75h1m-1 4h1m-1 4h1m10-8h1m-1 4h1m-1 4h1M12.75 20.75v-4a2 2 0 0 0-4 0v4M.75 2.75h6c.64-1.173 2.19-2 4-2s3.36.827 4 2h6"
    />
    <path class="building" d="M8.75 5.75v2m0 2v-2m0 0h4v-2 4" />
    <path
      class="building"
      d="M1.75 3.75v16c0 .943 0 1.414.293 1.707s.764.293 1.707.293h14c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-16"
    />
  </svg>
</template>
