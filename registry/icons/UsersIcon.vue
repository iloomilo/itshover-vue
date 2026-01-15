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
    '.user-primary',
    {
      y: -2,
      scale: 1.05
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )

  animate(
    '.user-secondary',
    {
      x: 1,
      opacity: 0.8
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.user-primary',
    {
      y: 0,
      scale: 1
    },
    {
      duration: 0.25,
      ease: 'easeInOut'
    }
  )

  animate(
    '.user-secondary',
    {
      x: 0,
      opacity: 1
    },
    {
      duration: 0.25,
      ease: 'easeInOut'
    }
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <g class="user-primary">
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </g>

    <g class="user-secondary">
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </g>
  </svg>
</template>
