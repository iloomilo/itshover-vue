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

const start = async () => {
  animate(
    '.flap',
    {
      x: 1,
      opacity: 1,
    },
    {
      duration: 0.25,
      delay: 0.3,
      ease: 'easeOut',
    }
  );

  await animate(
    '.globe',
    { pathLength: [0, 1] },
    { duration: 0.8, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.flap',
    { x: 0, opacity: 0 },
    { duration: 0.3, ease: 'easeInOut' }
  );

  animate('.globe', { pathLength: 1 }, { duration: 0.8 });
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
    <path d="M2 9c0-3.3 0-4.95 1.025-5.975S5.7 2 9 2h3c3.3 0 4.95 0 5.975 1.025S19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975S15.3 22 12 22H9c-3.3 0-4.95 0-5.975-1.025S2 18.3 2 15z"></path>
    <path d="M7 17h8"></path>
    <!-- flap -->
    <path
      class="flap"
      d="M12.95 22c2.645 0 3.967 0 4.917-.756.95-.757 1.252-2.051 1.858-4.64l1.917-8.197c.335-1.433.503-2.15.2-2.67C21.287 4.796 19.878 5 18.958 5"
    ></path>
    <!-- globe -->
    <path
      class="globe"
      d="M11 14a4 4 0 0 1 0-8M11 14a4 4 0 0 0 0-8"
    ></path>
    <path
      class="globe"
      d="M11 14s1.5-1.79 1.5-4S11 6 11 6M11 14s-1.5-1.79-1.5-4S11 6 11 6"
    ></path>
  </svg>
</template>
