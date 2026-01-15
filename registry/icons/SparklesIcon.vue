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
    '.sparkle-main',
    { rotate: 180, scale: [1, 1.2, 1] },
    { duration: 0.6, ease: 'easeInOut' }
  )

  animate(
    '.sparkle-top',
    {
      rotate: -90,
      scale: [1, 0.8, 1.1],
      opacity: [1, 0.6, 1]
    },
    { duration: 0.5, ease: 'easeInOut', delay: 0.1 }
  )

  animate(
    '.sparkle-bottom',
    {
      rotate: 90,
      scale: [1, 1.15, 0.9],
      opacity: [1, 0.7, 1]
    },
    { duration: 0.5, ease: 'easeInOut', delay: 0.05 }
  )
}

const stop = () => {
  animate('.sparkle-main', { rotate: 0, scale: 1 }, { duration: 0.25 })
  animate('.sparkle-top', { rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25 })
  animate('.sparkle-bottom', { rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25 })
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
    <path
      class="sparkle-bottom"
      d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"
      :style="{ transformOrigin: '18px 18px' }"
    />

    <path
      class="sparkle-top"
      d="M16 6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"
      :style="{ transformOrigin: '18px 6px' }"
    />

    <path
      class="sparkle-main"
      d="M9 18a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
      :style="{ transformOrigin: '9px 12px' }"
    />
  </svg>
</template>
