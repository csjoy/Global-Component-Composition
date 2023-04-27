<script setup lang="ts">
import Rich from './Rich.vue'
import Compressed from './Compressed.vue';
import List from './List.vue';
import { shallowRef } from 'vue';

const items = [
  {
    id: "10",
    title: "Forest Shot",
    description: "Recent shot of a forest overlooking a lake",
    url: "https://picsum.photos/id/10/1000/750.jpg",
  },
  {
    id: "1000",
    title: "Cold cross",
    description: "Mountaintop cross with snowfall from Jan 2018",
    url: "https://picsum.photos/id/1000/1000/750.jpg",
  },
]

const layoutOptions = [
  {
    name: "Rich",
    component: Rich
  },
  {
    name: "Compressed",
    component: Compressed
  },
  {
    name: "List",
    component: List
  }
]

const layout = shallowRef(Rich)
</script>

<template>
  <h1 class="text-2xl font-semibold my-4">Dynamic card layout with the component tag</h1>
  <div class="my-4">
    Layout:
    <select v-model="layout">
      <option v-for="(option, index) in layoutOptions" :key="index" :value="option.component">{{ option.name }}</option>
    </select>
  </div>
  <div :class="{ 'grid grid-cols-2': layout !== List, 'flex flex-col': layout === List }">
    <component :is="layout" v-for="item in items" :key="item.id" :url="item.url" :title="item.title" :description="item.description" />
  </div>
</template>