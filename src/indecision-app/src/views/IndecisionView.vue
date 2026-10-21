<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Amiga</span>
    </div>
    <ChatMessages :messages="messages" />
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: "Hola",
    itsMine: true,
  },
  {
    id: new Date().getTime(),
    message: "Café?",
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: "No",
    itsMine: false,
    image: "https://yesno.wtf/assets/no/24-159febcfd655625c38c147b65e5be565.gif",
  }
])

</script>
