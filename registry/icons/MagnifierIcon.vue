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
    '.magnifier-group',
    {
      x: [0, 1, 0, -1, 0],
      y: [0, -1, -2, -1, 0],
      rotate: [0, -5, 5, -5, 0],
    },
    { duration: 1, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.magnifier-group',
    { x: 0, y: 0, rotate: 0 },
    { duration: 0.2, ease: 'easeOut' }
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
    viewBox="0 0 32 32"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-miterlimit="10"
    :class="['cursor-pointer', className]"
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <g
      class="magnifier-group"
      :style="{
        transformOrigin: '13px 13px',
        transformBox: 'fill-box',
      }"
    >
      <path d="m21.393,18.565l7.021,7.021c.781.781.781,2.047,0,2.828h0c-.781.781-2.047.781-2.828,0l-7.021-7.021" />
      <circle cx="13" cy="13" r="10" stroke-linecap="square" />
    </g>
  </svg>
</template>
