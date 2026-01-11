<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  class?: string;
}>();

const classes = computed(() => [
  "mx-auto max-w-7xl",
  props.class,
]);

</script>
<template>
  <div :class="classes">
    <slot />
  </div>
</template>



