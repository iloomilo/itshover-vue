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
  animate(scope.value, { y: [0, -1, 0] }, { duration: 0.4, ease: 'easeInOut' })
  animate('.save-label', { opacity: [1, 0.4, 1] }, { duration: 0.4, ease: 'easeInOut' })
}

const stop = () => {
  animate(scope.value, { y: 0 }, { duration: 0.3 })
  animate('.save-label', { opacity: 1 }, { duration: 0.3 })
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
      d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
    />
    <path class="save-shutter" d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
    <path class="save-label" d="M7 3v4a1 1 0 0 0 1 1h7" :style="{ transformOrigin: 'center' }" />
  </svg>
</template>
