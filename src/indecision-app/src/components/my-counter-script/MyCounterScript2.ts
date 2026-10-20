import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  props: {
    valor: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.valor)
    const squareCounter = computed(() => counter.value * counter.value)

    return {
      counter,
      squareCounter,
    }
  },
})
