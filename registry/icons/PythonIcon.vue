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
    '.snake-top',
    { x: [0, -1, 1, 0], y: [0, -1, 1, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  )
  animate(
    '.snake-bottom',
    { x: [0, 1, -1, 0], y: [0, 1, -1, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  )
  animate('.eyes', { scale: [1, 1.5, 1] }, { duration: 0.4, ease: 'easeInOut' })
}

const stop = () => {
  animate(
    '.snake-top, .snake-bottom, .eyes',
    { x: 0, y: 0, scale: 1 },
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
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path class="snake-top" d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
    <path class="snake-top" d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
    <path
      class="snake-top"
      d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"
    />
    <path class="eyes" :style="{ transformOrigin: '11 6' }" d="M11 6l0 .01" />
    <path class="eyes" :style="{ transformOrigin: '13 18' }" d="M13 18l0 .01" />
  </svg>
</template>
