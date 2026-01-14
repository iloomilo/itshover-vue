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

const start = async () => {
  await animate(
    '.triangle',
    { rotateY: 180 },
    { duration: 0.6, ease: 'easeInOut' }
  );
};

const stop = async () => {
  await animate(
    '.triangle',
    { rotateY: -180 },
    { duration: 0.6, ease: 'easeInOut' }
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
    <path class="triangle" d="M3 19h18l-9 -15z" />
  </svg>
</template>
