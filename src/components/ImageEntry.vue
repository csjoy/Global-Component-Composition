<script setup lang="ts">
import { defineProps } from "vue"
const props = defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <img :src="props.url" alt="" class="duration-300 hover:scale-105 shadow">
</template>