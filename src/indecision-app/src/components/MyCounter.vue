<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-test-id="square-label">Square: {{ squareCounter }}</h3>
  </section>
  <div>
    <button class="btn" @click="increment">+ 1</button>
    <button class="btn" @click="decrement">- 1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  valor?: number
}

const props = defineProps<Props>()
const { counter, squareCounter, increment, decrement } = useCounter(props.valor)

</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-200 mr-2 hover:bg-blue-700 rounded;
}
</style>
