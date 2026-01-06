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
    '.js-text',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.6, ease: 'easeOut' }
  );
  animate(
    '.border',
    { rotate: [0, 5, -5, 0] },
    { duration: 0.5, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.js-text, .border',
    { pathLength: 1, opacity: 1, rotate: 0 },
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
      class="border"
      :style="{ transformOrigin: 'center' }"
      d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"
    />
    <path
      class="js-text"
      d="M7.5 8h3v8l-2 -1"
    />
    <path
      class="js-text"
      d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"
    />
  </svg>
</template>
