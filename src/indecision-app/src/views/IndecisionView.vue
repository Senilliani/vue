<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Amiga</span>
    </div>
    <ChatMessages :messages="messages" :is-loading="isLoading" />
    <MessageBox @send-message="handleMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, handleMessage, isLoading } = useChat()
</script>
