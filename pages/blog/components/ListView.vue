<template>
  <Card v-for="item in articles" :key="item.id" class="flex flex-col cursor-pointer md:flex-row overflow-hidden p-0"
    @click="handleCardClick(item)">
    <img :src="'/img/hero-1.jpg'" alt="image" class="w-full md:w-65 h-52 object-cover" />
    <CardContent class="px-4 pb-4 pt-0 md:px-6 md:pt-4">
      <div class="flex flex-col justify-between h-full">
        <div>
          <h3 class="text-xl font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-gray-500 mb-2">
            <span>{{ item.startDate }}</span>
            <span v-if="item.startDate === item.endDate">{{ ` ~ ${item.endDate}` }}</span>
          </p>
          <p class="text-gray-700 mb-2">{{ item.excerpt }}</p>
          <div class="text-xs space-x-2 mb-2">
            <span v-for="tag in item.tags" :key="tag" class="inline-block bg-gray-100 px-2 py-1 rounded">{{ tag
              }}</span>
          </div>
        </div>
        <div class="flex">
          <AppIcon name="MapPin" class="mr-2" />
          {{ item.locationList.join(", ") }}
        </div>
      </div>
    </CardContent>
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
}
</script>