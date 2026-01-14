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
    '.plane',
    { x: [0, 10, -10, 0], y: [0, -10, 10, 0], opacity: [1, 0, 0, 1] },
    { duration: 1, times: [0, 0.4, 0.5, 1], ease: 'easeInOut' }
  );
};

const stop = () => {
  animate('.plane', { x: 0, y: 0, opacity: 1 });
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path class="plane" d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
  </svg>
</template>
