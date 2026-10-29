import ChatMessages from '@/components/chat/ChatMessages.vue'
import type { ChatMessage } from '@/interfaces/chat-message'
import { mount } from '@vue/test-utils'

const messages: ChatMessage[] = [
  { id: 1, message: 'hola', itsMine: true },
  { id: 2, message: 'si', itsMine: false, image: 'http://hola.jpg' },
  { id: 1, message: 'no', itsMine: true },
]
describe('<ChatMessages/>', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages, isLoading: false },
  })
  test('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' })
    console.log(chatBubbles.length)
    console.log(chatBubbles.map((b) => b.text()))

    expect(chatBubbles.length).toBe(messages.length)
  })

  test('scrolls down to the bottom after message update', async () => {
    const scrollMock = vi.fn()

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement
    chatRef.scrollTo = scrollMock

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'hola2', itsMine: true }],
    })

    await new Promise((r) => setTimeout(r, 150))

    expect(scrollMock).toHaveBeenCalled()
    expect(scrollMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    })
  })
})
