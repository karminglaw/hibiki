<script setup>
import CustomButton from '../ui/CustomButton.vue'

defineProps({
  mainTitle: String,
  subheaderText: String,
  contentText: String,
  src: {
    type: String,
    default: '#',
  },
})
</script>

<template>
  <section class="">
    <div class="px-side-md py-[6vw] flex gap-20">
      <div class="reveal-wrap overflow-hidden">
        <div data-parallax class="clip-wrapper">
          <img class="object-cover" :src="src" alt="" />
        </div>
      </div>

      <div class="flex flex-col gap-[15px] justify-center">
        <h5 class="subheader">{{ subheaderText }}</h5>
        <h3>{{ mainTitle }}</h3>
        <p class="text-gray-800">{{ contentText }}</p>
        <CustomButton :buttonText="'About'" :href="'/about'" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
