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
    '.eye-pupil',
    {
      scale: 0.7
    },
    {
      duration: 0.15,
      ease: 'easeOut'
    }
  )

  animate(
    '.eye-shape',
    {
      scaleY: 0.9
    },
    {
      duration: 0.15,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.eye-pupil, .eye-shape',
    {
      scale: 1,
      scaleY: 1
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

    <path
      d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
      class="eye-pupil"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
      class="eye-shape"
      :style="{ transformOrigin: '50% 50%' }"
    />
  </svg>
</template>
