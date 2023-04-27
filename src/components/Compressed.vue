<script setup lang="ts">
import { defineProps } from 'vue'
const { title, description } = defineProps(["title", "description"])
</script>

<template>
  <div>
    <h3 class="font-medium my-4 text-2xl">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>