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
    '.roof',
    { y: [-2, 0], opacity: [0.6, 1] },
    { duration: 0.4, ease: 'easeOut' }
  );
  animate(
    '.house',
    { scale: [0.95, 1] },
    { duration: 0.3, ease: 'easeOut' }
  );
  animate('.door', { scaleY: [0, 1] }, { duration: 0.3, ease: 'easeOut' });
};

const stop = () => {
  animate(
    '.roof, .house, .door',
    { y: 0, opacity: 1, scale: 1, scaleY: 1 },
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
    <path class="roof" d="M5 12l-2 0l9 -9l9 9l-2 0" />
    <path
      class="house"
      :style="{ transformOrigin: 'center' }"
      d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
    />
    <path
      class="door"
      :style="{ transformOrigin: 'center bottom' }"
      d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
    />
  </svg>
</template>
