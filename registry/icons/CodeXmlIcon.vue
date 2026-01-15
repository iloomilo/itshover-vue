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
  animate('.left-bracket', { x: -3 }, { duration: 0.3, ease: 'easeOut' })
  animate('.right-bracket', { x: 3 }, { duration: 0.3, ease: 'easeOut' })
  animate('.slash', { scale: 1.1, opacity: 0.7 }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.left-bracket', { x: 0 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.right-bracket', { x: 0 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.slash', { scale: 1, opacity: 1 }, { duration: 0.2, ease: 'easeInOut' })
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
    <path class="right-bracket" d="m18 16 4-4-4-4" />
    <path class="left-bracket" d="m6 8-4 4 4 4" />
    <path class="slash" :style="{ transformOrigin: '12px 12px' }" d="m14.5 4-5 16" />
  </svg>
</template>
