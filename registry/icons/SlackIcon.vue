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
  animate('.piece1', { rotate: [0, -90, 0] }, { duration: 0.6, ease: 'easeInOut' })
  animate('.piece2', { rotate: [0, 90, 0] }, { duration: 0.6, ease: 'easeInOut', delay: 0.1 })
  animate('.piece3', { rotate: [0, -90, 0] }, { duration: 0.6, ease: 'easeInOut', delay: 0.2 })
  animate('.piece4', { rotate: [0, 90, 0] }, { duration: 0.6, ease: 'easeInOut', delay: 0.3 })
}

const stop = () => {
  animate('.piece1, .piece2, .piece3, .piece4', { rotate: 0 }, { duration: 0.2, ease: 'easeInOut' })
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
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <g class="piece1" :style="{ transformOrigin: 'center' }">
      <path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" />
    </g>
    <g class="piece2" :style="{ transformOrigin: 'center' }">
      <path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" />
    </g>
    <g class="piece3" :style="{ transformOrigin: 'center' }">
      <path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" />
    </g>
    <g class="piece4" :style="{ transformOrigin: 'center' }">
      <path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" />
    </g>
  </svg>
</template>
