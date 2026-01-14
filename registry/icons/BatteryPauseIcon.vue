<script setup lang="ts">
import { onMounted } from 'vue';
import { useAnimate } from 'motion-v';
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types';

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: '',
});

const [scope, animate] = useAnimate();

onMounted(() => {
  animate('.battery-pause-1', { opacity: 1 }, { duration: 0 });
  animate('.battery-pause-2', { opacity: 1 }, { duration: 0 });
  animate('.battery-pause-3', { opacity: 0 }, { duration: 0 });
  animate('.battery-pause-4', { opacity: 0 }, { duration: 0 });
});

const start = async () => {
  await animate(
    '.battery-pause-3',
    { opacity: 1 },
    { duration: 0.15, ease: 'easeOut' }
  );

  await animate(
    '.battery-pause-4',
    { opacity: 1 },
    { duration: 0.15, ease: 'easeOut' }
  );
};

const stop = async () => {
  await animate(
    '.battery-pause-3, .battery-pause-4',
    { opacity: 0 },
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
      stroke-linecap="square"
    >
      <path
        class="battery-pause-bar battery-pause-1"
        d="M10 31V17"
      />
      <path
        class="battery-pause-bar battery-pause-2"
        d="M17 31V17"
      />
      <path
        class="battery-pause-bar battery-pause-3"
        d="M24 31V17"
      />
      <path
        class="battery-pause-bar battery-pause-4"
        d="M31 31V17"
      />

      <path d="M46 20V28" />

      <path d="M37 10H8C5.2386 10 3 12.2386 3 15V33C3 35.7614 5.2386 38 8 38H37C39.7614 38 42 35.7614 42 33V15C42 12.2386 39.7614 10 37 10Z" />
    </svg>
  </div>
</template>
