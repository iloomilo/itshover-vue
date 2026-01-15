<script setup lang="ts">
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2, // Default to 2, though React used color/fill primary
  className: ''
})

const [scope, animate] = useAnimate()

const start = () => {
  animate(
    scope.value,
    {
      x: [0, -1, 1, -1, 0],
      y: [0, 1, -1, 1, 0]
    },
    { duration: 0.25, repeat: 1 }
  )
}

const stop = () => {
  animate(scope.value, { x: 0, y: 0 }, { duration: 0.15 })
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
    :fill="color"
    fill-rule="evenodd"
    :stroke="color"
    :class="['cursor-pointer', className]"
    style="flex: none; line-height: 1"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <title>Cursor</title>
    <path
      d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z"
    />
  </svg>
</template>
