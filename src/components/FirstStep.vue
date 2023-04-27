<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const name = ref("")
const emits = defineEmits(["next"])
const next = () => {
  emits("next", name.value)
}
</script>

<template>
  <label>Name: <input class="p-2 bg-gray-50 border border-gray-500 rounded" v-model="name" /></label>
  <button class="m-2 bg-gray-400 text-white rounded px-5 py-2.5" @click="next">Next</button>
</template>