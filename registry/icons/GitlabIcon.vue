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
    '.gitlab-icon',
    { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] },
    { duration: 0.5, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.gitlab-icon',
    { scale: 1, rotate: 0 },
    { duration: 0.2, ease: 'easeOut' }
  );
};

defineExpose({
  startAnimation: start,
  stopAnimation: stop,
} satisfies AnimatedIconHandle);
</script>

<template>
  <div
    ref="scope"
    :class="['inline-flex', 'cursor-pointer', 'items-center', 'justify-center', className]"
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
      <g
        class="gitlab-icon"
        :style="{ transformOrigin: 'center' }"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
      </g>
    </svg>
  </div>
</template>
