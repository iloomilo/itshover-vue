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
    '.rupee-main, .rupee-line',
    {
      pathLength: 0,
      opacity: 0
    },
    { duration: 0 }
  )

  await animate(
    '.rupee-line',
    {
      pathLength: 1,
      opacity: 1
    },
    {
      duration: 0.25,
      ease: 'easeOut'
    }
  )

  await animate(
    '.rupee-main',
    {
      pathLength: 1,
      opacity: 1
    },
    {
      duration: 0.35,
      ease: 'easeOut'
    }
  )

  animate(
    '.rupee-symbol',
    {
      scale: [0.96, 1]
    },
    {
      duration: 0.2,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate('.rupee-main, .rupee-line', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
  animate('.rupee-symbol', { scale: 1 }, { duration: 0.2 })
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

    <g class="rupee-symbol" :style="{ transformOrigin: '50% 50%' }">
      <path class="rupee-main" d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />

      <path class="rupee-line" d="M7 9l11 0" />
    </g>
  </svg>
</template>
