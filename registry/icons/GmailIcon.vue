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
    '.envelope-top',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.4, ease: 'easeOut' }
  );
  animate(
    '.envelope-flap',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.5, ease: 'easeOut' }
  );
  animate(
    '.sides',
    { scaleY: [0.95, 1] },
    { duration: 0.3, ease: 'easeOut' }
  );
};

const stop = () => {
  animate(
    '.envelope-top, .envelope-flap, .sides',
    { pathLength: 1, opacity: 1, scaleY: 1 },
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
      class="sides"
      :style="{ transformOrigin: 'center' }"
      d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z"
    />
    <path
      class="sides"
      :style="{ transformOrigin: 'center' }"
      d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"
    />
    <path
      class="envelope-top"
      d="M16 4l-4 4l-4 -4"
    />
    <path
      class="envelope-flap"
      d="M4 6.5l8 7.5l8 -7.5"
    />
  </svg>
</template>
