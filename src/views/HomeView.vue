<script setup>
import ContentWImage from '@/components/layouts/Content-w-Image.vue'
import HomeBanner from '@/components/layouts/HomeBanner.vue'
import ZoomImage from '@/components/layouts/ZoomImage.vue';
</script>

<template>
  <HomeBanner />
  <ContentWImage
    :src="'/contentimage.jpg'"
    :subheader-text="''"
    :main-title="'Forged from Excellence'"
    :content-text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
  />
</template>
