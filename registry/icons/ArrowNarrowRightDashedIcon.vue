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
  animate('.arrow-group', { x: [0, 4, 0] }, { duration: 0.5, ease: 'easeInOut' })
}

const stop = () => {
  animate('.arrow-group', { x: 0 }, { duration: 0.2, ease: 'easeOut' })
}

defineExpose({
  startAnimation,
  stopAnimation
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', 'items-center', 'justify-center', className]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g class="arrow-group">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12h.5m3 0h1.5m3 0h6" />
        <path d="M15 16l4 -4" />
        <path d="M15 8l4 4" />
      </g>
    </svg>
  </div>
</template>
