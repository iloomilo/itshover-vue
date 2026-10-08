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
  animate('.left-bracket', { x: -3 }, { duration: 0.3, ease: 'easeOut' })
  animate('.right-bracket', { x: 3 }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.left-bracket', { x: 0 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.right-bracket', { x: 0 }, { duration: 0.2, ease: 'easeInOut' })
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
    <path class="right-bracket" d="m16 18 6-6-6-6" />
    <path class="left-bracket" d="m8 6-6 6 6 6" />
  </svg>
</template>
