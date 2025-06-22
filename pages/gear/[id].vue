<template>
  <div class="pt-24 pb-16">
    <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- Image Gallery -->
      <div class="space-y-4">
        <img :src="data.imgList[0]?.url" alt="Main image" class="w-full h-auto rounded-xl shadow-md" />
        <div class="grid grid-cols-3 gap-2">
          <img v-for="(img, index) in data.imgList" :key="index" :src="img.url" alt="thumb"
            class="w-full h-24 object-cover rounded-md border hover:shadow-md cursor-pointer" />
        </div>
      </div>

      <!-- Gear Info -->
      <div>
        <h1 class="text-4xl font-bold mb-4">{{ data.name }}</h1>
        <p class="text-gray-600 mb-6">{{ data.description }}</p>

        <div class="space-y-2 mb-6">
          <p><span class="font-medium">品牌：</span>{{ data.brand }}</p>
          <p><span class="font-medium">分類：</span>{{ data.category }}</p>
          <p><span class="font-medium">系統：</span>{{ data.system }}</p>
          <p><span class="font-medium">重量：</span>{{ data.weight }} g</p>
        </div>

        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">尺寸資訊</h2>
          <ul class="list-disc list-inside text-sm text-gray-700">
            <li v-for="(size, i) in data.sizeList" :key="i">
              {{ size.type }}：{{ size.value.join(' x ') }} cm
            </li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">標籤 Tags</h2>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in data.tagList" :key="tag"
              class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              #{{ tag }}
            </span>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-lg font-semibold mb-2">購買連結</h2>
          <ul class="list-disc list-inside text-blue-600">
            <li v-for="(link, i) in data.urlList" :key="i">
              <a :href="link.url" target="_blank" class="underline hover:text-blue-800">{{ link.title }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { useQueryGear } from '@/api/gears/index'
const { params } = useRoute()
const route = useRoute()
const { data, error, pending } = await useQueryGear(params.id)
console.log(params)
</script>
