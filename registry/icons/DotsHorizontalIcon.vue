<script setup lang="ts">
import { useAnimatedIcon } from '../animation/useAnimatedIcon'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
  disableHover: false,
  autoplay: false,
  loop: false
})

const { scope, animate, startAnimation, stopAnimation, onMouseEnter, onMouseLeave } =
  useAnimatedIcon(props, {
    start: () => start(),
    stop: () => stop()
  })

const start = () => {
  animate(
    '.dot-left',
    {
      x: [-2, 0],
      scale: [1, 1.2, 1]
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )

  animate(
    '.dot-center',
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
    '.dot-right',
    {
      x: [2, 0],
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
    '.dot-left, .dot-center, .dot-right',
    { x: 0, scale: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
}

defineExpose({
  startAnimation,
  stopAnimation
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
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path
      d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      class="dot-left"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      class="dot-center"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      class="dot-right"
      :style="{ transformOrigin: '50% 50%' }"
    />
  </svg>
</template>
