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
    '.arrows-tr',
    { x: 2, y: -2 },
    { duration: 0.25, ease: 'easeOut' }
  );
  animate(
    '.arrows-tl',
    { x: -2, y: -2 },
    { duration: 0.25, ease: 'easeOut' }
  );
  animate(
    '.arrows-br',
    { x: 2, y: 2 },
    { duration: 0.25, ease: 'easeOut' }
  );
  animate(
    '.arrows-bl',
    { x: -2, y: 2 },
    { duration: 0.25, ease: 'easeOut' }
  );

  animate('.corners', { scale: 1.08 }, { duration: 0.25, ease: 'easeOut' });
};

const stop = () => {
  animate(
    '.arrows-tr, .arrows-tl, .arrows-br, .arrows-bl',
    { x: 0, y: 0 },
    { duration: 0.2, ease: 'easeInOut' }
  );
  animate('.corners', { scale: 1 }, { duration: 0.2, ease: 'easeInOut' });
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
    <path class="arrows-br" d="m15 15 6 6" />
    <path class="arrows-tr" d="m15 9 6-6" />
    <path class="corners arrows-br" d="M21 16v5h-5" />
    <path class="corners arrows-tr" d="M21 8V3h-5" />
    <path class="corners arrows-bl" d="M3 16v5h5" />
    <path class="arrows-bl" d="m3 21 6-6" />
    <path class="corners arrows-tl" d="M3 8V3h5" />
    <path class="arrows-tl" d="M9 9 3 3" />
  </svg>
</template>
