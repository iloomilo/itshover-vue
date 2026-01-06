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
    '.drum-inner',
    {
      rotate: [0, 360],
    },
    {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    }
  );
};

const stop = () => {
  animate(
    '.drum-inner',
    {
      rotate: 0,
    },
    {
      duration: 0.3,
      ease: 'easeOut',
    }
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

    <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />

    <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />

    <path d="M8 6h.01" />
    <path d="M11 6h.01" />
    <path d="M14 6h2" />

    <path
      class="drum-inner"
      d="M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0"
      :style="{ transformOrigin: '50% 58.33%' }"
    />
  </svg>
</template>
