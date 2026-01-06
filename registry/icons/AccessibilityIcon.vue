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
    '.wheel',
    { rotate: [0, 360] },
    { duration: 1, ease: 'easeInOut', repeat: Infinity }
  );
  animate(
    '.person',
    { y: [0, -2, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate('.wheel', { rotate: 0 }, { duration: 0.3 });
  animate('.person', { y: 0 }, { duration: 0.2 });
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
    <circle class="person" cx="16" cy="4" r="1" />
    <path class="person" d="m18 19 1-7-6 1" />
    <path class="person" d="m5 8 3-3 5.5 3-2.36 3.5" />
    <g class="wheel" :style="{ transformOrigin: '8.5px 17.5px' }">
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </g>
  </svg>
</template>
