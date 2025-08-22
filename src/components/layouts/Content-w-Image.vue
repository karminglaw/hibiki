<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

defineProps({
  subheaderText: String,
  contentText: String,
  src: {
    type: String,
    default: '#',
  },
})

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const imgs = gsap.utils.toArray('[data-open]')

  imgs.forEach((img) => {
    // wrapper provides the rounding + overflow clip
    const wrap = img.closest('.reveal-wrap')
    if (!wrap) return

    // layout/perf hints
    img.style.display = 'block' // avoid baseline gap
    img.style.willChange = 'clip-path'

    // start fully hidden from bottom (straight edge; wrapper rounds it)
    gsap.set(img, { clipPath: 'inset(0% 0% 100% 0%)', opacity: 1 })

    gsap.to(img, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: wrap,
        start: 'top 50%',                // when wrapper top hits 80% viewport
        toggleActions: 'play none none none', // play once
        invalidateOnRefresh: true,
      },
      onComplete: () => {
        img.style.willChange = '' // optional: drop hint after anim
      },
    })
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((st) => st.kill())
})

</script>

<template>
  <section class="">
    <div class="px-side-md py-[6vw] flex gap-20">
      <div class="reveal-wrap overflow-hidden rounded-[20px]">
        <img
          data-open
          class="object-cover rounded-[20px]"
          :src="src"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-[15px] pt-[1.389vw]">
        <h5 class="subheader">{{ subheaderText }}</h5>
        <p class="text-gray-800">{{ contentText }}</p>
        <p class="text-gray-800">{{ contentText }}</p>
      </div>
    </div>
  </section>
</template>
