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
    '.apple-leaf',
    {
      rotate: [0, -15, 10, -5, 0],
      scale: [1, 1.1, 1],
    },
    {
      duration: 0.6,
      ease: 'easeInOut',
    }
  );

  animate(
    '.apple-body',
    {
      scale: [1, 1.05, 1],
    },
    {
      duration: 0.4,
      ease: 'easeOut',
    }
  );
};

const stop = () => {
  animate(
    '.apple-leaf',
    {
      rotate: 0,
      scale: 1,
    },
    {
      duration: 0.3,
      ease: 'easeInOut',
    }
  );

  animate(
    '.apple-body',
    {
      scale: 1,
    },
    {
      duration: 0.2,
      ease: 'easeOut',
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
      d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z"
      class="apple-body"
      :style="{ transformOrigin: '50% 50%' }"
    />

    <path
      d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"
      class="apple-leaf"
      :style="{ transformOrigin: '50% 100%' }"
    />
  </svg>
</template>
