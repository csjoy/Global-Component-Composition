<template>
  <h1 class="text-2xl font-semibold mt-8">Caching a dynamic component state with keep-alive</h1>
  <KeepAlive>
    <component :is="activeStep" @next="activeStep = 'second-step'" @back="activeStep = 'first-step'" />
  </KeepAlive>
</template>

<script lang="ts">
import FirstStep from './FirstStep.vue'
import SecondStep from './SecondStep.vue'

export default {
  components: {
    FirstStep,
    SecondStep,
  },
  data() {
    return {
      activeStep: "first-step"
    }
  }
}
</script>
