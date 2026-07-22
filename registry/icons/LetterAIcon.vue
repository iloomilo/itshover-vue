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
  animate('.leg-left', { y: [10, 0], opacity: [0, 1] }, { duration: 0.25, ease: 'easeOut' })
  animate(
    '.leg-right',
    { y: [10, 0], opacity: [0, 1] },
    { duration: 0.25, ease: 'easeOut', delay: 0.1 }
  )
  animate(
    '.crossbar',
    { scaleX: [0, 1.2, 1], opacity: [0, 1] },
    { duration: 0.3, ease: 'easeOut', delay: 0.2 }
  )
}

const stop = () => {
  animate('.leg-left, .leg-right', { y: 0, opacity: 1 }, { duration: 0.2 })
  animate('.crossbar', { scaleX: 1, opacity: 1 }, { duration: 0.2 })
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
    <path class="leg-left" d="M12 4L6 20" :style="{ transformOrigin: '6px 20px' }" />
    <path class="leg-right" d="M12 4L18 20" :style="{ transformOrigin: '18px 20px' }" />
    <path class="crossbar" d="M8 14H16" :style="{ transformOrigin: '12px 14px' }" />
  </svg>
</template>
