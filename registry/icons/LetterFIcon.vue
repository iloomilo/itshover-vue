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
    '.arm-top',
    { rotate: [0, 5, -3, 4, -2, 0], y: [0, -1, 1, -0.5, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  )
  animate(
    '.arm-middle',
    { rotate: [0, 4, -2, 3, -1, 0], y: [0, -0.5, 0.5, -0.3, 0] },
    { duration: 0.6, ease: 'easeInOut', delay: 0.05 }
  )
}

const stop = () => {
  animate('.arm-top, .arm-middle', { rotate: 0, y: 0 }, { duration: 0.2 })
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
    :style="{ overflow: 'visible' }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path d="M6 4V20" />
    <path class="arm-top" d="M6 4H18" :style="{ transformOrigin: '6px 4px' }" />
    <path class="arm-middle" d="M6 12H14" :style="{ transformOrigin: '6px 12px' }" />
  </svg>
</template>
