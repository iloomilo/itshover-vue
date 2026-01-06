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
    '.send-icon',
    {
      x: [0, 24],
      y: [0, -24],
      opacity: [1, 0],
    },
    { duration: 0.25, ease: 'easeIn' }
  );

  animate('.send-icon', { x: -24, y: 24 }, { duration: 0 });

  animate(
    '.send-icon',
    {
      x: [-24, 0],
      y: [24, 0],
      opacity: [0, 1],
    },
    { duration: 0.25, ease: 'easeOut' }
  );
};

const stop = () => {
  animate('.send-icon', { x: 0, y: 0, opacity: 1 }, { duration: 0.2 });
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
    <g class="send-icon" :style="{ transformOrigin: 'center' }">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 14l11 -11" />
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </g>
  </svg>
</template>
