<script>
import CustomButton from '../ui/CustomButton.vue'

export default {
  components: {
    CustomButton,
  },
}
</script>

<template>
  <header
    v-motion
    :initial="{ y: -200 }"
    :enter="{  y: 0 ,
    transition: {
      type: 'keyframes',
      duration: 500,
      delay: 500,          
      ease: 'easeOut'       
    }}"
    class="header-section bg-white fixed top-0 left-0 right-0"
  >
    <div class="flex items-center justify-between">
      <a href="/"><img class="header-logo" src="/src/assets/hibikilogo.webp" alt="" /></a>

      <nav class="flex gap-5 items-center">
        <a class="h5 navlink" href="">About</a>
        <a class="h5 navlink" href="">Gallery</a>
        <a class="h5 navlink" href="">Blogs</a>
      </nav>
      <CustomButton :buttonText="'Contact'" href="/contact" />
    </div>
  </header>
</template>
