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
    '.plug-upper-part',
    {
      x: 2
    },
    {
      duration: 0.35,
      ease: 'easeOut'
    }
  )

  animate(
    '.plug-lower-part',
    {
      y: -2,
      x: 2
    },
    {
      duration: 0.35,
      ease: 'easeOut'
    }
  )
}

const stop = () => {
  animate(
    '.plug-upper-part, .plug-lower-leg, .plug-lower-part',
    {
      x: 0,
      y: 0,
      opacity: 1
    },
    {
      duration: 0.3,
      ease: 'easeInOut'
    }
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
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 16l-4 4" />
    <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" class="plug-lower-part" />
    <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" class="plug-upper-part" />
    <path d="M3 21l2.5 -2.5" class="plug-lower-part" />
    <path d="M18.5 5.5l2.5 -2.5" class="plug-upper-part" />
    <path d="M10 11l-2 2" class="plug-lower-part plug-lower-leg" />
    <path d="M13 14l-2 2" class="plug-lower-part plug-lower-leg" />
    <path d="M16 16l4 4" />
  </svg>
</template>
