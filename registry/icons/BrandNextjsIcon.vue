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
  animate('.circle', { pathLength: 0, opacity: 0 }, { duration: 0 });
  animate('.line', { pathLength: 0, opacity: 0 }, { duration: 0 });

  animate(
    '.circle',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 1.5 }
  );

  animate(
    '.line',
    { pathLength: [0, 1], opacity: [0, 1] },
    { duration: 0.4 }
  );
};

const stop = () => {
  animate('.circle', { pathLength: 1, opacity: 1 }, { duration: 0.2 });
  animate('.line', { pathLength: 1, opacity: 1 }, { duration: 0.2 });
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
    :class="['icon', 'icon-tabler', 'icons-tabler-outline', 'icon-tabler-brand-nextjs', 'cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      class="circle"
      d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"
    />
    <path
      class="line"
      d="M15 12v-3"
    />
  </svg>
</template>
