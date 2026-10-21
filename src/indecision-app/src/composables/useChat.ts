import type { ChatMessage } from '@/interfaces/chat-message'
import type { YesNoResponse } from '@/interfaces/yes-no-resp'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const getResponse = async () => {
    const request = await fetch('https://yes-no-wtf.vercel.app/api')
    const data = (await request.json()) as YesNoResponse

    return data
  }

  const handleMessage = async (text: string) => {
    if (text.length === 0) {
      return
    }

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    })

    if (!text.endsWith('?')) {
      return
    }

    const { answer, image } = await getResponse()

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    })
  }

  return {
    messages,
    handleMessage,
  }
}
