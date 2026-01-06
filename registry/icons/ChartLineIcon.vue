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
    '.chart-line',
    {
      pathLength: [0, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
    }
  );

  animate(
    '.base-line',
    {
      scaleX: [0, 1],
    },
    {
      duration: 0.4,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.chart-line',
    {
      pathLength: 1,
    },
    {
      duration: 0.2,
      ease: 'easeInOut',
    }
  );

  animate(
    '.base-line',
    {
      scaleX: 1,
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
      d="M4 19l16 0"
      class="base-line"
      :style="{ transformOrigin: '4px 19px' }"
    />

    <path
      d="M4 15l4 -6l4 2l4 -5l4 4"
      class="chart-line"
    />
  </svg>
</template>
