<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>
  <div>
    <button @click="increment">+ 1</button>
    <button @click="decrement">- 1</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const counter = ref(2)
const squareCounter = computed(() => counter.value * counter.value)

const increment = () => {
  counter.value = counter.value + 1 // counter++
}

const decrement = () => {
  counter.value = counter.value - 1 // counter--
}
}
</script>

<style scoped></style>
