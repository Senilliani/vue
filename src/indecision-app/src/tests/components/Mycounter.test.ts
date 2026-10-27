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

  test('increments the counter when +1 button is clicked', async () => {
    const valor = 5
    const wrapper = mount(MyCounter, {
      props: {
        valor: valor,
      },
    })

    const btnIncrement = wrapper.find('button')
    await btnIncrement.trigger('click')

    const [counterLabel, squareLabel] = wrapper.findAll('h3')

    expect(counterLabel?.text()).toContain(`Counter: ${valor + 1}`)
    expect(squareLabel?.text()).toContain(`Square: ${(valor + 1) * (valor + 1)}`)
  })

  test('decrements the counter when -1 button is clicked twice', async () => {
    const valor = 5
    const wrapper = mount(MyCounter, {
      props: {
        valor: valor,
      },
    })

    const btnDecrement = wrapper.find('[data-test-id="button-dec"]')

    await btnDecrement.trigger('click')
    await btnDecrement.trigger('click')

    const [counterLabel, squareLabel] = wrapper.findAll('h3')

    console.log(`Counter: ${valor - 2}`)
    console.log(`Square: ${(valor - 2) * (valor - 2)}`)

    expect(counterLabel?.text()).toContain(`Counter: ${valor - 2}`) //4
    expect(squareLabel?.text()).toContain(`Square: ${(valor - 2) * (valor - 2)}`) //16
  })
})
