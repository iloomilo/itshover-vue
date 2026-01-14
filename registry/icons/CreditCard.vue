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
    '.card-body',
    {
      rotate: [0, -3, 3, 0],
      scale: [1, 1.02, 1],
    },
    {
      duration: 0.4,
      ease: 'easeInOut',
    }
  );
  await animate(
    '.card-stripe',
    {
      opacity: [0, 1, 0],
      x: [-18, 18],
    },
    {
      duration: 0.5,
      ease: 'easeInOut',
    }
  );
  animate(
    '.card-chip',
    {
      scale: [1, 1.6, 1],
      opacity: [0.6, 1, 0.6],
    },
    {
      duration: 0.25,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate('.card-body', { rotate: 0, scale: 1 }, { duration: 0.2 });
  animate('.card-stripe', { opacity: 0, x: 0 }, { duration: 0.2 });
  animate('.card-chip', { scale: 1, opacity: 0.6 }, { duration: 0.2 });
};

defineExpose({
  startAnimation: start,
  stopAnimation: stop,
} satisfies AnimatedIconHandle);
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        class="card-body"
        :style="{ transformOrigin: '50% 50%' }"
        d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
      />

      <path class="card-stripe" d="M3 10l18 0" opacity="0" />

      <path
        class="card-chip"
        :style="{ transformOrigin: '7px 15px' }"
        d="M7 15l.01 0"
      />

      <path class="card-number" d="M11 15l2 0" />
    </svg>
  </div>
</template>
