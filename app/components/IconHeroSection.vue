<script setup lang="ts">
import { motion } from 'motion-v'
import { LINKS } from '~/constants/links'
</script>

<template>
  <section class="relative overflow-hidden">
    <motion.div
      class="from-primary/20 to-primary/5 pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br blur-3xl"
      :animate="{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }"
      :transition="{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }"
    />

    <motion.div
      class="from-primary/15 pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-to-tl to-transparent blur-3xl"
      :animate="{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2]
      }"
      :transition="{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut'
      }"
    />

    <motion.div
      class="relative w-full py-20 md:py-28"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 0.5 }"
    >
      <div class="px-4 sm:mx-20 sm:px-0">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div class="flex w-full flex-col items-start text-left">
            <motion.h1
              class="mb-6 text-3xl font-bold tracking-tight lowercase sm:text-4xl lg:text-5xl"
              :initial="{ opacity: 0, y: 30 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1, ease: 'easeOut' }"
            >
              Static Icons
              <span
                class="from-primary via-primary/80 to-primary/60 bg-gradient-to-r bg-clip-text text-transparent"
              >
                feel dead now
              </span>
            </motion.h1>

            <motion.p
              class="text-muted-foreground mb-4 max-w-xl text-lg leading-relaxed lowercase"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.2, ease: 'easeOut' }"
            >
              A collection of smooth, high-quality animated icons for your next project. Copy and
              paste directly into your app.
            </motion.p>

            <motion.span
              class="text-muted-foreground mb-6 text-sm lowercase"
              :initial="{ opacity: 0, y: 12 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.4, delay: 0.25, ease: 'easeOut' }"
            >
              works seamlessly with
              <NuxtLink
                to="https://shadcn-vue.com/"
                target="_blank"
                class="group inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200"
              >
                <span
                  class="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent"
                >
                  shadcn
                </span>
              </NuxtLink>
              via cli
            </motion.span>

            <motion.div
              class="flex items-center gap-3 lowercase"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.3, ease: 'easeOut' }"
            >
              <span class="text-muted-foreground text-sm"> Crafted with care and </span>

              <NuxtLink
                to="https://motion.dev/"
                target="_blank"
                class="group bg-primary/10 hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200"
              >
                <span
                  class="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent"
                >
                  motion
                </span>
                <svg
                  class="text-primary h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  :stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </NuxtLink>
            </motion.div>
          </div>

          <motion.div
            class="flex w-full justify-center lg:justify-end"
            :initial="{ opacity: 0, x: 30, scale: 0.95 }"
            :animate="{ opacity: 1, x: 0, scale: 1 }"
            :transition="{ duration: 0.6, delay: 0.3, ease: 'easeOut' }"
          >
            <div class="relative w-full max-w-xl">
              <div
                class="from-primary/20 via-primary/10 absolute inset-0 -z-10 translate-y-4 scale-95 rounded-2xl bg-gradient-to-br to-transparent opacity-50 blur-2xl"
              />

              <CodeBlock :command="`${LINKS.SITE_URL}/PlugConnectedIcon.json`" class="shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
</template>
