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
  animate('.draw', { pathLength: 0, opacity: 0 }, { duration: 0 })

  await animate(
    '.outer',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.45, ease: 'easeOut' }
  )

  await animate(
    '.path',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.6, ease: 'easeOut' }
  )

  animate('.inner', { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.3, ease: 'easeOut' })
}

const stop = () => {
  animate('.draw', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
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
    <circle class="draw inner" cx="12" cy="12" r="4" />
    <path class="draw path" d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    <circle class="draw outer" cx="12" cy="12" r="10" />
  </svg>
</template>
