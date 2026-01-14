<script setup lang="ts">
import { useAnimate } from 'motion-v';
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types';

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 1, // Note: React source used 1 here override default
  className: '',
});

const [scope, animate] = useAnimate();

const start = async () => {
  // Stage 1: All windows explode outward (Windows key press!)
  await animate(
    'path:nth-of-type(2)', // Top-right
    {
      x: [0, 8, 6],
      y: [0, -8, -6],
      rotate: [0, 15, 10],
      scale: [1, 1.1, 1.05],
    },
    { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
  );

  animate(
    'path:nth-of-type(3)', // Bottom-left
    {
      x: [0, -8, -6],
      y: [0, 8, 6],
      rotate: [0, -15, -10],
      scale: [1, 1.1, 1.05],
    },
    { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
  );

  animate(
    'path:nth-of-type(4)', // Top-left
    {
      x: [0, -8, -6],
      y: [0, -8, -6],
      rotate: [0, -15, -10],
      scale: [1, 1.1, 1.05],
    },
    { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
  );

  await animate(
    'path:nth-of-type(5)', // Bottom-right
    {
      x: [0, 8, 6],
      y: [0, 8, 6],
      rotate: [0, 15, 10],
      scale: [1, 1.1, 1.05],
    },
    { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
  );

  // Stage 2: 3D flip the entire icon
  await animate(
    scope.value,
    {
      rotateY: [0, 180, 360],
      scale: [1, 1.15, 1],
    },
    { duration: 0.6, ease: 'easeInOut' }
  );

  // Stage 3: Windows snap back together with bounce
  animate(
    'path:nth-of-type(2)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  );

  animate(
    'path:nth-of-type(3)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  );

  animate(
    'path:nth-of-type(4)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  );

  await animate(
    'path:nth-of-type(5)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  );

  // Stage 4: Final pulse
  await animate(
    scope.value,
    {
      scale: [1, 1.08, 1],
    },
    { duration: 0.3, ease: 'easeOut' }
  );
};

const stop = () => {
  animate(
    scope.value,
    { rotateY: 0, scale: 1 },
    { duration: 0.4, ease: 'easeOut' }
  );
  animate(
    'path:nth-of-type(2)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.4 }
  );
  animate(
    'path:nth-of-type(3)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.4 }
  );
  animate(
    'path:nth-of-type(4)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.4 }
  );
  animate(
    'path:nth-of-type(5)',
    { x: 0, y: 0, rotate: 0, scale: 1 },
    { duration: 0.4 }
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
    :fill="color"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['cursor-pointer', className]"
    :style="{
      perspective: '1000px',
      transformStyle: 'preserve-3d',
    }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407z" />
    <path d="M11 13v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6z" />
    <path d="M11 3.842v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87z" />
    <path d="M21 5.9v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" />
  </svg>
</template>
