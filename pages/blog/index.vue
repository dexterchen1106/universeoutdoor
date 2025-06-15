<template>
  <div>
    <!-- Fixed & Scroll-Responsive Header -->
    <!-- :class="{ 'opacity-0 pointer-events-none': !showHeader, 'opacity-100': showHeader }"> -->
    <div class="fixed top-0 w-full z-50 text-red">
      <AppHeader />
    </div>

    <!-- Push content down to avoid overlap with fixed header -->
    <div>
      <!-- Hero Section -->
      <div class="h-[480px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style="background-image: url('/img/hero-2.jpg')">
        <div>
          <h1 class="text-5xl font-bold mb-4">Our Blog</h1>
          <p class="text-lg max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis.</p>
        </div>
      </div>

      <!-- Blog List Section -->
      <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <!-- Blog Posts -->
        <div class="md:col-span-3 space-y-8">
          <CardView :articles="list" />
          <div class="flex justify-between">
            <Button variant="outline">&lt; Older Posts</Button>
            <Button variant="outline">Newer Posts &gt;</Button>
          </div>
        </div>

        <!-- Sidebar Filters -->
        <div>
          <div class="mb-6">
            <Input placeholder="Search..." class="w-full" />
          </div>
          <div class="mb-6">
            <h4 class="font-semibold mb-2">Categories</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li v-for="cat in categories" :key="cat">- {{ cat }}</li>
            </ul>
          </div>
          <!-- <div>
            <h4 class="font-semibold mb-2">Recent Posts</h4>
            <ul class="space-y-2 text-sm text-gray-700">
              <li v-for="r in recent" :key="r.id">
                <div class="flex items-center space-x-2">
                  <img :src="r.avatar" class="w-6 h-6 rounded-full" />
                  <span>{{ r.title }}</span>
                </div>
              </li>
            </ul>
          </div> -->
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import CardView from './components/CardView.vue'
import { useSearchArticles } from '@/api/articles/index'
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

const categories = ['Web', 'Office', 'News', 'Awards'];

const recent = [
  { id: 1, title: 'Post with Sidebar', avatar: '/images/avatar1.jpg' },
  { id: 2, title: 'Post with Video', avatar: '/images/avatar2.jpg' },
  { id: 3, title: 'Post with Audio', avatar: '/images/avatar3.jpg' },
  { id: 4, title: 'Post with Gallery', avatar: '/images/avatar4.jpg' },
];

const { data: list, status, error, refresh, clear } = await useSearchArticles()
// console.log(data.value)

// onMounted(()=>{
//   useSearchArticles()
// })
</script>
