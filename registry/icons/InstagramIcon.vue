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

const {
  scope,
  animate,
  startAnimation,
  stopAnimation,
  currentRun,
  isCurrentRun,
  onMouseEnter,
  onMouseLeave
} = useAnimatedIcon(props, {
  start: () => start(),
  stop: () => stop()
})

const start = async () => {
  const run = currentRun()

  animate('.ig-body', { scale: [1, 1.05, 1] }, { duration: 0.3, ease: 'easeOut' })
  await animate('.ig-lens', { scale: [1, 1.2, 1] }, { duration: 0.25, ease: 'easeOut' })
  if (!isCurrentRun(run)) return
  animate('.ig-dot', { opacity: [1, 0, 1] }, { duration: 0.2, ease: 'easeInOut' })
}

const stop = () => {
  animate(
    '.ig-body, .ig-lens, .ig-dot',
    { scale: 1, opacity: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
}

defineExpose({
  startAnimation,
  stopAnimation
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', className]"
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
    >
      <path
        class="ig-body"
        :style="{ transformOrigin: '50% 50%' }"
        d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
      />

      <path
        class="ig-lens"
        :style="{ transformOrigin: '50% 50%' }"
        d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
      />

      <path class="ig-dot" d="M16.5 7.5v.01" />
    </svg>
  </div>
</template>
