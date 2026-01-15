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
  animate('.dot-1', { scale: [0, 1.2, 1], opacity: [0, 1] }, { duration: 0.25, ease: 'easeOut' })
  animate(
    '.dot-2',
    { scale: [0, 1.2, 1], opacity: [0, 1] },
    { duration: 0.25, ease: 'easeOut', delay: 0.08 }
  )
  animate(
    '.dot-3',
    { scale: [0, 1.2, 1], opacity: [0, 1] },
    { duration: 0.25, ease: 'easeOut', delay: 0.16 }
  )
  animate(
    '.dot-4',
    { scale: [0, 1.2, 1], opacity: [0, 1] },
    { duration: 0.25, ease: 'easeOut', delay: 0.24 }
  )
  animate('.trend-line', { pathLength: [0, 1] }, { duration: 0.5, ease: 'easeInOut', delay: 0.3 })
}

const stop = () => {
  animate(
    '.dot-1 , .dot-2 , .dot-3 , .dot-4',
    { scale: 1, opacity: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
  animate('.trend-line', { pathLength: 1 }, { duration: 0.2, ease: 'easeInOut' })
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

    <path d="M18 11h.009" class="dot-4" :style="{ transformOrigin: '18px 11px' }" />
    <path d="M14 15h.009" class="dot-3" :style="{ transformOrigin: '14px 15px' }" />
    <path d="M12 6h.009" class="dot-2" :style="{ transformOrigin: '12px 6px' }" />
    <path d="M8 10h.009" class="dot-1" :style="{ transformOrigin: '8px 10px' }" />

    <path d="M3 21l17 -17" class="trend-line" />

    <path d="M3 3v18h18" />
  </svg>
</template>
