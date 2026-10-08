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
  animate('.cursor-line', { opacity: [1, 0, 1, 0, 1] }, { duration: 0.8, ease: 'easeInOut' })
  animate('.terminal-chevron', { x: [0, 2, 0] }, { duration: 0.3, ease: 'easeInOut' })
}

const stop = () => {
  animate('.cursor-line', { opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
  animate('.terminal-chevron', { x: 0 }, { duration: 0.2, ease: 'easeOut' })
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
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path class="terminal-chevron" d="M5 7l5 5l-5 5" />
    <path class="cursor-line" d="M12 19l7 0" />
  </svg>
</template>
