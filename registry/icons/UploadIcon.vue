<script setup lang="ts">
import { ref } from 'vue'
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()
const isAnimating = ref(false)

const start = async () => {
  if (isAnimating.value) return
  isAnimating.value = true

  while (isAnimating.value) {
    await animate('.arrow-group', { y: -12, opacity: 0 }, { duration: 0.4, ease: 'easeIn' })

    if (!isAnimating.value) break

    await animate('.arrow-group', { y: 12, opacity: 0 }, { duration: 0 })

    await animate('.arrow-group', { y: 0, opacity: 1 }, { duration: 0.4, ease: 'easeOut' })

    if (!isAnimating.value) break

    await new Promise((resolve) => setTimeout(resolve, 200))
  }
}

const stop = () => {
  isAnimating.value = false
  animate('.arrow-group', { y: 0, opacity: 1 }, { duration: 0.3, ease: 'easeOut' })
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
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <g class="arrow-group">
      <path d="M12 3v12" />
      <path d="m17 8-5-5-5 5" />
    </g>
  </svg>
</template>
