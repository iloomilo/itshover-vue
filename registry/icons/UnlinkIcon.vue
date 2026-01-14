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
  animate(
    '.chain-left',
    {
      x: -3,
      y: 3,
    },
    {
      duration: 0.3,
      ease: 'easeOut',
    }
  );

  await animate(
    '.chain-right',
    {
      x: 3,
      y: -3,
    },
    {
      duration: 0.3,
      ease: 'easeOut',
    }
  );

  animate(
    '.break-indicator',
    {
      scale: [1, 1.2, 1],
      opacity: [1, 0.6, 1],
    },
    {
      duration: 0.4,
      ease: 'easeInOut',
    }
  );

  animate(
    '.chain-left',
    {
      x: 0,
      y: 0,
    },
    {
      duration: 0.3,
      ease: 'easeIn',
    }
  );

  animate(
    '.chain-right',
    {
      x: 0,
      y: 0,
    },
    {
      duration: 0.3,
      ease: 'easeIn',
    }
  );
};

const stop = () => {
  animate(
    '.chain-left',
    { x: 0, y: 0 },
    { duration: 0.2, ease: 'easeOut' }
  );
  animate(
    '.chain-right',
    { x: 0, y: 0 },
    { duration: 0.2, ease: 'easeOut' }
  );
  animate(
    '.break-indicator',
    { scale: 1, opacity: 1 },
    { duration: 0.2, ease: 'easeOut' }
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
    <path
      class="chain-right"
      d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
    />

    <path
      class="chain-left"
      d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
    />

    <g class="break-indicator">
      <line x1="8" x2="8" y1="2" y2="5" />
      <line x1="2" x2="5" y1="8" y2="8" />
      <line x1="16" x2="16" y1="19" y2="22" />
      <line x1="19" x2="22" y1="16" y2="16" />
    </g>
  </svg>
</template>
