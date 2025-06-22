import { AppIcon } from '../../../.nuxt/components';
<template>
  <Card v-for="item in articles" :key="item.id" class="flex flex-col cursor-pointer md:flex-row overflow-hidden p-0"
    @click="handleCardClick(item)">
    <img :src="item.image" alt="image" class="w-full md:w-65 h-52 object-cover" />
    <CardContent class="px-4 pb-4 pt-0 md:px-6 md:pt-4">
      <div class="flex flex-col justify-between h-full">
        <div>
          <h3 class="text-xl font-semibold mb-3">{{ item.name }}</h3>
          <p class="text-gray-700">{{ `${capitalize($t('weight'))}: ${item.weight}g` }}</p>
          <p class="text-gray-700">{{ `${capitalize($t('size'))}: ${item.weight}g` }}</p>
          <p class="text-gray-700">{{ `${capitalize($t('usecase'))}: ${item.weight}g` }}</p>

          <!-- <ul>
            <p class="text-gray-700 mb-1">{{ `${capitalize($t('size'))}:` }}</p>
            <li v-for="(size, i) in item.sizeList" :key="i" class="pl-2 md:pl-4 text-sm text-gray-500 mb-1">
              {{ $t(size.type) }}: {{ size.value.join(' x ') }} cm
            </li>
          </ul> -->
        </div>
        <div class="text-xs space-x-2">
          <span v-for="tag in item.tagList" :key="tag" class="inline-block bg-gray-100 px-2 py-1 rounded">{{ tag
            }}</span>
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
  router.push(`/gear/${item.id}`)
}
</script>