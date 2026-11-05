<template>
  <section v-if="isLoading || randomPokemon?.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="mb-5">¿Quién es este Pokémon?</h1>
    <h3 class="capitalize">{{ gameStatus }}</h3>
    <PokemonPicture :pokemon-id="randomPokemon?.id" :show-pokemon="gameStatus !== GameStatus.Playing" />
    <PokemonOptions :options="options" @selected-option="checkAnswer" />
  </section>
</template>

<script lang="ts" setup>
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame.ts';
import { GameStatus } from '../interfaces/game-status.enum.ts';

const { gameStatus, isLoading, randomPokemon, pokemonsOptions: options, checkAnswer } = usePokemonGame()

</script>

<style lang="scss" scoped></style>
