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
    '.info-circle-i',
    {
      pathLength: [0, 1]
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )

  animate(
    '.info-line-i',
    {
      pathLength: [0, 1]
    },
    {
      duration: 0.4,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate('.info-circle-i, .info-line-i', { pathLength: 1 }, { duration: 0.2, ease: 'easeInOut' })
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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" class="info-circle" />
    <path d="M12 9h.01" class="info-circle-i" />
    <path d="M11 12h1v4h1" class="info-line-i" />
  </svg>
</template>
