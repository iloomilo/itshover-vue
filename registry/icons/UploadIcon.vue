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
  onMouseLeave,
  delay
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
    await animate('.arrow-group', { y: -12, opacity: 0 }, { duration: 0.4, ease: 'easeIn' })
    if (!isCurrentRun(run)) return

    if (!isAnimating.value) break

    await animate('.arrow-group', { y: 12, opacity: 0 }, { duration: 0 })
    if (!isCurrentRun(run)) return

    await animate('.arrow-group', { y: 0, opacity: 1 }, { duration: 0.4, ease: 'easeOut' })
    if (!isCurrentRun(run)) return

    if (!isAnimating.value) break

    await delay(200)
    if (!isCurrentRun(run)) return
  }
}

const stop = () => {
  isAnimating.value = false
  animate('.arrow-group', { y: 0, opacity: 1 }, { duration: 0.3, ease: 'easeOut' })
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <g class="arrow-group">
      <path d="M12 3v12" />
      <path d="m17 8-5-5-5 5" />
    </g>
  </svg>
</template>
