<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="increment">+ 1</button>
      <button class="btn" @click="decrement">- 1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2">
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-200 mr-2 hover:bg-blue-700 rounded;
}
</style>
