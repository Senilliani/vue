import PokemonPicture from '@pokemon/components/PokemonPicture.vue'
import { mount } from '@vue/test-utils'

const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${1}.svg`

describe('<PokemonPicture/>', () => {
  test('should render the hidden image when showPokemon prop is false', () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: 1 },
    })

    console.log(wrapper.html())

    const img = wrapper.find('img')

    expect(img.classes()).toContain('brightness-0')
    expect(img.classes()).not.toContain('fade-in')
    expect(img.attributes('src')).toBe(imageSrc)
  })
  test('should render the image when showPokemon prop is true', () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: 1, showPokemon: true },
    })
    const img = wrapper.find('img')
    const attributes = img.attributes()

    console.log(img.attributes())

    expect(attributes).toEqual(
      expect.objectContaining({
        src: imageSrc,
        class: 'fade-in h-50',
      }),
    )
  })
  test('should render an empty src when pokemonId is undefined', () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: undefined },
    })
    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('')
  })
})
