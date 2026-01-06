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
  animate('.top-line', { y: 3 }, { duration: 0.3, ease: 'easeOut' });
  animate('.bottom-line', { y: -3 }, { duration: 0.3, ease: 'easeOut' });
  animate(
    '.rectangle',
    { scale: 0.85 },
    { duration: 0.3, ease: 'easeOut' }
  );
};

const stop = () => {
  animate('.top-line', { y: 0 }, { duration: 0.2, ease: 'easeInOut' });
  animate('.bottom-line', { y: 0 }, { duration: 0.2, ease: 'easeInOut' });
  animate('.rectangle', { scale: 1 }, { duration: 0.2, ease: 'easeInOut' });
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
    <rect
      class="rectangle"
      :style="{ transformOrigin: '12px 12px' }"
      width="10"
      height="6"
      x="7"
      y="9"
      rx="2"
    />
    <path class="bottom-line" d="M22 20H2" />
    <path class="top-line" d="M22 4H2" />
  </svg>
</template>
