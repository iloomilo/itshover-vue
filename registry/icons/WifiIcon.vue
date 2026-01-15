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
  animate('.wave-1', { opacity: [1, 0.3, 1] }, { duration: 0.6, ease: 'easeInOut' })
  animate('.wave-2', { opacity: [1, 0.3, 1] }, { duration: 0.6, ease: 'easeInOut', delay: 0.15 })
  animate('.wave-3', { opacity: [1, 0.3, 1] }, { duration: 0.6, ease: 'easeInOut', delay: 0.3 })
}

const stop = () => {
  animate('.wave-1', { opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
  animate('.wave-2', { opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
  animate('.wave-3', { opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
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
    <path d="M12 18l.01 0" />
    <path class="wave-1" d="M9.172 15.172a4 4 0 0 1 5.656 0" />
    <path class="wave-2" d="M6.343 12.343a8 8 0 0 1 11.314 0" />
    <path class="wave-3" d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
  </svg>
</template>
