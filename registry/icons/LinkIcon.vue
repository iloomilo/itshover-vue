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
  animate('.link-top', { x: 1.5, y: -1.5 }, { duration: 0.25, ease: 'easeOut' })

  animate('.link-bottom', { x: -1.5, y: 1.5 }, { duration: 0.25, ease: 'easeOut' })

  animate(
    '.link-middle',
    { opacity: [0.6, 1], scale: [0.95, 1] },
    { duration: 0.2, ease: 'easeOut' }
  )
}

const stop = () => {
  animate(
    '.link-top, .link-bottom, .link-middle',
    { x: 0, y: 0, opacity: 1, scale: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
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
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path d="M9 15l6 -6" class="link-middle" :style="{ transformOrigin: '50% 50%' }" />

    <path
      d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"
      class="link-top"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"
      class="link-bottom"
      :style="{ transformOrigin: '50% 50%' }"
    />
  </svg>
</template>
