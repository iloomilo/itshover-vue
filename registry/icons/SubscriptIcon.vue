<script setup lang="ts">
import { useAnimate } from 'motion-v';
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types';

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
});

const [scope, animate] = useAnimate();

const start = () => {
  animate(
    '.x-mark',
    { scale: [1, 1.06, 1] },
    { duration: 0.25, ease: 'easeOut' }
  );

  animate(
    '.subscript',
    {
      y: [0, 4, 3],
      scale: [1, 0.9, 0.92],
      opacity: [1, 0.9, 1],
    },
    {
      duration: 0.45,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.x-mark, .subscript',
    { scale: 1, y: 0, opacity: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  );
};

defineExpose({
  startAnimation: start,
  stopAnimation: stop,
} satisfies AnimatedIconHandle);
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
    <g class="x-mark">
      <path d="m4 5 8 8" />
      <path d="m12 5-8 8" />
    </g>

    <path
      class="subscript"
      d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
    />
  </svg>
</template>
