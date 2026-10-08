<script setup lang="ts">
import { useAnimatedIcon } from '../animation/useAnimatedIcon'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
  disableHover: false,
  autoplay: false,
  loop: false
})

const { scope, animate, startAnimation, stopAnimation, onMouseEnter, onMouseLeave } =
  useAnimatedIcon(props, {
    start: () => start(),
    stop: () => stop()
  })

const start = () => {
  animate(
    '.button',
    { scale: [1, 0.9, 1] },
    {
      duration: 0.4,
      delay: (i: number) => i * 0.05,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate('.button', { scale: 1 }, { duration: 0.2, ease: 'easeInOut' })
}

defineExpose({
  startAnimation,
  stopAnimation
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
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path
      class="button"
      d="M6 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
    />
    <path
      class="button"
      d="M13 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
    />
    <path
      class="button"
      d="M20 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
    />

    <path
      class="button"
      d="M6 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
    />
    <path
      class="button"
      d="M13 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
    />
    <path
      class="button"
      d="M20 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
    />

    <path
      class="button"
      d="M13 16h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
    />
  </svg>
</template>
