<template>
  <component :is="icon" v-bind="$attrs" />
</template>
<script setup>
import * as icons from "lucide-vue-next";
const attrs = useAttrs()
const props = defineProps()
const icon = computed(() => icons[attrs.name]);
</script>
