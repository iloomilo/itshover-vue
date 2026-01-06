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
    '.triangle',
    { y: [0, -3, 0], scale: [1, 1.05, 1] },
    { duration: 0.6, ease: 'easeInOut' }
  );
  animate(
    '.triangle',
    { opacity: [1, 0.7, 1] },
    { duration: 0.4, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.triangle',
    { y: 0, scale: 1, opacity: 1 },
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
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      class="triangle"
      :style="{ transformOrigin: 'center' }"
      d="M3 19h18l-9 -15z"
    />
  </svg>
</template>
