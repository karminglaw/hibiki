<script setup>
</script>

<template>
  <main>
    <section class="relative h-screen overflow-hidden parallax-container">
      <div data-parallax  class="parallax-bg absolute inset-0 will-change-transform">
        <img class="h-full w-full object-cover" src="/src/assets/homebanner.jpeg" alt="Hero" />
      </div>

      <div class="home-banner-content absolute z-10 flex flex-col gap-8">
        <h1 animate class="text-white">Resonance &<br />Harmony</h1>
        <p animate-2 class="text-white max-w-[28vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi aut id
          velit numquam non consequuntur praesentium explicabo, sint laboriosam temporibus vero
          corrupti sunt ducimus odit ullam fugit, unde enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi aut id
          velit numquam non consequuntur praesentium explicabo, sint laboriosam temporibus vero
          corrupti sunt ducimus odit ullam fugit, unde enim.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.parallax-container {
  contain: paint;
}
</style>
