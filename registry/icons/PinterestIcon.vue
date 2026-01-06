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
    '.pin',
    { y: [0, -3, 0], rotate: [0, -10, 0] },
    { duration: 0.6, ease: 'easeInOut' }
  );
  animate(
    '.circle',
    { scale: [1, 1.05, 1] },
    { duration: 0.4, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.pin, .circle',
    { y: 0, rotate: 0, scale: 1 },
    { duration: 0.2, ease: 'easeInOut' }
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
      class="pin"
      :style="{ transformOrigin: 'center' }"
      d="M8 20l4 -9"
    />
    <path
      class="pin"
      :style="{ transformOrigin: 'center' }"
      d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"
    />
    <path
      class="circle"
      :style="{ transformOrigin: 'center' }"
      d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
    />
  </svg>
</template>
