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
    'path.cloud-path',
    { y: [0, -1, 0, 1, 0], x: [0, 0.5, 0, -0.5, 0] },
    { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  )

  animate(
    '.rain-drop',
    { y: [0, 5], x: [0, -2], opacity: [0, 1, 0] },
    { duration: 0.6, repeat: Infinity, ease: 'linear', delay: (i: number) => i * 0.15 }
  )
}

const stop = () => {
  animate('path.cloud-path', { y: 0, x: 0 }, { duration: 0.3 })
  animate('.rain-drop', { opacity: 0, y: 0, x: 0 }, { duration: 0.3 })
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
    <path class="cloud-path" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <line class="rain-drop" x1="10" y1="20" x2="11" y2="22" />
    <line class="rain-drop" x1="13" y1="21" x2="14" y2="23" />
    <line class="rain-drop" x1="16" y1="20" x2="17" y2="22" />
  </svg>
</template>
