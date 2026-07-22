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
  animate(
    '.anthropic-i',
    { rotateX: 22, skewX: -22, scaleY: 1.09 },
    { duration: 0.2, ease: 'easeInOut' }
  )
}

const stop = () => {
  animate('.anthropic-i', { rotateX: 0, skewX: 0, scaleY: 1 }, { duration: 0.2 })
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
    <title>Anthropic</title>
    <g class="anthropic-a" :style="{ transformBox: 'fill-box', transformOrigin: 'center' }">
      <path
        d="M6.57 3.52h3.767L16.906 20h-3.674l-1.343-3.461H5.017L3.673 20H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"
      />
    </g>
    <g class="anthropic-i" :style="{ transformBox: 'fill-box', transformOrigin: 'center' }">
      <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48z" />
    </g>
  </svg>
</template>
