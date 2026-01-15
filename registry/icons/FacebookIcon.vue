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

const start = async () => {
  await animate('.fb-path', { scale: [1, 0.9, 1.05, 1] }, { duration: 0.5, ease: 'easeInOut' })
  animate('.fb-like', { y: [-10, 0], opacity: [0, 1, 0] }, { duration: 0.6, ease: 'easeOut' })
}

const stop = () => {
  animate('.fb-path', { scale: 1, opacity: 1 }, { duration: 0.2, ease: 'easeInOut' })
  animate('.fb-like', { scale: 1, y: 0, opacity: 0 }, { duration: 0.2, ease: 'easeInOut' })
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      class="fb-path"
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
      :style="{ transformOrigin: 'center' }"
    />
    <text
      class="fb-like"
      x="12"
      y="2"
      text-anchor="middle"
      font-size="10"
      :fill="color"
      :opacity="0"
    >
      👍
    </text>
  </svg>
</template>
