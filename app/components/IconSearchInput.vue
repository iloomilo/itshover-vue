<script setup lang="ts">
import { ref, onMounted, onUnmounted, type HTMLAttributes } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    modelValue: string
    placeholder?: string
    class?: HTMLAttributes['class']
    autoFocus?: boolean
  }>(),
  {
    placeholder: 'Search icons...',
    autoFocus: false,
    class: ''
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isFocused = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

const focusInput = () => {
  inputRef.value?.focus()
}

const handleClear = () => {
  emit('update:modelValue', '')
  focusInput()
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    handleClear()
  }
}

onMounted(() => {
  if (props.autoFocus) {
    focusInput()
  }
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})

defineExpose({
  focus: focusInput
})
</script>

<template>
  <motion.div
    :class="cn('relative flex w-full items-center', props.class)"
    :initial="{ opacity: 0, y: -10 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.3, ease: 'easeOut' }"
  >
    <motion.div
      class="bg-primary/20 absolute inset-0 -z-10 rounded-xl blur-xl"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: isFocused ? 0.5 : 0 }"
      :transition="{ duration: 0.3 }"
    />

    <div
      :class="
        cn(
          'relative flex w-full items-center gap-3 px-4 py-3',
          'bg-background rounded-xl border',
          'shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
          'dark:bg-muted/30 dark:border-white/10',
          'transition-all duration-300 ease-out',
          isFocused && 'border-primary/50 dark:border-primary/30 shadow-md'
        )
      "
    >
      <motion.div
        :animate="{
          scale: isFocused ? 1.1 : 1,
          rotate: isFocused ? -5 : 0
        }"
        :transition="{ duration: 0.2, ease: 'easeOut' }"
        class="text-muted-foreground flex items-center justify-center"
      >
        <MagnifierIcon
          :size="20"
          :class="
            cn(
              'transition-colors duration-200',
              isFocused ? 'text-primary' : 'text-muted-foreground'
            )
          "
        />
      </motion.div>

      <input
        ref="inputRef"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        :class="
          cn(
            'text-foreground flex-1 bg-transparent text-sm',
            'placeholder:text-muted-foreground/60',
            'border-none outline-none',
            'transition-all duration-200'
          )
        "
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />

      <AnimatePresence>
        <motion.button
          v-if="modelValue"
          :initial="{ opacity: 0, scale: 0.8, rotate: -90 }"
          :animate="{ opacity: 1, scale: 1, rotate: 0 }"
          :exit="{ opacity: 0, scale: 0.8, rotate: 90 }"
          :transition="{ duration: 0.2, ease: 'easeOut' }"
          type="button"
          :class="
            cn(
              'rounded-md p-1',
              'text-muted-foreground hover:text-foreground',
              'hover:bg-muted/50',
              'transition-colors duration-150'
            )
          "
          @click="handleClear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </motion.button>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          v-if="modelValue"
          :initial="{ opacity: 0, x: 10 }"
          :animate="{ opacity: 1, x: 0 }"
          :exit="{ opacity: 0, x: 10 }"
          :transition="{ duration: 0.2, delay: 0.1 }"
          class="border-border hidden items-center gap-1.5 border-l pl-3 sm:flex"
        >
          <kbd class="text-muted-foreground bg-muted/50 rounded px-2 py-0.5 font-mono text-xs">
            esc
          </kbd>
          <span class="text-muted-foreground text-xs">to clear</span>
        </motion.div>
      </AnimatePresence>
    </div>

    <motion.div
      class="via-primary/50 absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent"
      :initial="{ width: '0%' }"
      :animate="{ width: isFocused ? '80%' : '0%' }"
      :transition="{ duration: 0.3, ease: 'easeOut' }"
    />
  </motion.div>
</template>
