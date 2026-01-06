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
    '.sidebar',
    {
      x: 2,
      scaleX: 1.1,
    },
    {
      duration: 0.3,
      ease: 'easeInOut',
    }
  );

  animate(
    '.container',
    {
      scale: 1.02,
    },
    {
      duration: 0.3,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.sidebar, .container',
    {
      x: 0,
      scaleX: 1,
      scale: 1,
    },
    {
      duration: 0.25,
      ease: 'easeInOut',
    }
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
      class="container"
      d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
    />

    <path class="sidebar" d="M15 4l0 16" />
  </svg>
</template>
