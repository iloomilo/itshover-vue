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
  animate('.top-block', { x: -20 }, { duration: 0.4, ease: [0.4, 0, 0.2, 1] })
}

const stop = () => {
  animate('.top-block', { x: 0 }, { duration: 0.4, ease: [0.4, 0, 0.2, 1] })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <svg
    ref="scope"
    :width="size"
    :height="size"
    viewBox="0 0 120 120"
    fill="none"
    :stroke-width="strokeWidth"
    xmlns="http://www.w3.org/2000/svg"
    :class="['cursor-pointer', className]"
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <rect class="top-block" x="44" y="22" width="56" height="36" rx="10" :fill="color" />

    <rect x="20" y="62" width="64" height="40" rx="12" :fill="color" />
  </svg>
</template>
