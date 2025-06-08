<template>
  <Button variant="secondary" size="icon" className="size-8">
    <AppIcon
      :name="name"
      :size="size"
      :color="color"
      :stroke-width="strokeWidth"
      :default-class="defaultClass"
    />
  </Button>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String
})
</script>