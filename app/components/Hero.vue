<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { useColorMode } from '@vueuse/core'
const colorMode = useColorMode() 

const textAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

const productHuntUrl = computed(() => {
  const theme = colorMode.value === 'dark' ? 'dark' : 'light'
  return `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1056670&theme=${theme}`
})
</script>

<template>
  <section class="flex flex-col items-center justify-center py-20 text-center md:py-32 overflow-hidden w-full">
    
    <div class="absolute inset-0 z-0">
      <HeroBackground />
    </div>

    <div class="relative z-10 flex flex-col items-center w-full px-4">
      
      <div class="mb-6 flex flex-col items-center gap-3">
        <GithubBadge />
        <a
          href="https://www.producthunt.com/products/its-hover?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-its-hover"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block"
        >
          <ClientOnly>
            <NuxtImg
              alt="Its Hover - Icons that move and react mirroring user intent | Product Hunt"
              class="h-auto w-[200px] sm:w-[220px]"
              :src="productHuntUrl"
              sizes="200px sm:220px"
              width="220"
              height="48"
            />
          </ClientOnly>
        </a>
      </div>

      <div class="max-w-3xl space-y-4">
        <motion.h1
          :variants="textAnimation"
          initial="initial"
          animate="animate"
          :transition="textAnimation.transition"
          class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          icons that move with <span class="text-primary">intent</span>
        </motion.h1>

        <motion.p
          :variants="textAnimation"
          initial="initial"
          animate="animate"
          :transition="textAnimation.transition"
          class="text-muted-foreground mx-auto max-w-xl text-lg lowercase sm:text-xl"
        >
          Editable Vue components with motion baked in. Works seamlessly with
          Nuxt, shadcn, and modern design systems.
        </motion.p>
      </div>

      <motion.div
        :variants="textAnimation"
        initial="initial"
        animate="animate"
        :transition="textAnimation.transition"
        class="mt-8 flex flex-col items-center gap-4 sm:flex-row"
      >
        <NuxtLink to="/icons">
          <PrimaryButton class="cursor-pointer lowercase">
            Browse Icons
            <ArrowNarrowRightIcon class="ml-2 h-4 w-4" />
          </PrimaryButton>
        </NuxtLink>
        
<!--         <NuxtLink to="/sponsor">
          <SecondaryButton class="cursor-pointer lowercase">
            Sponsor
          </SecondaryButton>
        </NuxtLink> -->
      </motion.div>

    </div>
  </section>
</template>
