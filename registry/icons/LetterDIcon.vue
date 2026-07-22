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
    '.d-shape',
    { rotateY: [0, -20, 0], scaleX: [1, 0.9, 1] },
    { duration: 0.4, ease: 'easeInOut' }
  )
}

const stop = () => {
  animate('.d-shape', { rotateY: 0, scaleX: 1 }, { duration: 0.2 })
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
    :style="{ overflow: 'visible', perspective: '100px' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path
      class="d-shape"
      d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16"
      :style="{ transformOrigin: '7px 12px' }"
    />
  </svg>
</template>
