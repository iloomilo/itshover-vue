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
    animate(
      '.arrow-head',
      { y: [0, 8, 8, -8, 0], opacity: [1, 0, 0, 0, 1] },
      { duration: 1, times: [0, 0.4, 0.5, 0.6, 1], ease: 'easeInOut' }
    )

    await animate(
      '.arrow-stem',
      { y: [0, 8, 8, -8, 0], opacity: [1, 0, 0, 0, 1] },
      { duration: 1, times: [0, 0.3, 0.4, 0.5, 1], ease: 'easeInOut' }
    )
    if (!isCurrentRun(run)) return

    if (!isAnimating.value) break

    await animate(
      '.tray',
      { y: [0, 2, 0], scale: [1, 1.05, 1] },
      { duration: 0.3, ease: 'easeOut' }
    )
    if (!isCurrentRun(run)) return

    if (!isAnimating.value) break

    await delay(200)
    if (!isCurrentRun(run)) return
  }
}

const stop = () => {
  isAnimating.value = false
  animate('.arrow-head, .arrow-stem, .tray', { y: 0, opacity: 1, scale: 1 }, { duration: 0.3 })
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
      class="tray"
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      :style="{ transformOrigin: 'center bottom' }"
    />
    <path class="arrow-stem" d="M12 15V3" :style="{ transformOrigin: 'center' }" />
    <path class="arrow-head" d="m7 10 5 5 5-5" :style="{ transformOrigin: 'center' }" />
  </svg>
</template>
