import { usePokemonGame } from '@pokemon/composables/usePokemonGame'
import { withSetup } from '../../../utils/with-setup'
import { GameStatus } from '@/modules/pokemon/interfaces'
import { flushPromises } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'
import { pokemonApi } from '@/modules/pokemon/api/pokemonApi'
import { pokemonListFake } from '../../../data/fake-pokemons'

const mockPokemonApi = new MockAdapter(pokemonApi)

mockPokemonApi.onGet('/?limit=151').reply(200, {
  results: pokemonListFake,
})

describe('usePokemonGame', () => {
  test('should initialize with the correct default values', async () => {
    const [results, app] = withSetup(usePokemonGame)

    // aquí se evalúan los valores por defecto
    expect(results.gameStatus.value).toBe(GameStatus.Playing)
    expect(results.isLoading.value).toBe(true)
    expect(results.pokemonsOptions.value).toEqual([])
    expect(results.randomPokemon.value).toBe(undefined)

    // se hace que todas las promesas terminen así podemos seguir con lo de abajo
    await flushPromises()
    expect(results.isLoading.value).toBe(false)
    expect(results.pokemonsOptions.value.length).toBe(3)
    expect(results.randomPokemon.value).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    })
  })
})
