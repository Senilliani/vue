import { computed, ref } from 'vue'

const counter = ref(10)

export const useCounter = (initialValue: number = 5) => {
  const squareCounter = computed(() => counter.value * counter.value)

  const increment = () => {
    counter.value++
  }

  const decrement = () => {
    counter.value--
  }

  return {
    counter,
    squareCounter,
    increment,
    decrement,
  }
}
