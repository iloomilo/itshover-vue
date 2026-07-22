<script setup lang="ts">
import { ref } from 'vue'
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

const props = withDefaults(defineProps<AnimatedIconProps>(), {
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

  animate(scope.value, { color: '#9146FF', stroke: '#9146FF' }, { duration: 0.3 })

  while (isAnimating.value) {
    await animate('.twitch-eyes', { scaleY: [1, 0, 1] }, { duration: 0.1, ease: 'easeInOut' })

    if (!isAnimating.value) break

    if (Math.random() > 0.6) {
      await animate(
        '.twitch-path',
        { x: [0, -1, 1, 0], y: [0, 0.5, -0.5, 0] },
        { duration: 0.15, ease: 'linear' }
      )
    }

    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 2000))
  }
}

const stop = () => {
  isAnimating.value = false
  animate(scope.value, { color: props.color, stroke: props.color }, { duration: 0.3 })
  animate('.twitch-eyes', { scaleY: 1 }, { duration: 0.3 })
  animate('.twitch-path', { x: 0, y: 0 }, { duration: 0.3 })
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
      class="twitch-path"
      d="M21 2H3v16h5v4l4-4h5l4-4V2z"
      :style="{ transformOrigin: 'center' }"
    />
    <g class="twitch-eyes" :style="{ transformOrigin: 'center 9px' }">
      <path d="M11 11V7" />
      <path d="M16 11V7" />
    </g>
  </svg>
</template>
