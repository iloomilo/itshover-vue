<script setup lang="ts">
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()

const start = async () => {
  await animate('.question-mark', { pathLength: [0, 1] }, { duration: 0.4, ease: 'easeInOut' })

  await animate(
    '.question-mark-dot',
    {
      pathLength: [0, 1],
      y: [0, -3, 0]
    },
    { duration: 0.3, ease: 'easeOut' }
  )

  animate('.question-group', { scale: [1, 1.05, 1] }, { duration: 0.2, ease: 'easeOut' })
}

const stop = () => {
  animate(
    '.question-mark, .question-mark-dot, .question-group',
    { pathLength: 1, y: 0, scale: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  )
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <div ref="scope" @mouseenter="start" @mouseleave="stop">
    <svg
      :class="['question-group', 'cursor-pointer', className]"
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
      <path
        class="question-mark"
        d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"
      />
      <path class="question-mark-dot" d="M12 19l0 .01" />
    </svg>
  </div>
</template>
