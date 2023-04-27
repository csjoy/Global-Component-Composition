<template>
  <div class="p-2 shadow-lg hover:shadow-xl">
    <img :src="url" width="100" class="w-full" />
    <h3 class="my-2 font-medium">{{ title }}</h3>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    url: String,
    title: String
  }
}
</script>