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
  animate(
    '.signal-inner',
    {
      scale: [1, 1.15, 1],
      opacity: [1, 0.6, 1]
    },
    {
      duration: 0.6,
      ease: 'easeInOut'
    }
  )

  animate(
    '.signal-outer',
    {
      scale: [1, 1.25, 1],
      opacity: [1, 0.4, 1]
    },
    {
      duration: 0.7,
      ease: 'easeInOut',
      delay: 0.1
    }
  )

  animate(
    '.dish',
    {
      rotate: [0, -2, 2, 0]
    },
    {
      duration: 0.5,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate(
    '.signal-inner, .signal-outer, .dish',
    { scale: 1, opacity: 1, rotate: 0 },
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
    <path class="dish" d="M4 10a7.31 7.31 0 0 0 10 10Z" :style="{ transformOrigin: '9px 15px' }" />

    <path d="m9 15 3-3" />

    <path class="signal-inner" d="M17 13a6 6 0 0 0-6-6" :style="{ transformOrigin: '14px 10px' }" />

    <path
      class="signal-outer"
      d="M21 13A10 10 0 0 0 11 3"
      :style="{ transformOrigin: '16px 8px' }"
    />
  </svg>
</template>
