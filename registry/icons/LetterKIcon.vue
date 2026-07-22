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
  animate('.arm-upper', { rotate: [0, -20, 0], x: [0, 3, 0] }, { duration: 0.3, ease: 'easeOut' })
  animate(
    '.arm-lower',
    { rotate: [0, 20, 0], x: [0, 3, 0] },
    { duration: 0.3, ease: 'easeOut', delay: 0.1 }
  )
}

const stop = () => {
  animate('.arm-upper, .arm-lower', { rotate: 0, x: 0 }, { duration: 0.2 })
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
    <path d="M6 4V20" />
    <path class="arm-upper" d="M6 12L18 4" :style="{ transformOrigin: '6px 12px' }" />
    <path class="arm-lower" d="M6 12L18 20" :style="{ transformOrigin: '6px 12px' }" />
  </svg>
</template>
