<script setup lang="ts">
import { useAnimate, motion } from 'motion-v';
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types';

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
});

const [scope, animate] = useAnimate();

const start = async () => {
  await animate(
    '.check-path',
    { pathLength: 0 },
    { duration: 0.1, ease: 'easeInOut' }
  );
  await animate(
    '.check-path',
    { pathLength: 1 },
    { duration: 0.4, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate('.check-path', { pathLength: 1 }, { duration: 0.2 });
};

defineExpose({
  startAnimation: start,
  stopAnimation: stop,
} satisfies AnimatedIconHandle);
</script>

<template>
  <div ref="scope" @mouseenter="start" @mouseleave="stop">
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
      class=""
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M5 12l5 5l10 -10"
        :class="['check-path', className]"
      />
    </svg>
  </div>
</template>
