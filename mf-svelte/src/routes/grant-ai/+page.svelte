<script lang="ts">
  import { onMount } from 'svelte';
  
  let chatMessages: HTMLDivElement;
  let userInput: HTMLInputElement;
  let fileInput: HTMLInputElement;
  let chatHistory: Array<{role: string, content: string}> = [];
  let isTyping = false;

  onMount(() => {
    // Initialize with welcome message
    addMessageToUI("Hello! I am Grant AI, What do you need twin?", 'bot');
  });

  function addMessageToUI(content: string, role: 'user' | 'bot', messageId?: string) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message', 'mb-4', 'flex');
    if (messageId) {
      messageWrapper.id = messageId;
    }

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('p-3', 'px-4', 'rounded-2xl', 'max-w-[80%]');
    messageDiv.innerHTML = content;
    
    if (role === 'user') {
      messageWrapper.classList.add('justify-end');
      messageDiv.classList.add('bg-blue-600', 'rounded-br-none');
    } else {
      messageWrapper.classList.add('justify-start');
      messageDiv.classList.add('bg-white/10', 'rounded-bl-none');
    }
    
    messageWrapper.appendChild(messageDiv);
    chatMessages.appendChild(messageWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageWrapper;
  }

  function showTypingIndicator() {
    const indicatorContent = `
      <div class="flex items-center space-x-2">
        <div class="typing-dots"><span></span><span></span><span></span></div>
        <span>Grant AI is thinking...</span>
      </div>`;
    return addMessageToUI(indicatorContent, 'bot', 'typing-indicator');
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  }

  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessageToUI(message, 'user');
    userInput.value = '';
    
    // Show typing indicator
    isTyping = true;
    showTypingIndicator();

    // Simulate AI response (in a real app, this would call an AI API)
    setTimeout(() => {
      removeTypingIndicator();
      isTyping = false;
      
      let response = "I'm a demo version of Grant AI. In the full version, I would process your request and provide helpful assistance, twin!";
      
      if (message.toLowerCase().includes('video')) {
        response = "I understand you want to create a video! In the full version, I would help generate video content based on your prompt, twin!";
      } else if (message.toLowerCase().includes('trading') || message.toLowerCase().includes('crypto')) {
        response = "I can help with trading and crypto questions! For real-time data and trading advice, you'd want to connect to live APIs, twin!";
      }
      
      addMessageToUI(response, 'bot');
    }, 1000 + Math.random() * 2000);
  }

  function handleFileUpload() {
    fileInput.click();
  }

  function onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      addMessageToUI(`📎 Uploaded: ${file.name}`, 'user');
      setTimeout(() => {
        addMessageToUI(`I can see you've uploaded "${file.name}". In the full version, I would analyze this file and help you with it, twin!`, 'bot');
      }, 500);
    }
  }

  function handlePayment() {
    addMessageToUI("💸 Payment feature clicked", 'user');
    setTimeout(() => {
      addMessageToUI("Payment integration would be handled through secure payment processors in the full version, twin!", 'bot');
    }, 500);
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }
</script>

<svelte:head>
  <title>Grant AI</title>
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-4 sm:p-8 box-border min-h-screen flex flex-col">
  <div class="absolute top-4 left-4 z-10">
    <a href="/" class="flex items-center space-x-2 text-white hover:text-blue-300 transition">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      <span class="text-sm font-medium">Back</span>
    </a>
  </div>
  
  <div class="max-w-3xl mx-auto flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-full flex-grow my-auto">
    <div class="p-4 bg-blue-800/80 text-center text-xl font-bold">
      Grant AI
    </div>
    
    <div bind:this={chatMessages} class="flex-1 p-4 sm:p-6 overflow-y-auto chat-messages">
      <!-- Messages will be added here dynamically -->
    </div>
    
    <div class="p-4 bg-blue-900/50">
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <input
          bind:this={userInput}
          type="text"
          placeholder="Ask for a chat or /video prompt..."
          class="flex-1 py-3 px-4 border-none rounded-xl bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full"
          on:keypress={handleKeyPress}
        />
        <div class="flex space-x-2 w-full sm:w-auto">
          <button 
            on:click={handleFileUpload}
            class="py-3 px-4 bg-purple-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-purple-500 active:scale-95 whitespace-nowrap flex-1"
          >
            Upload File
          </button>
          <button 
            on:click={handlePayment}
            class="py-3 px-4 bg-green-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-green-500 active:scale-95 whitespace-nowrap flex-1"
          >
            💸 Send Money
          </button>
          <button 
            on:click={sendMessage}
            class="py-3 px-6 bg-blue-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-blue-500 active:scale-95 flex-1"
          >
            Send
          </button>
          <input 
            bind:this={fileInput}
            type="file" 
            class="hidden" 
            accept=".pdf,.docx,image/*"
            on:change={onFileSelected}
          />
        </div>
      </div>
      <p class="text-xs text-white/50 text-center mt-2">Example: /video a majestic eagle flying over mountains</p>
    </div>
  </div>
</div>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
  }

  /* Custom scrollbar for chat messages */
  :global(.chat-messages::-webkit-scrollbar) {
    width: 8px;
  }
  :global(.chat-messages::-webkit-scrollbar-track) {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  :global(.chat-messages::-webkit-scrollbar-thumb) {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 10px;
  }
  :global(.chat-messages::-webkit-scrollbar-thumb:hover) {
    background: #2563eb;
  }

  /* Typing indicator animation */
  :global(.typing-dots span) {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    margin: 0 2px;
    opacity: 0.4;
    animation: bounce 1s infinite;
  }
  :global(.typing-dots span:nth-child(2)) {
    animation-delay: 0.2s;
  }
  :global(.typing-dots span:nth-child(3)) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    50% {
      transform: translateY(-5px);
      opacity: 1;
    }
  }
</style>