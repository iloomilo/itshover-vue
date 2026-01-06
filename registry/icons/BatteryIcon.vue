<script setup lang="ts">
import { useAnimate } from 'motion-v';
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types';

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2.5,
  className: '',
});

const [scope, animate] = useAnimate();

const start = () => {
  animate(
    '.battery-bolt',
    { pathLength: 0, opacity: 0 },
    { duration: 0 }
  );
  animate(
    '.battery-bolt',
    {
      pathLength: [0, 1],
      opacity: [0, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
    }
  );
  animate(
    '.battery-body',
    {
      scale: [1, 1.04, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
    }
  );
  animate(
    '.battery-bolt',
    {
      opacity: [1, 0.4, 1],
    },
    {
      duration: 0.3,
      ease: 'easeInOut',
    }
  );
};

const stop = () => {
  animate(
    '.battery-bolt',
    { pathLength: 1, opacity: 1 },
    { duration: 0.2 }
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
      <path class="battery-terminal" d="M46 20V28" />

      <path
        class="battery-body"
        :style="{ transformOrigin: '50% 50%' }"
        d="M37 10H8C5.23858 10 3 12.2386 3 15V33C3 35.7614 5.23858 38 8 38H37C39.7614 38 42 35.7614 42 33V15C42 12.2386 39.7614 10 37 10Z"
      />

      <path
        class="battery-bolt"
        :style="{ transformOrigin: '22.5px 24px' }"
        d="M33.5 25.6667L22.5 19V29L11.5 22.3333"
      />
    </svg>
  </div>
</template>
