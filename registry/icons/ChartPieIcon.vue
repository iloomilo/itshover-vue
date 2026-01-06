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
    '.pie-main',
    {
      pathLength: [0, 1],
    },
    {
      duration: 0.5,
      ease: 'easeOut',
    }
  );

  animate(
    '.pie-slice',
    {
      pathLength: [0, 1],
      rotate: [0, 5],
    },
    {
      duration: 0.4,
      ease: 'easeOut',
      delay: 0.2,
    }
  );
};

const stop = () => {
  animate(
    '.pie-main',
    {
      pathLength: 1,
    },
    {
      duration: 0.2,
      ease: 'easeInOut',
    }
  );

  animate(
    '.pie-slice',
    {
      pathLength: 1,
      rotate: 0,
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

    <path
      d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"
      class="pie-main"
    />

    <path
      d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"
      class="pie-slice"
      :style="{ transformOrigin: '17.5px 6px' }"
    />
  </svg>
</template>
