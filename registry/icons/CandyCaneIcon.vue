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
    '.cane',
    { rotate: [0, -10, 10, -5, 5, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate('.cane', { rotate: 0 }, { duration: 0.2, ease: 'easeInOut' });
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
    <g class="cane" :style="{ transformOrigin: '12px 12px' }">
      <path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" />
      <path d="M17.75 7 15 2.1" />
      <path d="M10.9 4.8 13 9" />
      <path d="m7.9 9.7 2 4.4" />
      <path d="M4.9 14.7 7 18.9" />
    </g>
  </svg>
</template>
