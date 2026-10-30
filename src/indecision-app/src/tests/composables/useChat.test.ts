import { useChat } from '@/composables/useChat'

describe('useChat', () => {
  test('add message correctly when handleMessage is called', async () => {
    const text = 'Holaa'
    const { messages, handleMessage } = useChat()

    await handleMessage(text)

    expect(messages.value.length).toBe(1)
    expect(messages.value[0]?.itsMine).toBe(true)
    expect(messages.value[0]?.message).toBe(text)
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    })
  })

  test('add nothing if text is empty', async () => {
    const text = ''
    const { messages, handleMessage } = useChat()

    await handleMessage(text)

    expect(messages.value.length).toBe(0)
  })

  test('gets response correctly when message ends with "?"', async () => {
    const text = 'Café?'
    const { messages, handleMessage } = useChat()

    await handleMessage(text)

    await new Promise((r) => setTimeout(r, 1500))

    const [myMessage, theirMessage] = messages.value

    expect(messages.value.length).toBe(2)
    expect(theirMessage?.itsMine).toBe(false)
    expect(theirMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      itsMine: false,
      message: expect.any(String),
    })

    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: expect.any(String),
    })
  })
})
