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
    '.border',
    { scale: [1, 1.05, 1] },
    { duration: 0.4, ease: 'easeInOut' }
  );
  animate(
    '.lines',
    { pathLength: [0, 1] },
    { duration: 0.5, ease: 'easeOut' }
  );
};

const stop = () => {
  animate(
    '.lines, .border',
    { pathLength: 1, scale: 1 },
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
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      class="lines"
      d="M8 11v5"
    />
    <path
      class="lines"
      d="M8 8v.01"
    />
    <path
      class="lines"
      d="M12 16v-5"
    />
    <path
      class="lines"
      d="M16 16v-3a2 2 0 1 0 -4 0"
    />
    <path
      class="border"
      d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
      :style="{ transformOrigin: 'center' }"
    />
  </svg>
</template>
