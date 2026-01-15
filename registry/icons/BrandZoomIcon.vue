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
    scope.value,
    {
      scale: [1, 0.7],
      opacity: [1, 0.6]
    },
    {
      duration: 0.2,
      ease: 'easeIn'
    }
  )
  await animate(
    scope.value,
    {
      scale: [0.7, 1.3, 1.15],
      opacity: [0.6, 1],
      rotateY: [0, 360],
      rotateX: [0, 15, 0]
    },
    {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  )

  animate(
    'path:nth-of-type(2)',
    {
      x: [0, 3, 0],
      opacity: [1, 0.7, 1]
    },
    {
      duration: 0.3,
      repeat: 2,
      ease: 'easeInOut'
    }
  )

  await animate(
    'path:nth-of-type(3)',
    {
      scale: [1, 1.08, 1.05, 1],
      fill: ['rgba(0,0,0,0)', 'rgba(59, 130, 246, 0.1)', 'rgba(0,0,0,0)'] // Corrected 'none' to rgba transparency for tweening if needed or keep 'none' if motion-v supports it
    },
    {
      duration: 0.5,
      ease: 'easeOut'
    }
  )

  animate(
    scope.value,
    {
      y: [0, -2, 0],
      scale: [1.15, 1.05, 1]
    },
    {
      duration: 0.4,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    scope.value,
    {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      y: 0,
      opacity: 1
    },
    {
      duration: 0.3,
      ease: 'easeOut'
    }
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
    :style="{
      perspective: '1000px',
      transformStyle: 'preserve-3d'
    }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M17.011 9.385v5.128l3.989 3.487v-12l-3.989 3.385"
      style="transform: translateX(0px); opacity: 1"
    />
    <path
      d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287l-.001 -.002"
      style="transform: scale(1); fill: none"
    />
  </svg>
</template>
