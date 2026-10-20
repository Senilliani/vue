import { useCounter } from '@/composables/useCounter'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    valor: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter, increment, decrement } = useCounter(props.valor!)

    return {
      counter,
      squareCounter,
      increment,
      decrement,
    }
  },
})
