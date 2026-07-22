<script setup lang="ts">
import { ref } from 'vue'
import { useAnimate } from 'motion-v'
import type { AnimatedIconProps, AnimatedIconHandle } from '../types/types'

const props = withDefaults(defineProps<AnimatedIconProps>(), {
  size: 24,
  color: 'currentColor',
  strokeWidth: 2,
  className: ''
})

const [scope, animate] = useAnimate()
const isAnimating = ref(false)

const start = async () => {
  if (isAnimating.value) return
  isAnimating.value = true

  while (isAnimating.value) {
    const inParticles = Array.from({ length: 8 }).map((_, i) => `.p-in-${i}`)
    inParticles.forEach((selector, i) => {
      animate(
        selector,
        { y: [-4, 8], opacity: [0, 1, 0], scale: [0.3, 0.8, 0.3] },
        { duration: 0.8, delay: i * 0.1, ease: 'easeIn' }
      )
    })

    await new Promise((resolve) => setTimeout(resolve, 600))
    if (!isAnimating.value) break

    const outParticles = ['.p-out-1', '.p-out-2']

    animate(
      '.funnel',
      {
        scale: [1, 1.1, 1],
        strokeWidth: [props.strokeWidth, props.strokeWidth + 0.8, props.strokeWidth]
      },
      { duration: 0.4, ease: 'backOut' }
    )

    outParticles.forEach((selector, i) => {
      animate(
        selector,
        { y: [14, 22], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] },
        { duration: 0.6, delay: i * 0.2, ease: 'easeOut' }
      )
    })

    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (!isAnimating.value) break
  }
}

const stop = () => {
  isAnimating.value = false
  animate('.funnel', { rotate: 0, scale: 1, strokeWidth: props.strokeWidth }, { duration: 0.3 })
  animate("[class^='p-in'], [class^='p-out']", { opacity: 0 }, { duration: 0.3 })
}

defineExpose({
  startAnimation: start,
  stopAnimation: stop
} satisfies AnimatedIconHandle)
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
    :style="{ overflow: 'visible' }"
    @mouseenter="start"
    @mouseleave="stop"
  >
    <path
      class="funnel"
      d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
      :style="{ transformOrigin: '12px 14px' }"
    />
    <circle class="p-in-0" cx="12" cy="0" r="0.5" :fill="color" stroke="none" opacity="0" />
    <circle class="p-in-1" cx="8" cy="-1" r="0.4" :fill="color" stroke="none" opacity="0" />
    <circle class="p-in-2" cx="16" cy="-2" r="0.6" :fill="color" stroke="none" opacity="0" />
    <circle class="p-in-3" cx="10" cy="1" r="0.4" :fill="color" stroke="none" opacity="0" />
    <circle class="p-in-4" cx="14" cy="0" r="0.5" :fill="color" stroke="none" opacity="0" />
    <circle class="p-in-5" cx="7" cy="2" r="0.3" :fill="color" stroke="none" opacity="0" />
    <circle class="p-in-6" cx="17" cy="1" r="0.4" :fill="color" stroke="none" opacity="0" />
    <circle class="p-in-7" cx="12" cy="-3" r="0.5" :fill="color" stroke="none" opacity="0" />
    <circle class="p-out-1" cx="12" cy="0" r="1.2" :fill="color" stroke="none" opacity="0" />
    <circle class="p-out-2" cx="12" cy="0" r="1" :fill="color" stroke="none" opacity="0" />
  </svg>
</template>
