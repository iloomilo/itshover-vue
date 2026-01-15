<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
import { isMac } from '@/lib/utils'

import IconSearchInput from './IconSearchInput.vue'
const searchInputRef = ref<InstanceType<typeof IconSearchInput> | null>(null)
const { searchQuery, iconCount, filteredIcons } = useIcon();

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    searchInputRef.value?.focus() 
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown)
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, 
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.3, 
      ease: "easeOut" as const
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { 
      duration: 0.2 
    } 
  },
}
</script>

<template>
  <motion.div
    class="mb-4 w-full"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 0.4 }"
  >
    <motion.div
      class="mx-4 mb-10 px-4 sm:ml-20 sm:px-0"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.1 }"
    >
      <IconSearchInput
        ref="searchInputRef"
        v-model="searchQuery"
        :placeholder="`Search ${iconCount} Icons ... (${isMac() ? '⌘' : 'Ctrl'} + F)`"
        class="w-full md:w-1/2"
      />
    </motion.div>

    <AnimatePresence mode="wait"> 
      <motion.div
        class="max-w-8xl flex flex-wrap items-center justify-center gap-4 px-4 sm:mr-2 sm:ml-20 sm:justify-start sm:px-0"
        :variants="containerVariants"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          v-for="icon in filteredIcons"
          :key="icon.name"
          :variants="itemVariants"
          layout
        >
          <IconCard :icon="icon" />
        </motion.div>

        <motion.div
          v-if="filteredIcons.length === 0"
          class="flex h-40 w-full flex-col items-center justify-center gap-2"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, delay: 0.1 }"
        >
          <p class="text-muted-foreground text-sm">
            No icons found for "{{ searchQuery }}"
          </p>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  </motion.div>
</template>
