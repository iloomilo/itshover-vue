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
    '.user-center',
    {
      y: -2,
      scale: 1.05
    },
    {
      duration: 0.25,
      ease: 'easeOut'
    }
  )

  animate(
    '.user-left',
    {
      x: -1,
      scale: 1.02
    },
    {
      duration: 0.3,
      ease: 'easeOut',
      delay: 0.05
    }
  )

  animate(
    '.user-right',
    {
      x: 1,
      scale: 1.02
    },
    {
      duration: 0.3,
      ease: 'easeOut',
      delay: 0.05
    }
  )
}

const stop = () => {
  animate(
    '.user-center',
    {
      x: 0,
      y: 0,
      scale: 1
    },
    {
      duration: 0.25,
      ease: 'easeInOut'
    }
  )

  animate(
    '.user-left',
    {
      x: 0,
      y: 0,
      scale: 1
    },
    {
      duration: 0.25,
      ease: 'easeInOut'
    }
  )

  animate(
    '.user-right',
    {
      x: 0,
      y: 0,
      scale: 1
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

    <g class="user-center">
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
    </g>

    <g class="user-right">
      <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M17 10h2a2 2 0 0 1 2 2v1" />
    </g>

    <g class="user-left">
      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
    </g>
  </svg>
</template>
