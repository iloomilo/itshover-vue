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
    '.histogram-bar-1',
    { scaleY: [0, 1] },
    { duration: 0.25, ease: 'easeOut' }
  );
  animate(
    '.histogram-bar-2',
    { scaleY: [0, 1] },
    { duration: 0.25, ease: 'easeOut', delay: 0.08 }
  );
  animate(
    '.histogram-bar-3',
    { scaleY: [0, 1] },
    { duration: 0.25, ease: 'easeOut', delay: 0.16 }
  );
  animate(
    '.histogram-bar-4',
    { scaleY: [0, 1] },
    { duration: 0.25, ease: 'easeOut', delay: 0.24 }
  );
  animate(
    '.histogram-curve',
    { pathLength: [0, 1] },
    { duration: 0.5, ease: 'easeInOut', delay: 0.3 }
  );
};

const stop = () => {
  animate(
    '.histogram-bar-1, .histogram-bar-2, .histogram-bar-3, .histogram-bar-4',
    { scaleY: 1 },
    { duration: 0.2, ease: 'easeInOut' }
  );
  animate(
    '.histogram-curve',
    { pathLength: 1 },
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

    <path d="M3 3v18h18" />

    <path
      d="M20 18v3"
      class="histogram-bar-4"
      :style="{ transformOrigin: '20px 21px' }"
    />
    <path
      d="M16 16v5"
      class="histogram-bar-3"
      :style="{ transformOrigin: '16px 21px' }"
    />
    <path
      d="M12 13v8"
      class="histogram-bar-2"
      :style="{ transformOrigin: '12px 21px' }"
    />
    <path
      d="M8 16v5"
      class="histogram-bar-1"
      :style="{ transformOrigin: '8px 21px' }"
    />

    <path
      d="M3 11c6 0 5 -5 9 -5s3 5 9 5"
      class="histogram-curve"
    />
  </svg>
</template>
