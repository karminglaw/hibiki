<script setup>
defineProps({
    src: {
    type: String,
    default: '#',
  },
})
</script>

<template>
<section class="w-full h-dvh relative mb-[6vw]">
    <div data-parallax class="w-full h-full absolute overflow-hidden">
        <img class="object-cover object-center w-full" :src="src" alt="">
    </div>
</section>
</template>