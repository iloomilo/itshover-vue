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
  animate('.center', { scale: 1.4 }, { duration: 0.25, ease: 'easeOut' });

  animate('.corners', { scale: 0.85 }, { duration: 0.25, ease: 'easeOut' });
};

const stop = () => {
  animate(
    '.center, .corners',
    { scale: 1 },
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
      class="center"
      cx="12"
      cy="12"
      r="3"
      :style="{ transformOrigin: '12px 12px' }"
    />
    <path class="corners" d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path class="corners" d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path class="corners" d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path class="corners" d="M7 21H5a2 2 0 0 1-2-2v-2" />
  </svg>
</template>
