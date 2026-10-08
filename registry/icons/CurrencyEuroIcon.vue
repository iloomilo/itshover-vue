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

  await animate('.eur-curve, .eur-line', { pathLength: 0, opacity: 0 }, { duration: 0 })
  if (!isCurrentRun(run)) return

  await animate('.eur-line', { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: 'easeOut' })
  if (!isCurrentRun(run)) return

  await animate('.eur-curve', { pathLength: 1, opacity: 1 }, { duration: 0.4, ease: 'easeOut' })
  if (!isCurrentRun(run)) return

  animate('.eur-symbol', { scale: [0.96, 1] }, { duration: 0.2, ease: 'easeOut' })
}

const stop = () => {
  animate('.eur-curve, .eur-line', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
  animate('.eur-symbol', { scale: 1 }, { duration: 0.2 })
}

defineExpose({
  startAnimation,
  stopAnimation
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', 'items-center', 'justify-center', className]"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      <g class="eur-symbol" :style="{ transformOrigin: '50% 50%' }">
        <path class="eur-curve" d="M17.2 7a6 7 0 1 0 0 10" />
        <path class="eur-line" d="M13 10h-8" />
        <path class="eur-line" d="M5 14h8" />
      </g>
    </svg>
  </div>
</template>
