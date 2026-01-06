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
  animate('.message-path', { pathLength: 0, opacity: 0 }, { duration: 0 });

  animate(
    '.message-path',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.6, ease: 'easeInOut' }
  );

  animate(
    '.message-path',
    { scale: [1, 1.05, 1] },
    { duration: 0.3, ease: 'easeOut' }
  );
};

const stop = () => {
  animate(
    '.message-path',
    { pathLength: 1, opacity: 1, scale: 1 },
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
      class="message-path"
      d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      :style="{ transformOrigin: 'center' }"
    />
  </svg>
</template>
