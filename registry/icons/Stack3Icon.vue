<script setup lang="ts">
import { useAnimatedIcon } from '../animation/useAnimatedIcon'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
  disableHover: false,
  autoplay: false,
  loop: false
})

const { scope, animate, startAnimation, stopAnimation, onMouseEnter, onMouseLeave } =
  useAnimatedIcon(props, {
    start: () => start(),
    stop: () => stop()
  })

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
  startAnimation,
  stopAnimation
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
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path class="layer-1" d="M12 2l-8 4l8 4l8 -4l-8 -4" />

    <path class="layer-2" d="M4 10l8 4l8 -4" />
    <path class="layer-2" d="M4 14l8 4l8 -4" />

    <path class="layer-3" d="M4 18l8 4l8 -4" />
  </svg>
</template>
