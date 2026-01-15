<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { motion, AnimatePresence } from 'motion-v'
import { cn } from '@/lib/utils'

const props = defineProps<{
  command: string
  class?: string
}>()

const activeTab = ref('npm')
const packageManagers = ['npm', 'pnpm', 'yarn', 'bun']

const getCommand = (pm: string) => {
  switch (pm) {
    case 'pnpm':
      return `pnpm dlx shadcn-vue@latest add ${props.command}`
    case 'yarn':
      return `yarn shadcn-vue@latest add ${props.command}`
    case 'bun':
      return `bunx --bun shadcn-vue@latest add ${props.command}`
    default:
      return `npx shadcn-vue@latest add ${props.command}`
  }
}

const { copy: copyToClipboard, copied } = useClipboard({ copiedDuring: 2000 })
</script>

<template>
  <div
    :class="
      cn(
        'bg-background text-foreground relative w-full max-w-2xl overflow-hidden rounded-xl border shadow-2xl',
        props.class
      )
    "
  >
    <div
      class="from-primary/10 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-50"
    />

    <div class="relative">
      <div
        class="border-foreground/10 bg-background/5 flex items-center justify-between border-b px-4 py-2 backdrop-blur-sm"
      >
        <div class="relative flex h-8 bg-transparent p-0 gap-1">
          <button
            v-for="pm in packageManagers"
            :key="pm"
            class="text-foreground/60 hover:text-foreground/80 relative z-10 h-8 rounded-md px-3 text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
            :class="{ 'text-foreground': activeTab === pm }"
            @click="activeTab = pm"
          >
            <motion.div
              v-if="activeTab === pm"
              layout-id="activeTab"
              class="bg-foreground/10 absolute inset-0 rounded-md"
              :transition="{
                type: 'spring',
                stiffness: 500,
                damping: 30
              }"
            />
            <span class="relative z-10">{{ pm }}</span>
          </button>
        </div>

        <div class="flex items-center gap-2">
          <div class="flex gap-1.5">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500/20" />
            <div class="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
            <div class="h-2.5 w-2.5 rounded-full bg-green-500/20" />
          </div>
        </div>
      </div>

      <div class="group relative min-h-[50px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            :key="activeTab"
            :initial="{ opacity: 0, y: 5 }"
            :animate="{ opacity: 1, y: 0 }"
            :exit="{ opacity: 0, y: -5 }"
            :transition="{ duration: 0.2 }"
            class="text-foreground p-4 text-sm font-mono w-full pr-12"
          >
            <span class="text-primary mr-2 select-none">$</span>
            {{ getCommand(activeTab) }}
          </motion.div>
        </AnimatePresence>

        <button
          class="text-foreground hover:bg-foreground/10 hover:text-foreground absolute top-1/2 right-4 flex -translate-y-1/2 items-center rounded-md p-2 opacity-0 transition-all group-hover:opacity-100 focus:opacity-100"
          aria-label="Copy to clipboard"
          @click="copyToClipboard(getCommand(activeTab))"
        >
          <SimpleCheckedIcon v-if="copied" class="text-green-500" :size="18" />
          <CopyIcon v-else :size="18" />
        </button>
      </div>
    </div>
  </div>
</template>
