<script setup lang="ts">
import { useAnimate, motion } from 'motion-v'
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
    '.pen-group',
    {
      x: [0, 1, -1, 1, -1, 0],
      y: [0, -2, -4, -6, -8, -10],
      rotate: [0, -6, -4, -6, -4, 0]
    },
    { duration: 0.8, ease: 'easeInOut' }
  )

  await animate(
    '.pen-slash',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.3, ease: 'easeOut' }
  )

  await animate('.pen-slash', { pathLength: 0, opacity: 0 }, { duration: 0.2, ease: 'easeInOut' })

  animate('.pen-group', { x: 0, y: 0, rotate: 0 }, { duration: 0.25, ease: 'easeInOut' })
}

const stop = () => {
  animate('.pen-group', { x: 0, y: 0, rotate: 0 }, { duration: 0.2, ease: 'easeInOut' })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <svg
    ref="scope"
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="square"
    stroke-miterlimit="10"
    :class="['cursor-pointer', className]"
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <g
      class="pen-group"
      :style="{
        transformOrigin: '50% 50%',
        transformBox: 'fill-box'
      }"
    >
      <motion.path class="pen-slash" d="M20 6 L26 12" :initial="{ pathLength: 0, opacity: 0 }" />

      <path
        class="pen-body"
        d="m10.5,27.5l-8,2 2-8L22.257,3.743c1.657-1.657,4.343-1.657,6,0s1.657,4.343,0,6L10.5,27.5Z"
      />
    </g>
  </svg>
</template>
