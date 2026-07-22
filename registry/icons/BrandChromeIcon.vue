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
  animate('.chrome-center', { scale: [1, 1.15, 1] }, { duration: 0.3 })
  animate('.chrome-rotator', { rotate: 90 }, { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] })
}

const stop = () => {
  animate('.chrome-rotator', { rotate: 0 }, { duration: 0.3 })
  animate('.chrome-center', { scale: 1 }, { duration: 0.2 })
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <g class="chrome-rotator" :style="{ transformOrigin: 'center' }">
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 9h8.4" />
      <path d="M14.598 13.5l-4.2 7.275" />
      <path d="M9.402 13.5l-4.2 -7.275" />
      <circle cx="12" cy="12" r="3" stroke="none" class="fill-background" />
      <path
        class="chrome-center"
        d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
        :style="{ transformOrigin: 'center' }"
      />
    </g>
  </svg>
</template>
