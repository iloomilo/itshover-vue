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
    '.user-avatar',
    {
      scale: 1.05,
      y: -1
    },
    {
      duration: 0.25,
      ease: 'easeOut'
    }
  )

  animate(
    '.plus-sign',
    {
      scale: 1.15,
      rotate: 90
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.user-avatar',
    {
      scale: 1,
      y: 0
    },
    {
      duration: 0.2,
      ease: 'easeInOut'
    }
  )

  animate(
    '.plus-sign',
    {
      scale: 1,
      rotate: 0
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

    <g class="user-avatar" :style="{ transformOrigin: '50% 50%' }">
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
    </g>

    <g class="plus-sign" :style="{ transformOrigin: '19px 19px' }">
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </g>
  </svg>
</template>
