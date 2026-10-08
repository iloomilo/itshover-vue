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
  animate('.o-circle', { rotateY: [0, 360] }, { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] })
}

const stop = () => {
  animate('.o-circle', { rotateY: 0 }, { duration: 0.3 })
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
    :style="{ overflow: 'visible', perspective: '100px' }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <circle class="o-circle" cx="12" cy="12" r="8" :style="{ transformOrigin: '12px 12px' }" />
  </svg>
</template>
