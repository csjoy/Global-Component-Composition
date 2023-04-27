<script setup lang="ts">
import { ref, defineEmits } from "vue"

const address = ref("")
const emits = defineEmits(["next", "back"])
const next = () => {
  emits("next", address.value)
}
const back = () => {
  emits("back")
}
</script>

<template>
  <label>Address: <input v-model="address" class="p-2 bg-gray-50 border border-gray-500 rounded" /></label>
  <button class="m-2 px-5 py-2.5 bg-gray-400 text-white rounded" @click="next">Next</button>
  <button class=" px-5 py-2.5 bg-gray-400 text-white rounded" @click="back">Back</button>
</template>