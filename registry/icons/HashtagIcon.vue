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
    '.line-horizontal',
    {
      scaleX: 1.1,
      opacity: 0.7,
    },
    {
      duration: 0.3,
      ease: 'easeOut',
    }
  );

  animate(
    '.line-vertical',
    {
      scaleY: 1.1,
      opacity: 0.7,
    },
    {
      duration: 0.3,
      delay: 0.1,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.line-horizontal, .line-vertical',
    {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
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

    <path class="line-horizontal" d="M5 9l14 0" />
    <path class="line-horizontal" d="M5 15l14 0" />

    <path class="line-vertical" d="M11 4l-4 16" />
    <path class="line-vertical" d="M17 4l-4 16" />
  </svg>
</template>
