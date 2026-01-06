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
    '.circle',
    { rotate: [0, 360, 0] },
    { duration: 0.8, ease: 'easeInOut' }
  );
  animate(
    '.layer1',
    { x: [-1, 1, -1, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  );
  animate(
    '.layer2',
    { x: [1, -1, 1, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.circle, .layer1, .layer2',
    { rotate: 0, x: 0 },
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
    <path
      class="circle"
      :style="{ transformOrigin: 'center' }"
      d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
    />
    <path
      class="layer1"
      d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"
    />
    <path
      class="layer2"
      d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15"
    />
  </svg>
</template>
