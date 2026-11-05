<template>
  <section class="mt-5 flex flex-col">
    <button v-for="{ name, id } in options" :key="id" @click="$emit('selectedOption', id)"
      class="capitalize shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all"
      :class="blockSelection ? 'shadow-none bg-gray-100 pointer-events-none' : 'bg-white  hover:bg-gray-300'"
      :disabled="blockSelection">
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[],
  blockSelection: boolean,
}

defineProps<Props>()

defineEmits<{
  selectedOption: [id: number]
}>()
</script>

<style scoped>
@import "tailwindcss";
</style>
