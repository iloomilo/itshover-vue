<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'
import { LINKS } from '~/constants/links'
import { SPONSOR } from '~/constants/sponsor'

const featuredIcons = [
  { name: "HeartIcon" },
  { name: "RocketIcon" },
  { name: "StarIcon" },
  { name: "SparklesIcon" },
  { name: "CoffeeIcon" },
  { name: "CodeIcon" },
  { name: "BulbSvg" },
  { name: "FlameIcon" },
  { name: "LikeIcon" },
  { name: "BookmarkIcon" },
  { name: "CameraIcon" },
  { name: "MoonIcon" },
  { name: "BellOffIcon" },
  { name: "LockIcon" },
  { name: "RefreshIcon" },
  { name: "GearIcon" },
  { name: "MessageCircleIcon" },
  { name: "SendIcon" },
  { name: "GithubIcon" },
  { name: "TwitterXIcon" },
]
</script>

<template>
  <motion.footer
    :initial="{ opacity: 0, y: 20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5 }"
    :viewport="{ once: true }"
    class="border-t"
  >
    <div class="w-full px-4 py-12 md:px-8 lg:px-12">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Quick Links</h3>
          <nav class="flex flex-col space-y-3">
            <NuxtLink to="/" class="text-muted-foreground hover:text-foreground transition-colors">Home</NuxtLink>
            <NuxtLink to="/icons" class="text-muted-foreground hover:text-foreground transition-colors">Icons</NuxtLink>
            <NuxtLink to="/sponsor" class="text-muted-foreground hover:text-foreground transition-colors">Sponsor</NuxtLink>
            <NuxtLink :to="LINKS.GITHUB" target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-foreground transition-colors">GitHub</NuxtLink>
          </nav>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Sponsor</h3>
          <div class="flex flex-col space-y-3">
            <NuxtLink :to="SPONSOR.buymeacoffee" target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors">
              <CoffeeIcon :size="16" />
              Buy Me a Coffee
            </NuxtLink>
          
          </div>
        </div>

        <div class="space-y-4 lg:col-span-2">
          <h3 class="text-lg font-semibold">Featured Icons</h3>
          <div class="grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-10">
            <motion.div
              v-for="item in featuredIcons"
              :key="item.name"
              :while-hover="{ scale: 1.1 }"
              class="hover:bg-accent flex items-center justify-center rounded-lg border p-2 transition-colors"
            >
              <component :is="resolveComponent(item.name)" :size="20" />
            </motion.div>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t pt-8">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p class="text-muted-foreground text-center text-sm md:text-left">
            Ported by <NuxtLink :to="LINKS.CREATOR" target="_blank" class="hover:text-foreground font-medium underline underline-offset-4">iloomilo</NuxtLink>.
          </p>

          <div class="flex items-center gap-4">
            <NuxtLink :to="LINKS.GITHUB" target="_blank" aria-label="GitHub" class="text-muted-foreground hover:text-foreground">
              <GithubIcon :size="20" />
            </NuxtLink>
            <NuxtLink :to="LINKS.TWITTER" target="_blank" aria-label="Twitter" class="text-muted-foreground hover:text-foreground">
              <TwitterXIcon :size="20" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
</template>
