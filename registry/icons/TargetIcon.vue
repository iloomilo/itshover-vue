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
    '.circle-outer',
    {
      scale: [1, 1.1, 1],
      opacity: [1, 0.7, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
    }
  );

  animate(
    '.circle-middle',
    {
      scale: [1, 1.15, 1],
      opacity: [1, 0.6, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.1,
    }
  );

  animate(
    '.circle-inner',
    {
      scale: [1, 1.3, 1],
      opacity: [1, 0.5, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.2,
    }
  );
};

const stop = () => {
  animate(
    '.circle-outer, .circle-middle, .circle-inner',
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
    <circle
      class="circle-outer"
      cx="12"
      cy="12"
      r="10"
      :style="{ transformOrigin: '12px 12px' }"
    />

    <circle
      class="circle-middle"
      cx="12"
      cy="12"
      r="6"
      :style="{ transformOrigin: '12px 12px' }"
    />

    <circle
      class="circle-inner"
      cx="12"
      cy="12"
      r="2"
      :style="{ transformOrigin: '12px 12px' }"
    />
  </svg>
</template>
