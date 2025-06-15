<template>
  <Card v-for="item in articles" :key="item.id" class="flex flex-col cursor-pointer md:flex-row overflow-hidden"
    @click="handleCardClick(item)">
    <!-- <NuxtLink :to="`/blog/${item.id}`"> -->
    <img :src="'/img/hero-1.jpg'" alt="image" class="w-full md:w-60 h-48 object-cover" />
    <!-- <div class="w-full md:w-60 h-48 inline-block" /> -->
    <CardContent class="p-6">
      <h3 class="text-xl font-semibold">{{ item.title }}</h3>
      <p class="text-sm text-gray-500 mb-2">{{ item.date }}</p>
      <p class="text-gray-700 mb-2">{{ item.excerpt }}</p>
      <div class="text-xs space-x-2">
        <span v-for="tag in item.tags" :key="tag" class="inline-block bg-gray-100 px-2 py-1 rounded">{{ tag
        }}</span>
      </div>
    </CardContent>
    <!-- </NuxtLink> -->
  </Card>

</template>
<script setup>
const { articles } = defineProps({
  articles: {
    type: Array,
    default: () => [],
    required: true,
  }
})

const router = useRouter()
const handleCardClick = item => {
  router.push(`/blog/${item.id}`)
  // console.log(item.id)
}
</script>