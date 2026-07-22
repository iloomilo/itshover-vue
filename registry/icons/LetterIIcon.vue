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
    '.i-shape',
    { y: [0, 3, -1, 1, 0], scaleY: [1, 0.95, 1.02, 0.99, 1] },
    { duration: 0.4, ease: 'easeOut' }
  )
}

const stop = () => {
  animate('.i-shape', { y: 0, scaleY: 1 }, { duration: 0.2 })
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
    <path class="i-shape" d="M8 4H16M12 4V20M8 20H16" :style="{ transformOrigin: '12px 20px' }" />
  </svg>
</template>
