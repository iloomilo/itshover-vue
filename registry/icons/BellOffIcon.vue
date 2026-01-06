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
    '.bell',
    { x: [-1, 1, -1, 1, 0] },
    { duration: 0.4, ease: 'easeInOut' }
  );
  animate(
    '.slash',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.5, ease: 'easeOut' }
  );
};

const stop = () => {
  animate('.slash', { pathLength: 1, opacity: 1 }, { duration: 0.2 });
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
    <path class="bell" d="M10.268 21a2 2 0 0 0 3.464 0" />
    <path
      class="bell"
      d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"
    />
    <path
      class="slash"
      d="m2 2 20 20"
    />
    <path
      class="bell"
      d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"
    />
  </svg>
</template>
