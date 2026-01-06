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
    '.needle',
    { rotate: [0, 45, -20, 30, 0] },
    { duration: 0.8, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate('.needle', { rotate: 0 }, { duration: 0.3, ease: 'easeInOut' });
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
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    <path
      class="needle"
      :style="{ transformOrigin: '12px 14px' }"
      d="m12 14 4-4"
    />
  </svg>
</template>
