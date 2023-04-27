<script setup lang="ts">
import { defineProps } from 'vue'
const { title } = defineProps(["title"])
</script>

<template>
  <div>
    <h3 class="font-medium my-4 text-2xl">{{ title }}</h3>
  </div>
</template>