<script setup lang="ts">
import { useAnimate } from 'motion-v';
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types';

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 40,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
});

const [scope, animate] = useAnimate();

const swapDistance = 24;

const start = () => {
  animate(
    '.text-z',
    {
      y: -swapDistance,
    },
    {
      duration: 0.3,
      ease: 'easeInOut',
    }
  );
  animate(
    '.text-a',
    {
      y: swapDistance,
      scale: 1.05,
    },
    {
      duration: 0.3,
      ease: 'easeInOut',
    }
  );
};

const stop = () => {
  animate(
    '.text-z, .text-a',
    {
      y: 0,
      scale: 1,
    },
    {
      duration: 0.3,
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
    viewBox="0 0 48 48"
    fill="currentColor"
    :class="['cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path class="text-line" d="M35.5 3.5V43H32.5V3.5H35.5Z" />

    <path
      class="text-z"
      d="M6.5 26H21.5V29.1627L10.4518 41H21.5V44H6.5V40.8373L17.5482 29H6.5V26Z"
    />

    <path
      class="text-a"
      d="M11.7802 4H16.0532L22.5532 22H18.7V20.1625L13.9469 7H13.8865L9.13335 20.1625V22H5.28021L11.7802 4Z"
    />

    <path class="text-a" d="M19.5 18H8.5V15H19.5V18Z" />

    <path
      class="text-arrow"
      :style="{ transformOrigin: '34px 38px' }"
      d="M25 31.8787L34 40.8787L43 31.8787L45.1213 34L34 45.1213L22.8787 34L25 31.8787Z"
    />
  </svg>
</template>
