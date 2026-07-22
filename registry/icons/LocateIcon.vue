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
  animate('.locate-target', { opacity: 1, scale: 1 }, { duration: 0.3, ease: 'backOut' })
  animate('.locate-crosshairs', { rotate: 90 }, { duration: 0.3, ease: 'easeInOut' })
}

const stop = () => {
  animate('.locate-target', { opacity: 0, scale: 0 }, { duration: 0.2, ease: 'easeIn' })
  animate('.locate-crosshairs', { rotate: 0 }, { duration: 0.3, ease: 'easeInOut' })
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
    <g class="locate-crosshairs" :style="{ transformOrigin: 'center' }">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </g>
    <circle cx="12" cy="12" r="7" />
    <circle
      class="locate-target"
      cx="12"
      cy="12"
      r="3"
      :style="{ transformOrigin: 'center', opacity: 0 }"
    />
  </svg>
</template>
