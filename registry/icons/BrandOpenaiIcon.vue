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
    '.internal',
    { strokeDashoffset: [-1, 0] },
    {
      duration: 0.8,
      ease: 'easeInOut',
      delay: (i) => i * 0.05
    }
  )
}

const stop = () => {
  animate('.internal', { strokeDashoffset: 0 }, { duration: 0.3, ease: 'easeInOut' })
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
    :class="['cursor-pointer select-none', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path
      v-for="d in [
        'M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35',
        'M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946',
        'M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348',
        'M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45',
        'M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946',
        'M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42'
      ]"
      :key="d"
      :d="d"
      class="internal"
      pathLength="1"
      style="stroke-dasharray: 1"
      opacity="1"
    />
  </svg>
</template>
