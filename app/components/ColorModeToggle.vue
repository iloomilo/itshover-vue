<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const colorMode = useColorMode()


const toggleTheme = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground flex h-10 cursor-pointer items-center justify-center rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors outline-none focus:ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:ring-0 active:outline-none disabled:pointer-events-none disabled:opacity-50"
    @click="toggleTheme"
  >
    <BrightnessDownIcon
      class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-neutral-500 transition-all dark:scale-0 dark:-rotate-90 dark:text-neutral-500"
    />
    
    <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-neutral-500 transition-all dark:scale-100 dark:rotate-0 dark:text-neutral-500"
    />
    
    <span class="sr-only">Toggle theme</span>
  </button>
</template>
