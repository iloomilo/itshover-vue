<script setup lang="ts">
import { useRoute } from 'vue-router'
import IconDetailContent from '@/components/IconDetailContent.vue'

const route = useRoute()
const iconName = route.params.slug as string

const { data: code } = await useFetch(`/api/icons/${iconName}`)
</script>

<template>
  <IconDetailContent 
    :slug="iconName" 
    :code="code || ''" 
  />
</template
