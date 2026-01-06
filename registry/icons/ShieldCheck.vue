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
    '.shield-body',
    { scale: [1, 1.05, 1] },
    { duration: 0.35, ease: 'easeOut' }
  );

  animate(
    '.shield-check',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.3, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate('.shield-body', { scale: 1 }, { duration: 0.2 });
  animate(
    '.shield-check',
    { pathLength: 1, opacity: 1 },
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
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path
      class="shield-body"
      :style="{ transformOrigin: '50% 50%' }"
      d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
    />

    <path
      class="shield-check"
      d="M15 19l2 2l4 -4"
    />
  </svg>
</template>
