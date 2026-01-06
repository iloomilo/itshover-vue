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
    '.history-circle',
    {
      rotate: -45,
      pathLength: [1, 0.75],
    },
    {
      duration: 0.35,
      ease: 'easeOut',
    }
  );

  animate(
    '.clock-hand',
    {
      rotate: -30,
    },
    {
      duration: 0.25,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.history-circle, .clock-hand',
    {
      rotate: 0,
      pathLength: 1,
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
      d="M12 8l0 4l2 2"
      class="clock-hand"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"
      class="history-circle"
      :style="{ transformOrigin: '50% 50%' }"
    />
  </svg>
</template>
