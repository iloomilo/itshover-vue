<script setup lang="ts">
import { ref, resolveComponent } from 'vue'
import { useClipboard } from '@vueuse/core'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip' 
import { LINKS } from '~/constants/links';
import type { IconType } from '@/constants/icons'


const props = defineProps<{
  icon: IconType 
}>()
const { code, loadIcon } = useIconCode()
const iconRef = ref<any>(null) 
const { copy: copyCode, copied: isCopied } = useClipboard({ copiedDuring: 1000 })
const { copy: copyCommand, copied: isCommandCopied } = useClipboard({ copiedDuring: 1000 })

const copyFileToClipboard = async () => {
    await loadIcon(props.icon.componentName)
    await copyCode(code.value)
}

const copyCommandToClipboard = async () => {
  const command = `npx shadcn-vue@latest add ${LINKS.SITE_URL}/r/${props.icon.componentName}.json`
  await copyCommand(command)
}

const playAnimation = () => {
  iconRef.value?.startAnimation()
  setTimeout(() => {
    iconRef.value?.stopAnimation()
  }, 1500)
}
</script>

<template>
  <div class="bg-background relative flex min-w-[140px] flex-1 flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow-sm transition-all hover:shadow-md sm:w-48 sm:flex-none">
    
    <div class="absolute top-2 right-2 hidden sm:hidden [@media(hover:none)]:block">
      <button
        @click.prevent="playAnimation"
        class="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors"
      >
        <PlayerIcon :size="16" />
      </button>
    </div>

    <NuxtLink
      :to="`/icons/${icon.name}`"
      class="flex cursor-pointer flex-col items-center justify-center gap-2 p-2 group"
      @mouseenter="iconRef?.startAnimation()"
      @mouseleave="iconRef?.stopAnimation()"
    >
      <Tooltip>
        <TooltipTrigger as-child>
          <component
            :is="resolveComponent(icon.componentName)"
            ref="iconRef"
            :size="56"
          />
        </TooltipTrigger>
        <TooltipContent>{{ icon.name }}</TooltipContent>
      </Tooltip>
    </NuxtLink>

    <div class="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger as-child>
          <button
            class="text-muted-foreground hover:text-foreground h-[16px] transition-colors"
            @click="copyFileToClipboard"
          >
            <SimpleCheckedIcon v-if="isCopied" :size="16" class="text-green-500" />
            <CopyIcon v-else :size="16" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" class="bg-foreground text-background">
          <p>Copy {{ icon.componentName }}.vue file</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger as-child>
          <button
            class="text-muted-foreground hover:text-foreground transition-colors"
            @click="copyCommandToClipboard"
          >
            <SimpleCheckedIcon v-if="isCommandCopied" :size="16" class="text-green-500" />
            <TerminalIcon v-else :size="16" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" class="bg-foreground text-background">
          <p>Copy shadcn command</p>
        </TooltipContent>
      </Tooltip>

    </div>
  </div>
</template>
