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
    '.cart-upper',
    {
      x: [0, 10, 0]
    },
    {
      duration: 0.6,
      ease: 'easeInOut'
    }
  )
  animate(
    '.cart-wheel-left',
    {
      rotate: [0, 180, 0],
      x: [0, 10, 0]
    },
    {
      duration: 0.6,
      ease: 'easeInOut'
    }
  )

  animate(
    '.cart-wheel-right',
    {
      rotate: [0, 180, 0],
      x: [0, 10, 0]
    },
    {
      duration: 0.6,
      ease: 'easeInOut'
    }
  )
  animate(
    '.cart-item',
    {
      y: [0, -2, 0]
    },
    {
      duration: 0.4,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate(
    '.cart-upper, .cart-wheel-left, .cart-wheel-right, .cart-item',
    { x: 0, rotate: 0, y: 0 },
    { duration: 0.2, ease: 'easeInOut' }
  )
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
      viewBox="0 0 48 48"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="square"
    >
      <path
        class="cart-upper"
        d="M8.49994 10H41L37.569 21.4367C36.9345 23.5517 34.9879 25 32.7798 25H10.4999"
      />

      <path
        class="cart-wheel-left"
        :style="{ transformOrigin: '11px 41px' }"
        d="M11 45C13.2091 45 15 43.2091 15 41C15 38.7909 13.2091 37 11 37C8.79086 37 7 38.7909 7 41C7 43.2091 8.79086 45 11 45Z"
      />

      <path
        class="cart-wheel-right"
        :style="{ transformOrigin: '37px 41px' }"
        d="M37 45C39.2091 45 41 43.2091 41 41C41 38.7909 39.2091 37 37 37C34.7909 37 33 38.7909 33 41C33 43.2091 34.7909 45 37 45Z"
      />

      <path
        class="cart-upper"
        d="M41 32H9.46174C7.17727 32 6.08953 29.1885 7.77914 27.651L10.6923 25L7.81067 5.14103C7.63231 3.91188 6.57863 3.00005 5.33661 3.00003L3 3"
      />

      <path class="cart-item cart-upper" d="M30 16L30 19" />
      <path class="cart-item cart-upper" d="M24 16L24 19" />
      <path class="cart-item cart-upper" d="M18 16L18 19" />
    </svg>
  </div>
</template>
