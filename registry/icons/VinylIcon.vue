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
    '.vinyl-disc',
    {
      rotate: [0, 360]
    },
    {
      duration: 3,
      repeat: Infinity,
      ease: 'linear'
    }
  )

  animate(
    '.center-dot',
    {
      scale: [1, 1.2, 1]
    },
    {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate(
    '.vinyl-disc',
    {
      rotate: 0
    },
    {
      duration: 0.5,
      ease: 'easeOut'
    }
  )

  animate(
    '.center-dot',
    {
      scale: 1
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
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
      class="vinyl-disc"
      d="M16 3.937a9 9 0 1 0 5 8.063"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path class="center-dot" d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />

    <path d="M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M20 4l-3.5 10l-2.5 2" />
  </svg>
</template>
