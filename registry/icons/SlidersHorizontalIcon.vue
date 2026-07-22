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
  animate('.slider-1', { x: [0, -4, 0] }, { duration: 2, repeat: Infinity, ease: 'easeInOut' })
  animate('.path-1-left', { x2: [10, 6, 10] }, { duration: 2, repeat: Infinity, ease: 'easeInOut' })
  animate(
    '.path-1-right',
    { x1: [14, 10, 14] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  )

  animate(
    '.slider-2',
    { x: [0, 4, 0] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
  )
  animate(
    '.path-2-left',
    { x2: [8, 12, 8] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
  )
  animate(
    '.path-2-right',
    { x1: [12, 16, 12] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
  )

  animate(
    '.slider-3',
    { x: [0, -4, 0] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
  )
  animate(
    '.path-3-left',
    { x2: [12, 8, 12] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
  )
  animate(
    '.path-3-right',
    { x1: [16, 12, 16] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
  )
}

const stop = () => {
  animate('.slider-1, .slider-2, .slider-3', { x: 0 }, { duration: 0.3 })
  animate('.path-1-left', { x2: 10 }, { duration: 0.3 })
  animate('.path-1-right', { x1: 14 }, { duration: 0.3 })
  animate('.path-2-left', { x2: 8 }, { duration: 0.3 })
  animate('.path-2-right', { x1: 12 }, { duration: 0.3 })
  animate('.path-3-left', { x2: 12 }, { duration: 0.3 })
  animate('.path-3-right', { x1: 16 }, { duration: 0.3 })
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
    <line class="path-1-left" x1="3" y1="5" x2="10" y2="5" />
    <line class="slider-1" x1="14" y1="3" x2="14" y2="7" />
    <line class="path-1-right" x1="14" y1="5" x2="21" y2="5" />

    <line class="path-2-left" x1="3" y1="12" x2="8" y2="12" />
    <line class="slider-2" x1="8" y1="10" x2="8" y2="14" />
    <line class="path-2-right" x1="12" y1="12" x2="21" y2="12" />

    <line class="path-3-left" x1="3" y1="19" x2="12" y2="19" />
    <line class="slider-3" x1="16" y1="17" x2="16" y2="21" />
    <line class="path-3-right" x1="16" y1="19" x2="21" y2="19" />
  </svg>
</template>
