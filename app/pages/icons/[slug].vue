<script setup lang="ts">
const route = useRoute()
const { code, loading, loadIcon, toPascalCase } = useIconCode()

watchEffect(() => {
  loadIcon(toPascalCase(route.params.slug as string))
})
</script>

<template>
  <div v-if="loading">Loading ...</div>  
  <IconDetailContent 
    v-else
    :slug="route.params.slug as string" 
    :code="code" 
  />
</template>