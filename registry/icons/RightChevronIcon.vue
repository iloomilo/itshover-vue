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
    '.chevron',
    { x: [0, 6, 0] },
    {
      duration: 0.8,
      ease: 'easeInOut'
    }
  )
}

const stop = () => {
  animate('.chevron', { x: 0 }, { duration: 0.2, ease: 'easeInOut' })
}

defineExpose({
  startAnimation,
  stopAnimation
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['flex', 'w-8', 'items-center', 'justify-center', className]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="chevron cursor-pointer"
    >
      <path d="M9 6l6 6l-6 6" />
    </svg>
  </div>
</template>
