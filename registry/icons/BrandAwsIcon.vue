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
    '.smile',
    {
      pathOffset: 1,
      opacity: [0, 1],
      pathLength: 1,
    },
    {
      duration: 0.1,
      ease: 'easeInOut',
    }
  );

  await animate(
    '.smile',
    { pathOffset: 0 },
    { duration: 0.45, ease: 'easeInOut' }
  );

  await animate(
    '.arrowhead',
    { scale: [0.8, 1.15, 1], opacity: [0, 1] },
    { duration: 0.4, ease: 'easeOut' }
  );
};

const stop = () => {};

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
    :class="['cursor-pointer select-none', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

    <!-- Smile + Arrow -->
    <motion.g class="smile-group">
      <motion.path
        class="smile"
        d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94"
      />
      <motion.path
        class="arrowhead"
        d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1"
      />
    </motion.g>

    <motion.g class="text">
      <path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
      <path d="M3 9h3" />
      <path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6" />
      <path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
    </motion.g>
  </svg>
</template>
