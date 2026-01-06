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

const swapDistance = 10;

const start = () => {
  animate(
    '.one',
    { y: swapDistance },
    { duration: 0.3, ease: 'easeInOut' }
  );
  animate(
    '.zero',
    { y: -swapDistance },
    { duration: 0.3, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate('.one, .zero', { y: 0 }, { duration: 0.3, ease: 'easeInOut' });
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
    <path d="m3 16 4 4 4-4" />
    <path d="M7 20V4" />
    <g class="one">
      <path d="M17 10V4h-2" />
      <path d="M15 10h4" />
    </g>
    <rect
      class="zero"
      x="15"
      y="14"
      width="4"
      height="6"
      ry="2"
    />
  </svg>
</template>
