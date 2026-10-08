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

  await animate(
    '.logout-arrow, .logout-arrow-bottom',
    {
      x: [0, 6, 0]
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
  animate(
    '.logout-door',
    {
      x: [0, -2, 0]
    },
    {
      duration: 0.25,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.logout-arrow, .logout-arrow-bottom, .logout-door',
    { x: 0 },
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
        class="logout-door"
        :style="{ transformOrigin: '50% 50%' }"
        d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
      />

      <path class="logout-arrow" d="M9 12h12" />

      <path class="logout-arrow-bottom" d="M18 15l3 -3l-3 -3" />
    </svg>
  </div>
</template>
