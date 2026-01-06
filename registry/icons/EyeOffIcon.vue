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
    '.eye-strike',
    {
      pathLength: [0, 1],
      opacity: [0.5, 1],
    },
    {
      duration: 0.3,
      ease: 'easeOut',
    }
  );

  animate(
    '.eye-parts',
    {
      opacity: 0.6,
      scale: 0.98,
    },
    {
      duration: 0.3,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.eye-strike, .eye-parts',
    {
      pathLength: 1,
      opacity: 1,
      scale: 1,
    },
    {
      duration: 0.2,
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

    <g class="eye-parts" :style="{ transformOrigin: '50% 50%' }">
      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
    </g>

    <path
      d="M3 3l18 18"
      class="eye-strike"
    />
  </svg>
</template>
