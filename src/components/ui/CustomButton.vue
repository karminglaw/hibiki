<script setup>
defineProps({
  buttonText: String,
  href: {
    type: String,
    default: '#',
  },
})
</script>

<template>
  <a class="button" :href="href" @click="handleClick">
    <span class="button-label">{{ buttonText }}</span>
  </a>
</template>
