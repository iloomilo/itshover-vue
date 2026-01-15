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
  animate('.layer-1', { y: -3, scale: 1.05 }, { duration: 0.3, ease: 'easeOut' })

  animate('.layer-2', { y: -1, opacity: 0.8 }, { duration: 0.3, delay: 0.05, ease: 'easeOut' })

  animate('.layer-3', { y: 1, opacity: 0.6 }, { duration: 0.3, delay: 0.1, ease: 'easeOut' })
}

const stop = () => {
  animate('.layer-1', { y: 0, scale: 1 }, { duration: 0.25 })
  animate('.layer-2', { y: 0, opacity: 1 }, { duration: 0.25 })
  animate('.layer-3', { y: 0, opacity: 1 }, { duration: 0.25 })
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
    <path class="layer-1" d="M12 2l-8 4l8 4l8 -4l-8 -4" />

    <path class="layer-2" d="M4 10l8 4l8 -4" />
    <path class="layer-2" d="M4 14l8 4l8 -4" />

    <path class="layer-3" d="M4 18l8 4l8 -4" />
  </svg>
</template>
