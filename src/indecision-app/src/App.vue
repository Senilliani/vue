<template>
  <h1>VUE APP</h1>

  <MyCounter :valor="5" />
  <MyCounterScript :valor="5" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';

</script>

<style scoped></style>
