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
  animate('.arm-top', { scaleX: [0.3, 1.1, 1] }, { duration: 0.25, ease: 'easeOut' })
  animate('.arm-middle', { scaleX: [0.3, 1.1, 1] }, { duration: 0.25, ease: 'easeOut', delay: 0.1 })
  animate('.arm-bottom', { scaleX: [0.3, 1.1, 1] }, { duration: 0.25, ease: 'easeOut', delay: 0.2 })
}

const stop = () => {
  animate('.arm-top, .arm-middle, .arm-bottom', { scaleX: 1 }, { duration: 0.2 })
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
    <path class="arm-middle" d="M6 12H16" :style="{ transformOrigin: '6px 12px' }" />
    <path class="arm-bottom" d="M6 20H18" :style="{ transformOrigin: '6px 20px' }" />
  </svg>
</template>
