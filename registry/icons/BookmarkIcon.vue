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
    '.bookmark-body',
    {
      scaleY: 0.9,
      y: 2
    },
    {
      duration: 0.18,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.bookmark-body',
    {
      scaleY: 1,
      y: 0
    },
    {
      duration: 0.18,
      ease: 'easeInOut'
    }
  )
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="square"
    >
      <path
        class="bookmark-body"
        :style="{ transformOrigin: '50% 20%' }"
        d="M24 34L41 44V8C41 5.23858 38.7614 3 36 3H12C9.23858 3 7 5.23858 7 8V44L24 34Z"
      />
    </svg>
  </div>
</template>
