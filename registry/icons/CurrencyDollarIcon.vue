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
  await animate(
    '.usd-main, .usd-line',
    { pathLength: 0, opacity: 0 },
    { duration: 0 }
  );

  await animate(
    '.usd-line',
    { pathLength: 1, opacity: 1 },
    { duration: 0.25, ease: 'easeOut' }
  );

  await animate(
    '.usd-main',
    { pathLength: 1, opacity: 1 },
    { duration: 0.4, ease: 'easeOut' }
  );

  animate(
    '.usd-symbol',
    { scale: [0.96, 1] },
    { duration: 0.2, ease: 'easeOut' }
  );
};

const stop = () => {
  animate(
    '.usd-main, .usd-line',
    { pathLength: 1, opacity: 1 },
    { duration: 0.2 }
  );
  animate('.usd-symbol', { scale: 1 }, { duration: 0.2 });
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
      <g
        class="usd-symbol"
        :style="{ transformOrigin: '50% 50%' }"
      >
        <path
          class="usd-main"
          d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
        />
        <path
          class="usd-line"
          d="M12 3v3m0 12v3"
        />
      </g>
    </svg>
  </div>
</template>
