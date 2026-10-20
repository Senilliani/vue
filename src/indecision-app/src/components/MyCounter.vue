<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>
  <div>
    <button class="btn" @click="increment">+ 1</button>
    <button class="btn" @click="decrement">- 1</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  valor: number
}

const props = defineProps<Props>()

const counter = ref(props.valor)
const squareCounter = computed(() => counter.value * counter.value)

const increment = () => {
  counter.value = counter.value + 1 // counter++
}

const decrement = () => {
  counter.value = counter.value - 1 // counter--
}
</script>
<style scoped>
.btn {
  @apply p-5 bg-blue-200 mr-2 hover:bg-blue-700 rounded;
}
</style>
