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
    '.x-line-1',
    {
      rotate: 15,
      scale: 1.1
    },
    {
      duration: 0.2,
      ease: 'easeOut'
    }
  )

  animate(
    '.x-line-2',
    {
      rotate: -15,
      scale: 1.1
    },
    {
      duration: 0.2,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.x-line-1',
    {
      rotate: 0,
      scale: 1
    },
    {
      duration: 0.2,
      ease: 'easeInOut'
    }
  )

  animate(
    '.x-line-2',
    {
      rotate: 0,
      scale: 1
    },
    {
      duration: 0.2,
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

    <path d="M18 6l-12 12" class="x-line-1" :style="{ transformOrigin: '50% 50%' }" />

    <path d="M6 6l12 12" class="x-line-2" :style="{ transformOrigin: '50% 50%' }" />
  </svg>
</template>
