<script setup lang="ts">
import { defineProps } from 'vue'
const { url, title, description } = defineProps(["url", "title", "description"])
</script>

<template>
  <div>
    <img :src="url" alt="image" width="200" class="w-full shadow">
    <h3 class="font-medium my-4 text-2xl">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>