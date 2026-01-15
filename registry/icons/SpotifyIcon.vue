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
  animate('.circle', { scale: [1, 1.05, 1] }, { duration: 0.5, ease: 'easeInOut' })
  animate(
    '.wave1',
    { x: [-2, 2, -2], pathLength: [1, 0.8, 1] },
    { duration: 0.8, ease: 'easeInOut', repeat: Infinity }
  )
  animate(
    '.wave2',
    { x: [-1, 1, -1], pathLength: [1, 0.9, 1] },
    { duration: 0.7, ease: 'easeInOut', repeat: Infinity }
  )
  animate(
    '.wave3',
    { x: [-2, 2, -2], pathLength: [1, 0.85, 1] },
    { duration: 0.9, ease: 'easeInOut', repeat: Infinity }
  )
}

const stop = () => {
  animate('.circle', { scale: 1 }, { duration: 0.2 })
  animate('.wave1', { x: 0, pathLength: 1 }, { duration: 0.2 })
  animate('.wave2', { x: 0, pathLength: 1 }, { duration: 0.2 })
  animate('.wave3', { x: 0, pathLength: 1 }, { duration: 0.2 })
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
    <path
      class="circle"
      :style="{ transformOrigin: 'center' }"
      d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
    />
    <path class="wave2" d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
    <path class="wave3" d="M9 15c1.5 -1 4 -1 5 .5" />
    <path class="wave1" d="M7 9c2 -1 6 -2 10 .5" />
  </svg>
</template>
