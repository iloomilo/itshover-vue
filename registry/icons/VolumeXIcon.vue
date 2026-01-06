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
    '.speaker',
    {
      x: [-1, 1, -1, 0],
    },
    {
      duration: 0.3,
      ease: 'easeInOut',
    }
  );

  animate(
    '.x-mark',
    {
      scale: [1, 1.15, 1],
    },
    {
      duration: 0.4,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate('.speaker', { x: 0 }, { duration: 0.2, ease: 'easeOut' });
  animate('.x-mark', { scale: 1 }, { duration: 0.2, ease: 'easeOut' });
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
    <path
      class="speaker"
      d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    />

    <g class="x-mark" :style="{ transformOrigin: '19px 12px' }">
      <line x1="22" x2="16" y1="9" y2="15" />
      <line x1="16" x2="22" y1="9" y2="15" />
    </g>
  </svg>
</template>
