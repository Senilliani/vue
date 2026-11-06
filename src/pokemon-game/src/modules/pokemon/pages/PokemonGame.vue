<template>
  <section v-if="isLoading || randomPokemon?.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="mb-5">¿Quién es este Pokémon?</h1>
    <div v-if="gameStatus !== GameStatus.Playing" class="mb-5 transition-all">
      <button @click="getNextRound()"
        class="border rounded-lg p-3 m-2 cursor-pointer w-40 text-center hover:bg-gray-300">Volver a
        jugar</button>
    </div>
    <PokemonPicture :pokemon-id="randomPokemon?.id" :show-pokemon="gameStatus !== GameStatus.Playing" />
    <PokemonOptions :options="options" @selected-option="checkAnswer"
      :blockSelection="gameStatus !== GameStatus.Playing" :correct-answer="randomPokemon?.id ?? 0" />
  </section>
</template>

<script lang="ts" setup>
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame.ts';
import { GameStatus } from '../interfaces/game-status.enum.ts';

const { gameStatus, isLoading, randomPokemon, pokemonsOptions: options, checkAnswer, getNextRound } = usePokemonGame()

</script>

<style lang="scss" scoped></style>
