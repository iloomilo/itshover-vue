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

const start = () => {
  animate('.xai-part-1', { x: -4, y: -2 }, { duration: 0.25, ease: 'easeOut' })
  animate('.xai-part-2', { x: -3, y: 3 }, { duration: 0.25, ease: 'easeOut' })
  animate('.xai-part-3', { x: 4, y: -3 }, { duration: 0.25, ease: 'easeOut' })
  animate('.xai-part-4', { x: 3, y: 2 }, { duration: 0.25, ease: 'easeOut' })

  setTimeout(() => {
    animate('.xai-part-1', { x: 0, y: 0 }, { duration: 0.3, ease: 'easeInOut' })
    animate('.xai-part-2', { x: 0, y: 0 }, { duration: 0.3, ease: 'easeInOut' })
    animate('.xai-part-3', { x: 0, y: 0 }, { duration: 0.3, ease: 'easeInOut' })
    animate('.xai-part-4', { x: 0, y: 0 }, { duration: 0.3, ease: 'easeInOut' })
  }, 250)
}

const stop = () => {
  animate('.xai-part-1', { x: 0, y: 0 }, { duration: 0.2 })
  animate('.xai-part-2', { x: 0, y: 0 }, { duration: 0.2 })
  animate('.xai-part-3', { x: 0, y: 0 }, { duration: 0.2 })
  animate('.xai-part-4', { x: 0, y: 0 }, { duration: 0.2 })
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
    :fill="color"
    :class="['cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <title>xAI</title>
    <path
      class="xai-part-1"
      :style="{ transformBox: 'fill-box', transformOrigin: 'center' }"
      d="M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47z"
    />
    <path
      class="xai-part-2"
      :style="{ transformBox: 'fill-box', transformOrigin: 'center' }"
      d="M6.465 16.676l2.233 3.164L6.467 23H2l4.465-6.324z"
    />
    <path
      class="xai-part-3"
      :style="{ transformBox: 'fill-box', transformOrigin: 'center' }"
      d="M22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"
    />
    <path
      class="xai-part-4"
      :style="{ transformBox: 'fill-box', transformOrigin: 'center' }"
      d="M22 2.582V23h-3.659V7.764L22 2.582z"
    />
  </svg>
</template>
