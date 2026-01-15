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
    '.wave-inner',
    {
      scale: [1, 1.2, 1],
      opacity: [1, 0.6, 1]
    },
    {
      duration: 0.6,
      ease: 'easeInOut'
    }
  )

  animate(
    '.wave-outer',
    {
      scale: [1, 1.3, 1],
      opacity: [1, 0.4, 1]
    },
    {
      duration: 0.7,
      ease: 'easeInOut',
      delay: 0.1
    }
  )
}

const stop = () => {
  animate('.wave-inner', { scale: 1, opacity: 1 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.wave-outer', { scale: 1, opacity: 1 }, { duration: 0.2, ease: 'easeInOut' })
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
    <path
      d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    />

    <path class="wave-inner" d="M16 9a5 5 0 0 1 0 6" :style="{ transformOrigin: '16px 12px' }" />

    <path
      class="wave-outer"
      d="M19.364 18.364a9 9 0 0 0 0-12.728"
      :style="{ transformOrigin: '19.364px 12px' }"
    />
  </svg>
</template>
