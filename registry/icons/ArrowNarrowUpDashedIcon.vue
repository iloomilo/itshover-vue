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
  animate('.arrow-group', { y: [0, -4, 0] }, { duration: 0.5, ease: 'easeInOut' })
}

const stop = () => {
  animate('.arrow-group', { y: 0 }, { duration: 0.2, ease: 'easeOut' })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', 'items-center', 'justify-center', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g class="arrow-group">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5v6m0 3v1.5m0 3v.5" />
        <path d="M16 9l-4 -4" />
        <path d="M8 9l4 -4" />
      </g>
    </svg>
  </div>
</template>
