<script setup>
import { ref, watchEffect } from 'vue'
import { useWindowScroll, useElementBounding } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'
import CustomButton from '../ui/CustomButton.vue'


const container = ref(null)
const bg = ref(null)
const { y: scrollY } = useWindowScroll()
const { top: containerTop, height: containerHeight } = useElementBounding(container)


const { motionProperties: bgProps } = useMotion(bg, {
  initial: { y: 0, scale: 1.08 }
})

const speed = 0.3

watchEffect(() => {
  // how far the top of the container is above the viewport
  const offsetFromViewportTop = scrollY.value - containerTop.value
  // only compute when the section is on screen (optional guard)
  const viewportHeight = window.innerHeight || 0
  const inView =
    containerTop.value < scrollY.value + viewportHeight &&
    containerTop.value + containerHeight.value > scrollY.value

  if (inView) {
    bgProps.y = offsetFromViewportTop * speed
  }
})
</script>

<template>
  <main>
    <section ref="container" class="relative h-screen overflow-hidden parallax-container">
      <!-- Parallax layer -->
      <div ref="bg" class="parallax-bg absolute inset-0 will-change-transform">
        <img class="h-full w-full object-cover" src="/src/assets/homebanner.jpeg" alt="Hero" />
      </div>

      <!-- Foreground content (scrolls normally) -->
      <div class="home-banner-content absolute z-10 flex flex-col gap-8">
        <h1 class="text-white">Resonance &<br />Harmony</h1>
        <p class="text-white max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi aut id
          velit numquam non consequuntur praesentium explicabo, sint laboriosam temporibus vero
          corrupti sunt ducimus odit ullam fugit, unde enim.
        </p>
        <CustomButton :buttonText="'About'" :href="'/about'"/>
      </div>
    </section>
  </main>
</template>

<style scoped>
.parallax-container {
  contain: paint;
}
</style>
