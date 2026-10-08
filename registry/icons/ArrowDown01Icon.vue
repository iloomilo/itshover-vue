<script setup lang="ts">
import { useAnimatedIcon } from '../animation/useAnimatedIcon'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 40,
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

const swapDistance = 10

const start = () => {
  animate('.zero', { y: swapDistance }, { duration: 0.3, ease: 'easeInOut' })
  animate('.one', { y: -swapDistance }, { duration: 0.3, ease: 'easeInOut' })
}

const stop = () => {
  animate('.zero, .one', { y: 0 }, { duration: 0.3, ease: 'easeInOut' })
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
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path d="m3 16 4 4 4-4" />
    <path d="M7 20V4" />
    <rect class="zero" x="15" y="4" width="4" height="6" ry="2" />
    <g class="one">
      <path d="M17 20v-6h-2" />
      <path d="M15 20h4" />
    </g>
  </svg>
</template>
