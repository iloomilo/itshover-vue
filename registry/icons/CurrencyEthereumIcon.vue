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
  await animate('.eth-outer, .eth-inner', { pathLength: 0, opacity: 0 }, { duration: 0 })

  await animate('.eth-outer', { pathLength: 1, opacity: 1 }, { duration: 0.3, ease: 'easeOut' })

  await animate('.eth-inner', { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: 'easeOut' })

  animate('.eth-symbol', { scale: [0.96, 1] }, { duration: 0.2, ease: 'easeOut' })
}

const stop = () => {
  animate('.eth-outer, .eth-inner', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
  animate('.eth-symbol', { scale: 1 }, { duration: 0.2 })
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
      <g class="eth-symbol" :style="{ transformOrigin: '50% 50%' }">
        <path class="eth-outer" d="M6 12l6 -9l6 9l-6 9z" />
        <path class="eth-inner" d="M6 12l6 -3l6 3l-6 2z" />
      </g>
    </svg>
  </div>
</template>
