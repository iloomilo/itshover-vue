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
    '.steam',
    {
      y: [-2, -4],
      opacity: [1, 0]
    },
    {
      duration: 0.8,
      ease: 'easeOut',
      repeat: 2
    }
  )

  animate(
    '.bowl',
    {
      rotate: [0, 1, -1, 0]
    },
    {
      duration: 0.4,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate(
    '.steam',
    {
      y: 0,
      opacity: 1
    },
    {
      duration: 0.3
    }
  )
  animate(
    '.bowl',
    {
      rotate: 0
    },
    {
      duration: 0.3
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
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <g class="bowl" :style="{ transformOrigin: '12px 16px' }">
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
      <path d="M7 21h10" />
      <path d="M19.5 12 22 6" />
    </g>

    <g class="steam">
      <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
      <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
      <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
    </g>
  </svg>
</template>
