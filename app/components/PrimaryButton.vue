<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <Button :class="cn('rounded-full px-8', props.class)" size="lg">
    <slot />
  </Button>
</template>
