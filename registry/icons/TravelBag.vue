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
    '.front-flap',
    { skewX: 20 },
    { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  );
  animate(
    '.elements',
    { x: -1, scale: 0.9, skewX: 20 },
    { duration: 0.3, ease: 'easeInOut' }
  );
  animate('.back-flap', { x: 4 }, { duration: 0.3, ease: 'easeInOut' });
};

const stop = () => {
  animate('.front-flap', { skewX: 0 }, { duration: 0.3, ease: 'easeIn' });
  animate(
    '.elements',
    { x: 0, scale: 1, skewX: 0 },
    { duration: 0.3, ease: 'easeOut' }
  );
  animate('.back-flap', { x: 0 }, { duration: 0.3, ease: 'easeOut' });
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
    <path
      class="front-flap"
      d="M12.75 4.25h-6m6 0c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v2.5c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879h-6c-2.828 0-4.243 0-5.121-.879C.75 16.993.75 15.578.75 12.75v-2.5c0-2.828 0-4.243.879-5.121.878-.879 2.293-.879 5.121-.879"
    ></path>
    <path
      class="elements"
      d="M18.75 8.25a4 4 0 0 1-4-4"
    ></path>
    <path
      class="elements"
      d="m7 9.75-.75.75.75.75.75-.75z"
    ></path>
    <path
      class="elements"
      d="M.75 14.75a4 4 0 0 1 4 4m-4-10.5a4 4 0 0 0 4-4m14 10.5a4 4 0 0 0-4 4"
    ></path>
    <path
      class="elements"
      d="m11.75 14.55-1.5-.3 1.2-1.2z"
    ></path>
    <path class="elements" d="M12.25 8.75v.01"></path>
    <path
      class="back-flap"
      d="M12.75 4.25h-6v-.5c0-1.414 0-2.121.44-2.56C7.628.75 8.335.75 9.75.75s2.121 0 2.56.44c.44.438.44 1.145.44 2.56zm0 0c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v2.5c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879"
    ></path>
  </svg>
</template>
