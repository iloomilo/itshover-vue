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
    '.world-meridians',
    {
      pathLength: [0, 1],
    },
    {
      duration: 1,
      ease: 'linear',
    }
  );
};

const stop = () => {
  animate(
    '.world-meridians',
    {
      pathLength: 1,
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
      d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
      class="world-globe"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <g
      class="world-meridians"
      :style="{ transformOrigin: '50% 50%' }"
    >
      <path d="M3.6 9h16.8" class="world-meridians" />
      <path d="M3.6 15h16.8" class="world-meridians" />
      <path
        d="M11.5 3a17 17 0 0 0 0 18"
        class="world-meridians"
      />
      <path
        d="M12.5 3a17 17 0 0 1 0 18"
        class="world-meridians"
      />
    </g>
  </svg>
</template>
