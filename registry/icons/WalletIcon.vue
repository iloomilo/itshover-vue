<script setup lang="ts">
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 40,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()

const start = () => {
  // Flap opens outward
  animate('.flap', { rotateY: 25, x: 2 }, { duration: 0.4, ease: 'easeOut' })

  // Wallet expands slightly
  animate('.wallet-body', { scale: 1.05 }, { duration: 0.4, ease: 'easeOut' })
}

const stop = () => {
  animate('.flap', { rotateY: 0, x: 0 }, { duration: 0.4, ease: 'easeIn' })

  animate('.wallet-body', { scale: 1 }, { duration: 0.4, ease: 'easeIn' })
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
    :color="color"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    :style="{ perspective: '400px' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path
      class="wallet-body"
      d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
    />

    <path
      class="flap"
      d="M20 12v4h-4a2 2 0 0 1 0 -4h4"
      :style="{
        transformOrigin: '50% 50%',
        transformStyle: 'preserve-3d'
      }"
    />
  </svg>
</template>
