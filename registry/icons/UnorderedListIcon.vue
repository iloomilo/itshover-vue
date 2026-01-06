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
    '.list-line-1',
    {
      scaleX: [0, 1],
    },
    {
      duration: 0.25,
      ease: 'easeOut',
    }
  );

  animate(
    '.list-line-2',
    {
      scaleX: [0, 1],
    },
    {
      duration: 0.25,
      ease: 'easeOut',
      delay: 0.1,
    }
  );

  animate(
    '.list-line-3',
    {
      scaleX: [0, 1],
    },
    {
      duration: 0.25,
      ease: 'easeOut',
      delay: 0.2,
    }
  );

  animate(
    '.list-bullets',
    {
      scale: [1, 1.3, 1],
    },
    {
      duration: 0.4,
      ease: 'easeInOut',
    }
  );
};

const stop = () => {
  animate(
    '.list-line-1',
    {
      scaleX: 1,
    },
    {
      duration: 0.2,
      ease: 'easeInOut',
    }
  );

  animate(
    '.list-line-2',
    {
      scaleX: 1,
    },
    {
      duration: 0.2,
      ease: 'easeInOut',
    }
  );

  animate(
    '.list-line-3',
    {
      scaleX: 1,
    },
    {
      duration: 0.2,
      ease: 'easeInOut',
    }
  );

  animate(
    '.list-bullets',
    {
      scale: 1,
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
      d="M9 6l11 0"
      class="list-line-1"
      :style="{ transformOrigin: '9px 6px' }"
    />
    <path
      d="M9 12l11 0"
      class="list-line-2"
      :style="{ transformOrigin: '9px 12px' }"
    />
    <path
      d="M9 18l11 0"
      class="list-line-3"
      :style="{ transformOrigin: '9px 18px' }"
    />

    <g class="list-bullets">
      <path d="M5 6l0 .01" />
      <path d="M5 12l0 .01" />
      <path d="M5 18l0 .01" />
    </g>
  </svg>
</template>
