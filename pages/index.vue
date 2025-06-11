<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Background Slideshow -->
    <div
      v-for="(image, index) in images"
      :key="index"
      class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
      :style="{ backgroundImage: `url(${image})`, opacity: currentIndex === index ? '1' : '0' }"
    />

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black opacity-30 z-10" />

    <!-- Center Content -->
    <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">Wild nature<br />safe adventure</h1>
      <p class="text-lg md:text-xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
        Veniam, facilis.
      </p>
      <Button variant="default">More Info</Button>
    </div>

    <!-- Arrows -->
    <div class="absolute inset-y-0 left-4 z-30 flex items-center cursor-pointer" @click="prevImage">
      <AppIcon name="MoveLeft" strokeWidth="3px" class="text-white text-4xl" />
    </div>
    <div class="absolute inset-y-0 right-4 z-30 flex items-center cursor-pointer" @click="nextImage">
      <AppIcon name="MoveRight" strokeWidth="3px" class="text-white text-4xl" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button'

const images = [
  '/img/hero-1.jpg',
  '/img/hero-2.jpg',
  '/img/hero-3.jpg',
] // 🔁 Add images to `public/` directory

const currentIndex = ref(0)
let intervalId

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  intervalId = setInterval(nextImage, 5000) // Auto-change every 5s
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
