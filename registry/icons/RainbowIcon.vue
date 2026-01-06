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
    '.arc1',
    { pathLength: [0, 1] },
    { duration: 0.6, ease: 'easeOut' }
  );
  animate(
    '.arc2',
    { pathLength: [0, 1] },
    { duration: 0.6, ease: 'easeOut', delay: 0.1 }
  );
  animate(
    '.arc3',
    { pathLength: [0, 1] },
    { duration: 0.6, ease: 'easeOut', delay: 0.2 }
  );
};

const stop = () => {
  animate('.arc1, .arc2, .arc3', { pathLength: 1 }, { duration: 0.2 });
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
      class="arc1"
      d="M22 17a10 10 0 0 0-20 0"
    />
    <path
      class="arc2"
      d="M6 17a6 6 0 0 1 12 0"
    />
    <path
      class="arc3"
      d="M10 17a2 2 0 0 1 4 0"
    />
  </svg>
</template>
