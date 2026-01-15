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
  animate('.cart-icon', { x: [0, 6, 0] }, { duration: 0.35, ease: 'easeInOut' })
  animate('.cart-wheel-left', { rotate: [0, 360] }, { duration: 0.35, ease: 'easeInOut' })

  animate('.cart-wheel-right', { rotate: [0, 360] }, { duration: 0.35, ease: 'easeInOut' })
}

const stop = () => {
  animate('.cart-icon', { x: 0 }, { duration: 0.2 })
  animate('.cart-wheel-left', { rotate: 0 }, { duration: 0.2 })
  animate('.cart-wheel-right', { rotate: 0 }, { duration: 0.2 })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="cart-icon"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      <path
        class="cart-wheel-left"
        :style="{ transformOrigin: '6px 19px' }"
        d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      />

      <path
        class="cart-wheel-right"
        :style="{ transformOrigin: '17px 19px' }"
        d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      />

      <path d="M17 17h-11v-14h-2" />

      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
  </div>
</template>
