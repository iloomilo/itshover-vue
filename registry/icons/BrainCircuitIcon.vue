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

const start = () => {
  animate(
    '.brain-outline',
    { opacity: [1, 0.7, 1] },
    { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  )
  animate(
    '.circuit-line',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.6, ease: 'easeOut' }
  )

  const terminals = ['.terminal-1', '.terminal-2', '.terminal-3', '.terminal-4']
  terminals.forEach((selector, index) => {
    animate(
      selector,
      { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] },
      {
        duration: 0.8,
        delay: 0.2 + index * 0.15,
        repeat: Infinity,
        repeatDelay: 1,
        ease: 'easeInOut'
      }
    )
  })
}

const stop = () => {
  animate('.brain-outline', { opacity: 1 }, { duration: 0.3 })
  animate('.circuit-line', { pathLength: 1, opacity: 1 }, { duration: 0.3 })
  animate('.terminal', { scale: 1, opacity: 1 }, { duration: 0.3 })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
</script>

<template>
  <div
    ref="scope"
    :class="['relative', 'flex', 'items-center', 'justify-center', className]"
    @mouseenter="start"
    @mouseleave="stop"
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
        class="brain-outline"
        d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
      />
      <path class="circuit-line" d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path class="brain-outline" d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path class="brain-outline" d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path class="brain-outline" d="M6 18a4 4 0 0 1-1.967-.516" />
      <path class="circuit-line" d="M12 13h4" />
      <path class="circuit-line" d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path class="circuit-line" d="M12 8h8" />
      <path class="circuit-line" d="M16 8V5a2 2 0 0 1 2-2" />
      <circle class="terminal terminal-1" cx="16" cy="13" r=".5" />
      <circle class="terminal terminal-2" cx="18" cy="3" r=".5" />
      <circle class="terminal terminal-3" cx="20" cy="21" r=".5" />
      <circle class="terminal terminal-4" cx="20" cy="8" r=".5" />
    </svg>
  </div>
</template>
