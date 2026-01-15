<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <motion.div
    :while-hover="{ y: -2 }"
    :transition="{ duration: 0.25, ease: 'easeOut' }"
    class="group border-border bg-card relative flex h-[400px] flex-col overflow-hidden rounded-2xl border"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <div
        class="from-primary/10 absolute inset-0 bg-linear-to-br via-transparent to-transparent"
      />
    </div>

    <slot />
  </motion.div>
</template>
