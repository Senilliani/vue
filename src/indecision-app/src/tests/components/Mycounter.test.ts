import { mount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

describe('<MyCounter/>', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders the correct counter value', () => {
    const valor = 5
    const wrapper = mount(MyCounter, {
      props: {
        valor: valor,
      },
    })

    const [counterLabel, squareLabel] = wrapper.findAll('h3')

    expect(wrapper.find('h3').text()).toContain(`Counter: ${valor}`)
    expect(wrapper.find('[data-test-id="square-label"]').text()).toContain(
      `Square: ${valor * valor}`,
    )

    expect(counterLabel?.text()).toContain(`Counter: ${valor}`)
    expect(squareLabel?.text()).toContain(`Square: ${valor * valor}`)
  })
})
