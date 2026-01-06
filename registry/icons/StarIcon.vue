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
    '.star-fill',
    { opacity: [0, 1], scale: [0.8, 1] },
    { duration: 0.4, ease: 'easeOut' }
  );
  animate(
    '.star-outline',
    { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] },
    { duration: 0.5, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.star-fill',
    { opacity: [1, 0] },
    { duration: 0.3, ease: 'easeOut' }
  );
  animate(
    '.star-outline',
    { scale: 1, rotate: 0 },
    { duration: 0.3, ease: 'easeInOut' }
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
      class="star-fill"
      d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
      :fill="color"
      opacity="0"
      :style="{ transformOrigin: 'center' }"
    />
    <path
      class="star-outline"
      d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
      :style="{ transformOrigin: 'center' }"
    />
  </svg>
</template>
