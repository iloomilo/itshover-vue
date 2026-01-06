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
    '.slash-line',
    { pathLength: [0, 1] },
    { duration: 0.5, ease: 'easeInOut' }
  );
  animate(
    '.copy-elements',
    { opacity: [1, 0.5, 1] },
    { duration: 0.5, ease: 'easeInOut' }
  );
};

const stop = () => {
  animate(
    '.slash-line',
    { pathLength: 1 },
    { duration: 0.2, ease: 'easeOut' }
  );
  animate(
    '.copy-elements',
    { opacity: 1 },
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <g class="copy-elements">
        <path d="M19.414 19.415a2 2 0 0 1 -1.414 .585h-8a2 2 0 0 1 -2 -2v-8c0 -.554 .225 -1.055 .589 -1.417m3.411 -.583h6a2 2 0 0 1 2 2v6" />
        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-6m-3.418 .59c-.36 .36 -.582 .86 -.582 1.41v8a2 2 0 0 0 2 2h2" />
      </g>
      <path
        class="slash-line"
        d="M3 3l18 18"
        :style="{ transformOrigin: 'center' }"
      />
    </svg>
  </div>
</template>
