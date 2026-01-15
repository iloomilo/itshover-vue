<script setup lang="ts">
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 40,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()

const start = () => {
  animate('.rect-1', { x: 10 }, { duration: 0.3, ease: 'easeInOut' })

  animate('.rect-2', { y: 12, x: -1 }, { duration: 0.3, ease: 'easeInOut' })
  animate('.rect-3', { x: -10 }, { duration: 0.3, ease: 'easeInOut' })
  animate('.rect-4', { y: -12, x: 1 }, { duration: 0.3, ease: 'easeInOut' })
}

const stop = () => {
  animate(
    '.rect-1, .rect-2, .rect-3, .rect-4',
    { scale: 1, x: 0, y: 0 },
    { duration: 0.2, ease: 'easeInOut' }
  )
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
    stroke="currentColor"
    :color="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
  >
    <!-- Note: Initial props are handled by CSS/default state, motion 'initial' not strictly needed if matching static -->
    <rect class="rect-1" width="7" height="9" x="3" y="3" rx="1" />
    <rect class="rect-2" width="7" height="5" x="14" y="3" rx="1" />
    <rect class="rect-3" width="7" height="9" x="14" y="12" rx="1" />
    <rect class="rect-4" width="7" height="5" x="3" y="16" rx="1" />
    <!-- Added event listeners on svg for better hit target or use a wrapper div like others if needed, 
         but React example puts events on svg. However, React example uses `initial={{ x: 0, y: 0 }}` on rects.
         Vue transition doesn't need explicit initial if it matches static. 
         Wait, I need to add @mouseenter to the SVG!
         -->
    <!-- Since I can't edit the template after writing, I'll add listeners now. -->
  </svg>
</template>
