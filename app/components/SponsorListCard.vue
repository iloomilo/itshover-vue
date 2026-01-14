<script setup lang="ts">
defineProps<{
    sponsor: any
}>()
</script>

<template>
  <div class="bg-card flex flex-col items-center rounded-xl border p-6 text-center shadow-sm">
     <!-- Simple avatar placeholder if no image -->
     <div class="h-16 w-16 rounded-full bg-muted/50 mb-4 flex items-center justify-center text-xl font-bold">
         {{ sponsor.name?.charAt(0) || '?' }}
     </div>
     <h3 class="font-semibold text-lg">{{ sponsor.name || 'Anonymous' }}</h3>
     <p class="text-muted-foreground text-sm mb-4">{{ sponsor.message || 'Supporter' }}</p>
     <div class="font-bold text-primary">{{ sponsor.amount ? `$${sponsor.amount}` : '' }}</div>
  </div>
</template>
