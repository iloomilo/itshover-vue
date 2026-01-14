<script setup lang="ts">

defineProps<{
  src: string
  alt: string
  label: string
  quadratic?: boolean
  description: string
}>()
</script>

<template>
  <div class="relative h-full w-full overflow-hidden rounded-lg">
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="quadratic ? 430 : 654"
      height="398"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div class="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/90" />

    <div class="absolute bottom-3 left-3 z-10 space-y-1">
      <p class="text-base font-medium text-white">
        {{ label }}
      </p>
      <p class="text-sm text-white/70">
        {{ description }}
      </p>
    </div>
  </div>
</template>
