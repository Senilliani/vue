<template>
  <h1 class="text-3xl font-bold underline text-blue-600">
    ¡Tailwind funcionando!
  </h1>

  <MyCounter :valor="1" />
  <MyCounterScript :valor="2" />
  <MyCounterScript2 :valor="3" />
</template>

<script lang="ts" setup>
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';

</script>

<style scoped></style>
