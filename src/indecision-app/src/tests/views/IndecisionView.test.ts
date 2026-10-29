import { mount } from '@vue/test-utils'
import IndecisionView from '@/views/IndecisionView.vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'

const mockMessages = {
  props: ['messages'],
  template: '<div data-testid="mock-messages">Mock ChatMessages {{messages}}</div>',
}

describe('<IndecisionView/>', () => {
  test('renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true)
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true)
  })

  test('calls handleMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockMessages,
        },
      },
    })

    // simular el evento, el componente messageBox dispara el emit manualmente
    const messageBoxComponent = wrapper.findComponent(MessageBox)
    messageBoxComponent.vm.$emit('sendMessage', 'chau mundo')

    await new Promise((r) => setTimeout(r, 150))

    const chatComponent = wrapper.findComponent(ChatMessages)
    console.log(chatComponent.vm.$props.messages)
    expect(chatComponent.vm.$props.messages[0]?.message).toBe('chau mundo')
    //expect(wrapper.html()).toMatchSnapshot()
  })
})
