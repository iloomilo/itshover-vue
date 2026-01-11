<script setup lang="ts">
import { motion } from 'motion-v'
import { LINKS } from '~/constants/links'

const openGithub = () => {
  if (typeof window !== 'undefined') {
    window.open(LINKS.GITHUB, '_blank')
  }
}
</script>

<template>
  <motion.section
    :initial="{ opacity: 0, y: 20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5 }"
    :viewport="{ once: true }"
    class="flex flex-col items-center justify-center py-20 text-center md:py-32"
  >
    <div class="max-w-4xl space-y-6">
      <h2 class="text-2xl font-bold tracking-tight lowercase sm:text-3xl md:text-4xl">
        Ready to Bring your icons to life?
      </h2>
      
      <p class="text-muted-foreground text-md mx-auto max-w-xl lowercase sm:text-lg">
        A growing open source library of animated icons built for real
        interfaces.
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <NuxtLink to="/icons">
          <PrimaryButton class="lowercase">
            Browse Icons
            <ArrowNarrowRightIcon class="ml-2 h-4 w-4" />
          </PrimaryButton>
        </NuxtLink>

        <SecondaryButton
          class="lowercase"
          @click="openGithub"
        >
          Star on GitHub
        </SecondaryButton>
      </div>
    </div>
  </motion.section>
</template>
