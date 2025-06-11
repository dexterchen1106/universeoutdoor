<template>
  <Button variant="secondary" size="icon" className="size-8">
    <AppIcon v-bind="$attrs"/>
    <slot />
  </Button>
</template>
<script setup>
const props = defineProps()
</script>