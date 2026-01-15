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
    '.dot-top',
    {
      y: [-2, 0],
      scale: [1, 1.2, 1]
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )

  animate(
    '.dot-middle',
    {
      scale: [1, 1.3, 1]
    },
    {
      duration: 0.3,
      delay: 0.1,
      ease: 'easeOut'
    }
  )

  animate(
    '.dot-bottom',
    {
      y: [2, 0],
      scale: [1, 1.2, 1]
    },
    {
      duration: 0.3,
      delay: 0.2,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.dot-top, .dot-middle, .dot-bottom',
    { y: 0, scale: 1 },
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path
      d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      class="dot-middle"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      class="dot-bottom"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      class="dot-top"
      :style="{ transformOrigin: '50% 50%' }"
    />
  </svg>
</template>
