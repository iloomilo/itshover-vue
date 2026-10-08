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
  animate('.b-group', { x: [0, 2, -1, 1, 0] }, { duration: 0.4, ease: 'easeOut' })
}

const stop = () => {
  animate('.b-group', { x: 0 }, { duration: 0.2 })
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
    <g class="b-group">
      <path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" />
      <path d="M7 12l6 0" />
    </g>
  </svg>
</template>
