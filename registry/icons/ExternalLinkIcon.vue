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
    '.external-arrow',
    {
      x: 2,
      y: -2,
      scale: 1.1
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )

  animate(
    '.external-box',
    {
      scale: 0.95
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.external-arrow, .external-box',
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

    <path
      d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
      class="external-box"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <g class="external-arrow" :style="{ transformOrigin: '50% 50%' }">
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </g>
  </svg>
</template>
