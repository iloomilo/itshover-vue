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
    '.bluetooth-symbol',
    {
      scale: [1, 1.1, 1]
    },
    {
      duration: 0.6,
      ease: 'easeInOut'
    }
  )

  animate(
    '.connection-dot',
    {
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1]
    },
    {
      duration: 0.8,
      delay: (i: number) => i * 0.2,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate(
    '.bluetooth-symbol',
    {
      scale: 1
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
  )

  animate(
    '.connection-dot',
    {
      scale: 1,
      opacity: 1
    },
    {
      duration: 0.3,
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
      class="bluetooth-symbol"
      d="M7 8l10 8l-5 4l0 -16l5 4l-10 8"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path class="connection-dot" d="M4 12l1 0" />
    <path class="connection-dot" d="M18 12l1 0" />
  </svg>
</template>
