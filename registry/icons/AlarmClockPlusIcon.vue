<script setup lang="ts">
import { ref } from 'vue'
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()

const animationControls = ref<ReturnType<typeof animate>[]>([])

const start = async () => {
  stop() // Ensure any running animations are stopped before starting new ones

  const clockAnimation = animate(
    '.clock',
    {
      y: -1.5,
      x: [-1, 1, -1, 1, -1, 0]
    },
    {
      y: { duration: 0.2, type: 'spring', stiffness: 200, damping: 25 },
      x: { duration: 0.3, repeat: Infinity, ease: 'linear' }
    }
  )
  animationControls.value.push(clockAnimation)

  const bellsAnimation = animate(
    '.bells',
    {
      y: -2.5,
      x: [-2, 2, -2, 2, -2, 0]
    },
    {
      y: { duration: 0.2, type: 'spring', stiffness: 200, damping: 25 },
      x: { duration: 0.3, repeat: Infinity, ease: 'linear' }
    }
  )
  animationControls.value.push(bellsAnimation)

  await animate('.plus', { scale: [1, 1.2, 1] }, { duration: 0.4, ease: 'easeOut' })
}

const stop = () => {
  animationControls.value.forEach((control) => control.stop())
  animationControls.value = []

  animate('.clock', { y: 0, x: 0 }, { duration: 0.2 })
  animate('.bells', { y: 0, x: 0 }, { duration: 0.2 })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
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
    @mouseenter="start"
    @mouseleave="stop"
  >
    <circle class="clock" cx="12" cy="13" r="8" />
    <path class="bells" :style="{ transformOrigin: '3.5px 4.5px' }" d="M5 3 2 6" />
    <path class="bells" :style="{ transformOrigin: '20.5px 4.5px' }" d="m22 6-3-3" />
    <path class="clock" d="M6.38 18.7 4 21" />
    <path class="clock" d="M17.64 18.67 20 21" />
    <g class="plus" :style="{ transformOrigin: '12px 13px' }">
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </g>
  </svg>
</template>
