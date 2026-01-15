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
  animate('.sticks', { y: [0, 3, 0, 3, 0] }, { duration: 0.6, ease: 'easeInOut' })
  animate('.drum-body', { scaleY: [1, 0.98, 1, 0.98, 1] }, { duration: 0.6, ease: 'easeInOut' })
  animate('.drum-top', { scaleX: [1, 1.05, 1, 1.05, 1] }, { duration: 0.6, ease: 'easeInOut' })
}

const stop = () => {
  animate(
    '.sticks, .drum-body, .drum-top',
    { x: 0, y: 0, scaleX: 1, scaleY: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
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
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path class="sticks" d="m2 2 8 8" />
    <path class="sticks" d="m22 2-8 8" />
    <ellipse
      class="drum-top"
      cx="12"
      cy="9"
      rx="10"
      ry="5"
      :style="{ transformOrigin: '12px 9px' }"
    />
    <path class="drum-body" d="M7 13.4v7.9" />
    <path class="drum-body" d="M12 14v8" />
    <path class="drum-body" d="M17 13.4v7.9" />
    <path
      class="drum-body"
      :style="{ transformOrigin: '12px 13px' }"
      d="M2 9v8a10 5 0 0 0 20 0V9"
    />
  </svg>
</template>
