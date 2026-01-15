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
    '.rosette-badge',
    {
      rotate: [0, -8, 8, 0],
      scale: [1, 1.08, 1]
    },
    {
      duration: 0.6,
      ease: 'easeInOut'
    }
  )

  animate(
    '.discount-dot',
    {
      scale: [1, 1.5, 1],
      opacity: [1, 0.6, 1]
    },
    {
      duration: 0.5,
      ease: 'easeInOut'
    }
  )

  animate(
    '.discount-line',
    {
      pathLength: [0, 1]
    },
    {
      duration: 0.4,
      ease: 'easeOut'
    }
  )

  animate(
    '.rosette-badge',
    {
      scale: [1, 0.97, 1]
    },
    {
      duration: 0.25,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.rosette-badge, .discount-dot, .discount-line',
    { rotate: 0, scale: 1, opacity: 1, pathLength: 1 },
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
    :class="['inline-flex', 'cursor-pointer', 'items-center', 'justify-center', className]"
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
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        class="rosette-badge"
        :style="{ transformOrigin: '12px 12px' }"
        d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
      />
      <path class="discount-line" d="M9 15l6 -6" />
      <circle
        class="discount-dot"
        :style="{ transformOrigin: '9.5px 9.5px' }"
        cx="9.5"
        cy="9.5"
        r=".5"
        fill="currentColor"
      />
      <circle
        class="discount-dot"
        :style="{ transformOrigin: '14.5px 14.5px' }"
        cx="14.5"
        cy="14.5"
        r=".5"
        fill="currentColor"
      />
    </svg>
  </div>
</template>
