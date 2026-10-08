<script setup lang="ts">
import { ref } from 'vue'
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
const isAnimating = ref(false)

const start = async () => {
  const run = currentRun()

  if (isAnimating.value) return
  isAnimating.value = true

  let iteration = 0
  while (isAnimating.value && (!props.loop || iteration++ === 0)) {
    await animate('.pin-dot', { opacity: [1, 0.4, 1] }, { duration: 0.6, ease: 'easeInOut' })
    if (!isCurrentRun(run)) return
    if (!isAnimating.value) break
  }
}

const stop = () => {
  isAnimating.value = false
  animate('.pin-dot', { opacity: 1 }, { duration: 0.3 })
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
    :style="{ overflow: 'visible' }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <path
      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    />
    <circle class="pin-dot" cx="12" cy="10" r="3" />
  </svg>
</template>
