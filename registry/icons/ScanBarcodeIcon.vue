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
    '.scan-line',
    {
      y: [0, 10, -10, 0],
      opacity: [0.3, 1, 0.3, 1],
    },
    {
      duration: 1.2,
      ease: 'easeInOut',
    }
  );

  animate(
    '.corners',
    {
      scale: [1, 1.05, 1],
    },
    {
      duration: 0.4,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.scan-line, .corners',
    { y: 0, opacity: 1, scale: 1 },
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
    <g class="corners">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </g>

    <g class="barcode">
      <path d="M8 7v10" />
      <path d="M12 7v10" />
      <path d="M17 7v10" />
    </g>

    <line
      class="scan-line"
      x1="8"
      x2="17"
      y1="12"
      y2="12"
      :stroke-width="1"
    />
  </svg>
</template>
