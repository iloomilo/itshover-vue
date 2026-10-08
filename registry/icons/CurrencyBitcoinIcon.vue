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
    '.btc-main, .btc-lines, .btc-center',
    { pathLength: 0, opacity: 0 },
    { duration: 0 }
  )
  if (!isCurrentRun(run)) return

  await animate('.btc-lines', { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: 'easeOut' })
  if (!isCurrentRun(run)) return

  await animate('.btc-main', { pathLength: 1, opacity: 1 }, { duration: 0.35, ease: 'easeOut' })
  if (!isCurrentRun(run)) return

  await animate('.btc-center', { pathLength: 1, opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
  if (!isCurrentRun(run)) return

  animate('.btc-symbol', { scale: [0.95, 1] }, { duration: 0.2, ease: 'easeOut' })
}

const stop = () => {
  animate('.btc-main, .btc-lines, .btc-center', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
  animate('.btc-symbol', { scale: 1 }, { duration: 0.2 })
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

      <g class="btc-symbol" :style="{ transformOrigin: '50% 50%' }">
        <g class="btc-main">
          <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
          <path d="M8 6l0 12" />
        </g>

        <path class="btc-center" d="M8 12l6 0" />

        <g class="btc-lines">
          <path d="M9 3l0 3" />
          <path d="M13 3l0 3" />
          <path d="M9 18l0 3" />
          <path d="M13 18l0 3" />
        </g>
      </g>
    </svg>
  </div>
</template>
