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
    '.signal-inner',
    {
      scale: [1, 1.2, 1],
      opacity: [1, 0.6, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
    }
  );

  animate(
    '.signal-outer',
    {
      scale: [1, 1.3, 1],
      opacity: [1, 0.4, 1],
    },
    {
      duration: 0.7,
      ease: 'easeInOut',
      delay: 0.1,
    }
  );

  animate(
    '.indicator',
    {
      opacity: [1, 0.3, 1],
    },
    {
      duration: 0.3,
      ease: 'easeInOut',
    }
  );
};

const stop = () => {
  animate(
    '.signal-inner, .signal-outer, .indicator',
    { scale: 1, opacity: 1 },
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
    <rect width="20" height="8" x="2" y="14" rx="2" />

    <g class="indicator">
      <path d="M6.01 18H6" />
      <path d="M10.01 18H10" />
    </g>

    <path d="M15 10v4" />

    <path
      class="signal-inner"
      d="M17.84 7.17a4 4 0 0 0-5.66 0"
      :style="{ transformOrigin: '15px 7px' }"
    />

    <path
      class="signal-outer"
      d="M20.66 4.34a8 8 0 0 0-11.31 0"
      :style="{ transformOrigin: '15px 4px' }"
    />
  </svg>
</template>
