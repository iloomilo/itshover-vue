<script setup lang="ts">
import { motion } from 'motion-v'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-24">
    <motion.h2 v-bind="fadeInUp" class="mb-10 z-10 text-3xl font-medium"> features </motion.h2>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
      <motion.div
        v-bind="fadeInUp"
        :transition="{ ...fadeInUp.transition, delay: 0.1 }"
        class="md:col-span-2"
      >
        <FeatureCard>
          <FeatureImage
            src="/product/open.png"
            alt="open source"
            label="open source"
            :quadratic="true"
            description="fully open, editable, and community owned."
          />
        </FeatureCard>
      </motion.div>

      <motion.div
        v-bind="fadeInUp"
        :transition="{ ...fadeInUp.transition, delay: 0.2 }"
        class="md:col-span-3"
      >
        <FeatureCard>
          <FeatureImage
            src="/product/customize.png"
            alt="customize"
            label="customize"
            description="easy to customize and modify."
          />
        </FeatureCard>
      </motion.div>

      <motion.div
        v-bind="fadeInUp"
        :transition="{ ...fadeInUp.transition, delay: 0.3 }"
        class="md:col-span-3"
      >
        <FeatureCard>
          <FeatureImage
            src="/product/svg.png"
            alt="feel the svg"
            label="feel the svg"
            description="motion-first icons with intent, not decoration."
          />
        </FeatureCard>
      </motion.div>

      <motion.div
        v-bind="fadeInUp"
        :transition="{ ...fadeInUp.transition, delay: 0.4 }"
        class="md:col-span-2"
      >
        <FeatureCard>
          <FeatureImage
            src="/product/motion.png"
            alt="motion first"
            label="motion first"
            :quadratic="true"
            description="every icon is designed with motion as a feature, not an afterthought."
          />
        </FeatureCard>
      </motion.div>
    </div>
  </section>
</template>
