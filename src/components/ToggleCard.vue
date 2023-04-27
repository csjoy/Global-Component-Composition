<template>
  <div>
    <h1 class="text-4xl font-semibold mt-8">Dynamic Components</h1>
    <div class="my-2 p-2 border border-gray-500 flex gap-4">
      Display mode:
      <input type="radio" id="card-radio" name="style" value="Card" v-model="itemComponent">
      <label for="card-radio">Card</label>

      <input type="radio" id="image-radio" name="style" value="ImageEntry" v-model="itemComponent">
      <label for="image-radio">Image</label>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <component :is="itemComponent" v-for="item in items" :key="item.id" :url="item.url" :title="item.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Card from './Card.vue';
import ImageEntry from './ImageEntry.vue';

export default {
  components: {
    Card,
    ImageEntry
  },
  data() {
    return {
      itemComponent: 'Card',
      items: [
        {
          id: "10",
          title: "Forest Shot",
          url: "https://picsum.photos/id/10/1000/750.jpg"
        },
        {
          id: "1000",
          title: "Cold cross",
          url: "https://picsum.photos/id/1000/1000/750.jpg"
        },
        {
          id: "1002",
          title: "NASA shot",
          url: "https://picsum.photos/id/1002/1000/750.jpg"
        },
        {
          id: "866",
          title: "Peak",
          url: "https://picsum.photos/id/866/1000/750.jpg"
        },
      ]
    }
  }
}
</script>