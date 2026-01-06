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

const openLid = () => {
  animate(
    '.trash-lid-lower',
    { rotate: -25, y: -4 },
    { duration: 0.25, ease: 'easeOut' }
  );
  animate(
    '.trash-lid-upper',
    { rotate: -35, y: -6, x: -2 },
    { duration: 0.25, ease: 'easeOut' }
  );
};

const closeLid = () => {
  animate(
    '.trash-lid-lower',
    { rotate: 0, y: 0 },
    { duration: 0.2, ease: 'easeInOut' }
  );
  animate(
    '.trash-lid-upper',
    { rotate: 0, y: 0, x: 0 },
    { duration: 0.2, ease: 'easeInOut' }
  );
};

const start = () => {
  openLid();
};

const stop = () => {
  closeLid();
};

defineExpose({
  startAnimation: start,
  stopAnimation: stop,
} satisfies AnimatedIconHandle);
</script>

<template>
  <svg
    ref="scope"
    :class="['cursor-pointer', className, 'trash-icon']"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <path
      d="M4 7l16 0"
      class="trash-lid-lower"
      :style="{ transformOrigin: '50% 100%' }"
    />

    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />

    <path
      d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
      class="trash-lid-upper"
      :style="{ transformOrigin: '50% 100%' }"
    />
  </svg>
</template>
