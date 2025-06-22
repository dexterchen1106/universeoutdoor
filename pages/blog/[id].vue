<template>
  <h1>{{ `blog-${params.id}` }}</h1>
  
</template>
<script setup>
const { params } = useRoute()
console.log(params)
</script>
