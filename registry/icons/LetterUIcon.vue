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
  animate('.u-fill', { pathLength: [0, 1], opacity: [0.5, 1] }, { duration: 0.6, ease: 'easeOut' })
  animate('.u-shape', { scaleY: [1, 1.02, 1] }, { duration: 0.4, ease: 'easeOut' })
}

const stop = () => {
  animate('.u-fill', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
  animate('.u-shape', { scaleY: 1 }, { duration: 0.2 })
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
      class="u-shape u-fill"
      d="M6 4V14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14V4"
      :style="{ transformOrigin: '12px 20px' }"
    />
  </svg>
</template>
