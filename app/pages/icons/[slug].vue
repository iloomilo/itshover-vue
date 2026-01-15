<script setup lang="ts">
const route = useRoute()
const { code, loadIcon, toPascalCase } = useIconCode()

watchEffect(() => {
  loadIcon(toPascalCase(route.params.slug as string))
})
</script>

<template>
  <IconDetailContent :slug="route.params.slug as string" :code="code" />
</template>
