import ChatBubble from '@/components/chat/ChatBubble.vue'
import { mount } from '@vue/test-utils'

describe('<ChatBubble/>', () => {
  test('renders own message correctly', () => {
    const message = 'Hola'
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    })
    expect(wrapper.find('.bg-blue-200').exists()).toBe(true)
    expect(wrapper.find('.bg-blue-200').text()).toContain(message)
    expect(wrapper.find('.bg-gray-300').exists()).toBe(false)
  })

  test('renders received message correctly', () => {
    const message = 'Chau'
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    })
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true)
    expect(wrapper.find('.bg-gray-300').text()).toContain(message)
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false)

    expect(wrapper.find('img').exists()).toBe(false)
  })

  test('renders received message correctly with image', () => {
    const message = 'Chau'
    const image =
      'https://media4.giphy.com/media/v1.Y2lkPWFmMzk1ZjIwZnBocmsxandhOXl2d3VmdmgxMm9obTc4bTRqZjVocDdrNThjbXdpNiZlcD12MV9naWZzX3JhbmRvbSZjdD1n/RJmJS8V17BKRa/giphy.gif'
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image },
    })
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true)
    expect(wrapper.find('.bg-gray-300').text()).toContain(message)
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false)

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(image)
  })
})
