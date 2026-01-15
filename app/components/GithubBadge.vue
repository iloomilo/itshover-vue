<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'

const isHovered = ref(false)
</script>

<template>
  <div class="relative mx-auto w-fit scale-75 p-2 md:scale-100">
    <motion.div
      :initial="{ opacity: 0, y: -10 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, delay: 0.2 }"
      class="bg-accent flex cursor-default items-center rounded-full p-1 font-serif shadow-[inset_0px_1px_2px_rgba(0,0,0,0.2)]"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <span class="text-foreground absolute px-2 text-sm"> We're Proudly </span>

      <div
        class="bg-background relative z-10 flex items-center justify-center gap-2 rounded-full p-1 px-2 shadow-[0px_1px_2px_rgba(0,0,0,0.2)] transition-all duration-300"
        :class="isHovered ? 'ml-[110px]' : 'ml-0'"
      >
        <GithubIcon :size="18" />
        <span class="text-foreground font-inter text-xs font-semibold uppercase">
          Open Source
        </span>
      </div>
    </motion.div>
  </div>
</template>
