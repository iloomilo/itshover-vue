<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import FloatingIcon from './FloatingIcon.vue'
import type { AnimatedIconHandle } from '~~/registry/types/types'

const INITIAL_ANIMATION_DELAY_MS = 500
const IDLE_THRESHOLD_MS = 5000
const ANIMATION_DURATION_MS = 1000

const githubRef = ref<AnimatedIconHandle | null>(null)
const likeRef = ref<AnimatedIconHandle | null>(null)
const stackRef = ref<AnimatedIconHandle | null>(null)
const sendRef = ref<AnimatedIconHandle | null>(null)
const currencyRef = ref<AnimatedIconHandle | null>(null)
const terminalRef = ref<AnimatedIconHandle | null>(null)
const ghostRef = ref<AnimatedIconHandle | null>(null)

let lastInteractionTime = 0
let idleInterval: ReturnType<typeof setInterval> | null = null
let initialTimeout: ReturnType<typeof setTimeout> | null = null
const animationTimeouts: ReturnType<typeof setTimeout>[] = []

const clearAllAnimationTimeouts = () => {
  animationTimeouts.forEach((id) => clearTimeout(id))
  animationTimeouts.length = 0
}

const triggerAllAnimations = () => {
  clearAllAnimationTimeouts()

  const iconRefs = [githubRef, likeRef, stackRef, sendRef, currencyRef, terminalRef, ghostRef]

  iconRefs.forEach((iconRef) => {
    const component = iconRef.value
    if (!component) return

    component.startAnimation()

    const timeoutId = setTimeout(() => {
      component.stopAnimation()
    }, ANIMATION_DURATION_MS)

    animationTimeouts.push(timeoutId)
  })
}

const handleIconInteraction = () => {
  lastInteractionTime = Date.now()
}

onMounted(() => {
  lastInteractionTime = Date.now()

  initialTimeout = setTimeout(() => {
    triggerAllAnimations()
  }, INITIAL_ANIMATION_DELAY_MS)

  idleInterval = setInterval(() => {
    const timeSinceLastInteraction = Date.now() - lastInteractionTime
    if (timeSinceLastInteraction >= IDLE_THRESHOLD_MS) {
      triggerAllAnimations()
      lastInteractionTime = Date.now()
    }
  }, IDLE_THRESHOLD_MS)
})

onUnmounted(() => {
  if (initialTimeout) clearTimeout(initialTimeout)
  if (idleInterval) clearInterval(idleInterval)
  clearAllAnimationTimeouts()
})
</script>

<template>
  <div class="w-full h-full">
    <div
      class="relative w-full h-full pointer-events-none hidden md:block lg:pointer-events-auto **:cursor-default [&_div]:text-[color-mix(in_oklch,var(--accent-foreground)_20%,var(--background))]"
      @mousemove="handleIconInteraction"
    >
      <FloatingIcon class="top-32 left-10 rotate-[-20deg]">
        <GithubIcon
          ref="githubRef"
          class="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-40 xl:w-24"
        />
      </FloatingIcon>

      <FloatingIcon class="top-40 left-36 rotate-15 xl:top-60">
        <LikeIcon ref="likeRef" class="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-52 xl:w-52" />
      </FloatingIcon>

      <FloatingIcon class="top-40 right-20 rotate-25">
        <Stack3Icon
          ref="stackRef"
          class="h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36"
        />
      </FloatingIcon>

      <FloatingIcon class="right-36 bottom-60 rotate-[-15deg]">
        <SendIcon ref="sendRef" class="h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-44 xl:w-44" />
      </FloatingIcon>

      <FloatingIcon class="bottom-52 left-24 rotate-10">
        <CurrencyRupeeIcon
          ref="currencyRef"
          class="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
        />
      </FloatingIcon>

      <FloatingIcon class="right-24 bottom-24 rotate-[-10deg]">
        <TerminalIcon
          ref="terminalRef"
          class="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
        />
      </FloatingIcon>

      <FloatingIcon class="right-120 bottom-40 rotate-[-10deg]">
        <GhostIcon
          ref="ghostRef"
          class="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
        />
      </FloatingIcon>
    </div>
  </div>
</template>
