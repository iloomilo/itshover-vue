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
  animate('.q-body', { rotate: [0, 2, -2, 1, 0] }, { duration: 0.4, ease: 'easeOut' })
  animate('.q-tail', { rotate: [0, 20, -15, 10, 0] }, { duration: 0.5, ease: 'easeOut' })
}

const stop = () => {
  animate('.q-body, .q-tail', { rotate: 0 }, { duration: 0.2 })
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
      class="q-body"
      d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6"
      :style="{ transformOrigin: '12px 12px' }"
    />
    <path class="q-tail" d="M13 15l5 5" :style="{ transformOrigin: '13px 15px' }" />
  </svg>
</template>
