<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <div v-if="isLoading">
        <ChatBubble :its-mine="false" message="..." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message';

interface Props {
  messages: ChatMessage[],
  isLoading: boolean,
}

const props = defineProps<Props>()
// const { messages } = props

const chatRef = ref<HTMLDivElement | null>(null)

console.log(chatRef.value);

setTimeout(() => {
  console.log(chatRef.value);
}, 1000)

watch(props, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 0);
})
</script>
