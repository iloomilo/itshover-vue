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
    '.check-first',
    {
      pathLength: [0, 1],
      opacity: [0, 1],
    },
    {
      duration: 0.5,
      ease: 'easeInOut',
    }
  );

  animate(
    '.check-second',
    {
      pathLength: [0, 1],
      opacity: [0, 1],
    },
    {
      duration: 0.5,
      ease: 'easeInOut',
    }
  );
};

const stop = () => {
  animate(
    '.check-first, .check-second',
    { pathLength: 1, opacity: 1 },
    { duration: 0.2, ease: 'easeInOut' }
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
    :class="['inline-flex', 'cursor-pointer', className]"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      stroke-linecap="square"
    >
      <path
        class="check-first"
        :style="{ transformOrigin: '19px 25px' }"
        d="M3 26.4L11.8846 39L35 11"
      />

      <path
        class="check-second"
        :style="{ transformOrigin: '33px 25px' }"
        d="M45 11L21.8847 39L20.2098 36.6248"
      />
    </svg>
  </div>
</template>
