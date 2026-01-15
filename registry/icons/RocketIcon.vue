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
  await Promise.all([
    animate(
      '.rocket-upper',
      {
        x: [0, 40],
        y: [0, -40],
        opacity: [1, 0]
      },
      { duration: 0.35, ease: 'easeIn' }
    ),
    animate(
      '.rocket-flame',
      {
        x: [0, -20],
        y: [0, 20],
        scale: [0.8, 1.2],
        opacity: [0.6, 0]
      },
      { duration: 0.25, ease: 'easeOut', delay: 0.05 }
    )
  ])

  await animate('.rocket-upper', { x: -40, y: 40, opacity: 0 }, { duration: 0 })

  animate('.rocket-upper', { x: 0, y: 0, opacity: 1 }, { duration: 0.25, ease: 'easeOut' })

  animate(
    '.rocket-flame',
    { x: 0, y: 0, opacity: 1, scale: 1 },
    { duration: 0.25, ease: 'easeOut' }
  )
}

const stop = () => {
  animate('.rocket-upper, .rocket-flame', { x: 0, y: 0, opacity: 1, scale: 1 }, { duration: 0.2 })
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
    viewBox="0 0 32 32"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-miterlimit="10"
    :class="['cursor-pointer', className]"
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path
      class="rocket-fin-left rocket-upper"
      d="m13.299,9h-3.891c-.892,0-1.738.397-2.308,1.083l-5.1,6.139,6.31,1.51"
    />

    <path
      class="rocket-fin-bottom rocket-upper"
      d="m23,18.701v3.891c0,.892-.397,1.738-1.083,2.308l-6.139,5.1-1.51-6.31"
    />

    <path
      class="rocket-body rocket-upper"
      d="m14.268,23.69c7.986-2.194,14.642-9.015,15.732-21.69-12.675,1.09-19.496,7.746-21.69,15.732l5.958,5.958Z"
    />

    <path
      class="rocket-trajectory rocket-upper"
      d="m19,5c4.111,1.389,6.778,4.056,8,8"
      stroke-linecap="round"
    />

    <circle class="rocket-window rocket-upper" cx="19" cy="13" r="2" fill="currentColor" />

    <path
      class="rocket-flame"
      d="m2,30s.707-4.95,2.121-6.364c1.172-1.172,3.071-1.172,4.243,0s1.172,3.071,0,4.243c-1.414,1.414-6.364,2.121-6.364,2.121Z"
    />
  </svg>
</template>
