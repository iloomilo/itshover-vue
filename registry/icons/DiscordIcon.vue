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
    '.eyes',
    { scale: [1, 1.3, 1] },
    { duration: 0.3, ease: 'easeInOut' }
  );
  await animate(
    '.mouth',
    { scaleX: [1, 1.1, 1] },
    { duration: 0.4, ease: 'easeInOut' }
  );
  animate('.body', { y: [0, -1, 0] }, { duration: 0.5, ease: 'easeInOut' });
}

const stop = () => {
  animate(
    '.eyes, .mouth, .body',
    { x: 0, y: 0, scale: 1, scaleX: 1 },
    { duration: 0.2, ease: 'easeInOut' }
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
      class="eyes"
      :style="{ transformOrigin: '9 12' }"
      d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
    />
    <path
      class="eyes"
      :style="{ transformOrigin: '15 12' }"
      d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
    />
    <path
      class="mouth"
      :style="{ transformOrigin: 'center' }"
      d="M7 16.5c3.5 1 6.5 1 10 0"
    />
    <path
      class="body"
      d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
    />
  </svg>
</template>
