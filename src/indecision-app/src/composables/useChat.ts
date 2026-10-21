import type { ChatMessage } from '@/interfaces/chat-message'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const handleMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    })
  }

  return {
    messages,
    handleMessage,
  }
}
