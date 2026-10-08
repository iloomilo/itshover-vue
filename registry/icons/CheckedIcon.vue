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
    scope.value,
    {
      scale: 1.1
    },
    {
      duration: 0.1,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
  await animate(
    '.check-icon',
    {
      pathLength: 0
    },
    {
      duration: 0.1,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
  await animate(
    '.check-icon',
    {
      pathLength: 1
    },
    {
      duration: 0.4,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return

  await animate(
    scope.value,
    {
      scale: 1
    },
    {
      duration: 0.2,
      ease: 'easeInOut'
    }
  )
  if (!isCurrentRun(run)) return
}

const stop = () => {
  animate(scope.value, { scale: 1 }, { duration: 0.2 })
  animate('.check-icon', { pathLength: 1 }, { duration: 0.2 })
}

defineExpose({
  startAnimation,
  stopAnimation
} satisfies AnimatedIconHandle)
</script>

<template>
  <div ref="scope" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
      :class="['cursor-pointer', className]"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" class="check-icon" />
    </svg>
  </div>
</template>
