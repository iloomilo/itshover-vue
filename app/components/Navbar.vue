<script setup lang="ts">
import { ref } from 'vue'
import { LINKS } from '~/constants/links'
const isMobileMenuOpen = ref(false)
const isCommandMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function toggleCommandMenu() {
  isCommandMenuOpen.value = !isCommandMenuOpen.value
}

function isMac() {
  if (import.meta.client) {
    return navigator.platform.toUpperCase().includes('MAC')
  }
  return false
}
</script>

<template>
  <CommandMenu :open="isCommandMenuOpen" />
  <nav
    class="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 flex w-full justify-between border-b p-2 backdrop-blur"
  >
    <div class="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-8">
      <div class="flex items-center">
        <NuxtLink
          to="/"
          class="mr-10 flex items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100"
        >
          <LayersIcon class="text-primary" />
          <div class="flex flex-col">
            <h1 class="font-sans text-foreground">
              <span class="text-primary">its</span>hover<span class="text-primary">-vue</span>
            </h1>
          </div>
        </NuxtLink>
      </div>

      <nav class="hidden items-center space-x-6 text-sm font-medium xl:flex">
        <NuxtLink
          to="/icons"
          class="text-muted-foreground transition-colors hover:text-foreground/80"
        >
          icons
        </NuxtLink>
        <!-- @TODO implement sponsor and example page
         <NuxtLink to="/sponsor" class="text-muted-foreground transition-colors hover:text-foreground/80">
          sponsor
        </NuxtLink>
        <NuxtLink to="/example" class="text-muted-foreground transition-colors hover:text-foreground/80">
          example
        </NuxtLink> -->
      </nav>

      <div class="hidden flex-1 items-center justify-end gap-2 md:flex">
        <!--<GithubStars />-->

        <a
          :href="LINKS.TWITTER"
          target="_blank"
          class="mr-3 flex items-center justify-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
        >
          <TwitterXIcon class="h-4 w-4" />
        </a>

        <a
          :href="LINKS.GITHUB"
          target="_blank"
          class="flex items-center justify-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
        >
          <GithubIcon :size="18" />
        </a>

        <ColorModeToggle />

        <button
          class="relative flex w-fit cursor-pointer items-center rounded-xl border border-transparent bg-white px-4 py-2 text-sm text-muted-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/20 dark:bg-muted/20"
          @click="toggleCommandMenu"
        >
          <MagnifierIcon class="text-neutral-500" :size="18" />

          <input
            type="text"
            readonly
            placeholder="Search Components..."
            class="w-32 cursor-pointer bg-transparent pl-2 pr-4 text-xs font-medium text-foreground/60 outline-none transition-colors hover:text-foreground/80 sm:text-sm xl:w-40"
          />

          <Kbd>
            <span class="text-xs">{{ isMac() ? '⌘' : 'Ctrl+' }}</span
            >K
          </Kbd>
        </button>
      </div>

      <div class="flex items-center md:hidden">
        <ColorModeToggle />
        <button
          class="ml-2 p-2 text-neutral-600 focus:outline-none dark:text-gray-100"
          @click="toggleMobileMenu"
        >
          <XIcon v-if="isMobileMenuOpen" class="h-6 w-6" />
          <AlignCenterIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="bg-background absolute top-16 left-0 z-50 w-full border-b p-4 shadow-lg md:hidden"
    >
      <nav class="flex flex-col space-y-4">
        <NuxtLink
          to="/icons"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80"
          @click="isMobileMenuOpen = false"
        >
          Icons
        </NuxtLink>
        <!-- @TODO implement sponsor and example pages
        <NuxtLink to="/sponsor"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80"
          @click="isMobileMenuOpen = false">
          Sponsor
        </NuxtLink>

        <NuxtLink to="/example"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80"
          @click="isMobileMenuOpen = false">
          Example
        </NuxtLink> -->

        <button
          class="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground"
          @click="
            () => {
              isMobileMenuOpen = false
              toggleCommandMenu()
            }
          "
        >
          <div class="flex items-center gap-2">
            <MagnifierIcon class="text-neutral-500" :size="16" />
            <span>Search...</span>
          </div>
        </button>

        <div class="flex items-center justify-between border-t border-white/10 pt-4">
          <div class="flex items-center gap-4">
            <a
              :href="LINKS.GITHUB"
              target="_blank"
              class="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
              @click="isMobileMenuOpen = false"
            >
              <GithubIcon :size="20" />
            </a>

            <a
              :href="LINKS.TWITTER"
              target="_blank"
              class="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
              @click="isMobileMenuOpen = false"
            >
              <TwitterXIcon :size="20" />
            </a>
          </div>

          <!--<GithubStars />-->
        </div>
      </nav>
    </div>
  </nav>
</template>
