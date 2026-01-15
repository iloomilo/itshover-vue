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

const start = async () => {
  await animate(
    '.triangle',
    {
      y: [0, -1.5, 0]
    },
    {
      duration: 0.25,
      ease: 'easeOut'
    }
  )

  animate(
    '.exclamation-line',
    {
      scaleY: [1, 1.35, 1]
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
  )

  animate(
    '.exclamation-dot',
    {
      scale: [1, 1.4, 1],
      opacity: [1, 0.6, 1]
    },
    {
      duration: 0.25,
      delay: 0.05,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate('.triangle', { y: 0 }, { duration: 0.2, ease: 'easeOut' })
  animate('.exclamation-line', { scaleY: 1 }, { duration: 0.2, ease: 'easeOut' })
  animate('.exclamation-dot', { scale: 1, opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
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
    <path
      class="triangle"
      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
    />

    <g>
      <path class="exclamation-line" d="M12 9v4" :style="{ transformOrigin: '12px 11px' }" />
      <path class="exclamation-dot" d="M12 17h.01" :style="{ transformOrigin: '12px 17px' }" />
    </g>
  </svg>
</template>
