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
  animate('.layer-top', { y: -2, scale: 1.05 }, { duration: 0.3, ease: 'easeOut' })

  animate('.layer-bottom', { y: 1, opacity: 0.7 }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.layer-top', { y: 0, scale: 1 }, { duration: 0.25, ease: 'easeInOut' })

  animate('.layer-bottom', { y: 0, opacity: 1 }, { duration: 0.25, ease: 'easeInOut' })
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
    <path class="layer-top" d="M12 6l-8 4l8 4l8 -4l-8 -4" />

    <path class="layer-bottom" d="M4 14l8 4l8 -4" />
  </svg>
</template>
