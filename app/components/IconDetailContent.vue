<script setup lang="ts">
import { ref, computed, resolveComponent } from 'vue'
import { useClipboard } from '@vueuse/core'
import { motion } from 'motion-v'
import { ICON_LIST } from '@/constants/icons'
import { LINKS } from '~/constants/links'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { AnimatedIconHandle } from '~~/registry/types/types'

const props = defineProps<{
  slug: string
  code: string
}>()

const iconRef = ref<AnimatedIconHandle | null>(null)
const { copy: copyCodeText, copied: codeCopied } = useClipboard({ copiedDuring: 2000 })
const { copy: copyDepText, copied: depCopied } = useClipboard({ copiedDuring: 2000 })

const iconData = computed(() => ICON_LIST.find((icon) => icon.name === props.slug))

const copyCode = async () => {
  await copyCodeText(props.code)
}

const copyDependency = async () => {
  await copyDepText('npm install motion-v')
}

const playAnimation = () => {
  iconRef.value?.startAnimation()
  setTimeout(() => {
    iconRef.value?.stopAnimation()
  }, 1500)
}
</script>

<template>
  <div class="bg-background text-foreground min-h-screen">
    <div v-if="!iconData" class="flex min-h-screen items-center justify-center">
      <div class="text-center">
        <h1 class="mb-4 text-2xl font-bold">Icon not found</h1>
        <NuxtLink
          to="/icons"
          class="text-primary hover:text-primary/80 inline-flex items-center gap-2"
        >
          <ArrowNarrowLeftIcon class="h-4 w-4" />
          Back to Icons
        </NuxtLink>
      </div>
    </div>

    <div v-else class="px-4 py-12 sm:mr-20 sm:ml-20 sm:px-0">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.4 }"
      >
        <NuxtLink
          to="/icons"
          class="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowNarrowLeftIcon :size="18" />
          Back to Icons
        </NuxtLink>

        <div class="mt-8 flex flex-col gap-8 md:flex-row md:gap-16">
          <div class="flex flex-col items-center md:w-[300px] md:shrink-0">
            <motion.div
              class="bg-muted/30 relative flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl border p-12"
              :initial="{ scale: 0.9, opacity: 0 }"
              :animate="{ scale: 1, opacity: 1 }"
              :transition="{ delay: 0.1 }"
            >
              <div
                class="text-muted-foreground hover:bg-accent hover:text-foreground absolute top-4 right-4 hidden cursor-pointer rounded-md p-2 transition-colors sm:hidden [@media(hover:none)]:block"
                @click="playAnimation"
              >
                <PlayerIcon :size="24" />
              </div>

              <component :is="resolveComponent(iconData.componentName)" ref="iconRef" :size="120" />
            </motion.div>

            <motion.h1
              class="mt-6 text-2xl font-bold tracking-tight"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.2 }"
            >
              {{ iconData.name }}
            </motion.h1>

            <motion.div
              class="mt-3 flex flex-wrap justify-center gap-2"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.3 }"
            >
              <span
                v-for="keyword in iconData.keywords"
                :key="keyword"
                class="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
              >
                {{ keyword }}
              </span>
            </motion.div>
          </div>

          <motion.div
            class="min-w-0 flex-1"
            :initial="{ opacity: 0, x: 20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ delay: 0.2 }"
          >
            <h2 class="mb-4 text-xl font-semibold">Installation</h2>

            <Tabs default-value="cli" class="w-full">
              <TabsList
                class="border-border mb-6 h-auto gap-4 rounded-none border-b bg-transparent p-0 justify-start"
              >
                <TabsTrigger
                  value="cli"
                  class="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-primary relative items-center rounded-none border-b-2 border-transparent bg-transparent px-6 py-2 font-medium data-[state=active]:shadow-none"
                >
                  CLI
                </TabsTrigger>
                <TabsTrigger
                  value="manual"
                  class="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-primary relative items-center rounded-none border-b-2 border-transparent bg-transparent px-6 py-2 font-medium data-[state=active]:shadow-none"
                >
                  Manual
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cli" class="mt-0 space-y-4">
                <div>
                  <CodeBlock
                    :command="`${LINKS.SITE_URL}/r/${iconData.componentName}.json`"
                    class="w-full"
                  />
                </div>
              </TabsContent>

              <TabsContent value="manual" class="space-y-8">
                <div>
                  <div class="mb-4 flex items-center gap-3">
                    <span
                      class="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium"
                    >
                      1
                    </span>
                    <h2 class="text-lg font-semibold">Install Dependency</h2>
                  </div>
                  <div class="bg-muted/30 group relative overflow-hidden rounded-xl border">
                    <div class="flex items-center justify-between border-b px-4 py-2">
                      <span class="text-muted-foreground text-xs">Terminal</span>
                      <button
                        class="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        @click="copyDependency"
                      >
                        <SimpleCheckedIcon v-if="depCopied" :size="14" class="text-green-500" />
                        <CopyIcon v-else :size="14" />
                        {{ depCopied ? 'Copied' : 'Copy' }}
                      </button>
                    </div>
                    <pre
                      class="p-4 text-sm"
                    ><code><span class="text-primary">$</span> npm install motion-v</code></pre>
                  </div>
                </div>

                <div>
                  <div class="mb-4 flex items-center gap-3">
                    <span
                      class="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium"
                    >
                      2
                    </span>
                    <h2 class="text-lg font-semibold">Copy the Code</h2>
                  </div>
                  <div class="bg-muted/30 relative overflow-hidden rounded-xl border">
                    <div class="flex items-center justify-between border-b px-4 py-2">
                      <span class="text-muted-foreground text-xs"
                        >{{ iconData.componentName }}.vue</span
                      >
                      <button
                        :disabled="!code"
                        class="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs transition-colors disabled:opacity-50"
                        @click="copyCode"
                      >
                        <SimpleCheckedIcon v-if="codeCopied" :size="14" class="text-green-500" />
                        <CopyIcon v-else :size="14" />
                        {{ codeCopied ? 'Copied' : 'Copy' }}
                      </button>
                    </div>
                    <div class="max-h-[500px] overflow-auto">
                      <pre
                        v-if="code"
                        class="p-4 text-sm"
                      ><code class="text-foreground/90">{{ code }}</code></pre>
                      <div v-else class="flex h-40 items-center justify-center">
                        <span class="text-muted-foreground text-sm">Loading code...</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="iconData.customProps && iconData.customProps.length > 0">
                  <div class="mb-4 flex items-center gap-3">
                    <span
                      class="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium"
                    >
                      3
                    </span>
                    <h2 class="text-lg font-semibold">Custom Props</h2>
                  </div>
                  <div class="bg-muted/30 overflow-hidden rounded-xl border">
                    <table class="w-full text-sm">
                      <thead class="bg-muted/50 border-b">
                        <tr>
                          <th class="px-4 py-3 text-left font-medium">Prop</th>
                          <th class="px-4 py-3 text-left font-medium">Type</th>
                          <th class="px-4 py-3 text-left font-medium">Default</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="prop in iconData.customProps"
                          :key="prop.name"
                          class="border-b last:border-0"
                        >
                          <td class="text-primary px-4 py-3 font-mono">{{ prop.name }}</td>
                          <td class="text-muted-foreground px-4 py-3 font-mono">{{ prop.type }}</td>
                          <td class="text-muted-foreground px-4 py-3 font-mono">
                            {{ String(prop.defaultValue) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</template>
