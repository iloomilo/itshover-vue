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
    '.status-dot',
    { opacity: [1, 0.4, 1] },
    { duration: 1, repeat: Infinity, ease: 'easeInOut', delay: (i: number) => i * 0.3 }
  )
  animate(
    'path.cloud-path',
    { scale: [1, 1.01, 1] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  )
}

const stop = () => {
  animate('.status-dot', { opacity: 1 }, { duration: 0.3 })
  animate('path.cloud-path', { scale: 1 }, { duration: 0.3 })
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
      class="cloud-path"
      d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
      :style="{ transformOrigin: 'center' }"
    />
    <circle class="status-dot" cx="9" cy="15" r="0.5" :fill="color" />
    <circle class="status-dot" cx="12" cy="15" r="0.5" :fill="color" />
    <circle class="status-dot" cx="15" cy="15" r="0.5" :fill="color" />
  </svg>
</template>
