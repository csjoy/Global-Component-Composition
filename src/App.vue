

<template>
  <!-- <div class="container">
    {{ greet("World!") }}
  </div> -->

  <!-- <div class="container">
    <pre>{{ debug(myObj) }}</pre>
  </div> -->

  <div class="container mb-8">
    <ToggleCard />
  </div>

  <div class="container">
    <StepView />
  </div>

  <div class="container mb-8">
    <LayoutView />
  </div>

  <!-- <div class="container">
    <h1 class="text-2xl font-semibold my-2">Fetch todo data using axios</h1>
    <div v-for="todo in todos" :key="todo.id">
      <ul>
        <li>Title: {{ todo.title }}</li>
        <li>Status: {{ todo.completed ? "Completed" : "Not Completed" }}</li>
      </ul>
    </div>
  </div> -->

  <!-- <div class="container">
    <StringTemplate />
  </div>

  <div class="container">
    <RenderFunction />
  </div> -->
</template>

<script lang="ts">

export interface Obj {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// const firstMixin = {
//   mounted() {
//     console.log("First mixin mounted hook")
//   }
// }

// const secondMixin = {
//   mounted() {
//     console.log("Second mixin mounted hook")
//   }
// }

// import greeter from './mixins/greeter'
// import debug from './mixins/debugger'
import StringTemplate from './components/StringTemplate.ts';
import RenderFunction from "./components/RenderFunction.ts"
import ToggleCard from './components/ToggleCard.vue';
import StepView from './components/StepView.vue';
import LayoutView from './components/LayoutView.vue';



export default {
  inject: ["axios"],
  // mixins: [greeter, debug, firstMixin, secondMixin],
  data() {
    return {
      greeting: "Hi",
      myObj: {
        some: "data",
        other: "value"
      },
      todos: <Obj[]>[],
    };
  },
  // async mounted() {
  //   const { data }: any = await this.axios("https://jsonplaceholder.typicode.com/todos")
  //   this.todos = data;
  // },
  components: { StringTemplate, RenderFunction, ToggleCard, StepView, LayoutView },

}

</script>