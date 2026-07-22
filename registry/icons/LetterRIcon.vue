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
  animate('.r-body', { x: [0, 1, 0] }, { duration: 0.3, ease: 'easeOut' })
  animate('.r-leg', { rotate: [0, 15, 0], x: [0, 2, 0] }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.r-body, .r-leg', { rotate: 0, x: 0 }, { duration: 0.2 })
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
    <path class="r-body" d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
    <path class="r-leg" d="M12 13l5 7" :style="{ transformOrigin: '12px 13px' }" />
  </svg>
</template>
