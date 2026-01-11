<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, scale: 0.9 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ duration: 0.4, ease: 'easeOut' }"
    class="absolute"
  >
    <slot />
  </motion.div>
</template>
