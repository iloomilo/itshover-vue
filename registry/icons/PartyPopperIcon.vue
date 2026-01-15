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
  animate('.popper', { y: 3, x: -3 }, { duration: 0.25, ease: 'easeOut' })

  animate(
    '.confetti',
    {
      y: [0, -6, -10],
      x: [0, 6, 10],
      opacity: [1, 1, 0],
      scale: [1, 1.2, 0.8]
    },
    { duration: 0.6, ease: 'easeOut' }
  )
}

const stop = () => {
  animate(
    '.popper, .confetti',
    { y: 0, x: 0, opacity: 1, scale: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
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
    <path class="popper" d="M5.8 11.3 2 22l10.7-3.79" />
    <path class="confetti" d="M4 3h.01" />
    <path class="confetti" d="M22 8h.01" />
    <path class="confetti" d="M15 2h.01" />
    <path class="confetti" d="M22 20h.01" />
    <path
      class="confetti"
      d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
    />
    <path
      class="confetti"
      d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
    />
    <path class="confetti" d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
    <path
      class="popper"
      d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
    />
  </svg>
</template>
