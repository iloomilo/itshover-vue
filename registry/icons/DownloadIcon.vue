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
    animate(
      '.arrow-head',
      { y: [0, 8, 8, -8, 0], opacity: [1, 0, 0, 0, 1] },
      { duration: 1, times: [0, 0.4, 0.5, 0.6, 1], ease: 'easeInOut' }
    )

    await animate(
      '.arrow-stem',
      { y: [0, 8, 8, -8, 0], opacity: [1, 0, 0, 0, 1] },
      { duration: 1, times: [0, 0.3, 0.4, 0.5, 1], ease: 'easeInOut' }
    )

    if (!isAnimating.value) break

    await animate(
      '.tray',
      { y: [0, 2, 0], scale: [1, 1.05, 1] },
      { duration: 0.3, ease: 'easeOut' }
    )

    if (!isAnimating.value) break

    await new Promise((resolve) => setTimeout(resolve, 200))
  }
}

const stop = () => {
  isAnimating.value = false
  animate('.arrow-head, .arrow-stem, .tray', { y: 0, opacity: 1, scale: 1 }, { duration: 0.3 })
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
    <path
      class="tray"
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      :style="{ transformOrigin: 'center bottom' }"
    />
    <path class="arrow-stem" d="M12 15V3" :style="{ transformOrigin: 'center' }" />
    <path class="arrow-head" d="m7 10 5 5 5-5" :style="{ transformOrigin: 'center' }" />
  </svg>
</template>
