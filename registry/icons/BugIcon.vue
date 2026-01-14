<script setup lang="ts">
import { useAnimate } from 'motion-v';
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types';

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 40,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
});

const [scope, animate] = useAnimate();

const start = async () => {
  // Wiggle the legs
  animate(
    '.leg-left',
    { x: [-1, 1, -1], rotate: [-5, 5, -5] },
    { duration: 0.2, repeat: 2, ease: 'easeInOut' }
  );
  animate(
    '.leg-right',
    { x: [1, -1, 1], rotate: [5, -5, 5] },
    { duration: 0.2, repeat: 2, ease: 'easeInOut' }
  );
  // Subtle body shake
  animate(
    '.body',
    { x: [-0.5, 0.5, -0.5] },
    { duration: 0.1, repeat: 2, ease: 'easeInOut' }
  );
};

const stop = async () => {
  animate(
    '.leg-left, .leg-right, .body',
    { x: 0, rotate: 0 },
    { duration: 0.2 }
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
    :color="color"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
    <path
      class="body"
      d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"
    />
    <!-- Left legs -->
    <path class="leg-left" d="M3 13l4 0" />
    <path class="leg-left" d="M4 19l3.35 -2" />
    <path class="leg-left" d="M4 7l3.75 2.4" />
    <!-- Right legs -->
    <path class="leg-right" d="M17 13l4 0" />
    <path class="leg-right" d="M20 19l-3.35 -2" />
    <path class="leg-right" d="M20 7l-3.75 2.4" />
    <!-- Center line -->
    <path d="M12 20l0 -6" />
  </svg>
</template>
