import { y as head } from "../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Grant AI</title>`);
      });
      $$renderer3.push(`<script src="https://cdn.tailwindcss.com" class="svelte-2p3paw"><\/script><!---->`);
    });
    $$renderer2.push(`<div class="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-4 sm:p-8 box-border min-h-screen flex flex-col svelte-2p3paw"><div class="absolute top-4 left-4 z-10 svelte-2p3paw"><a href="/" class="flex items-center space-x-2 text-white hover:text-blue-300 transition svelte-2p3paw"><svg class="w-6 h-6 svelte-2p3paw" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" class="svelte-2p3paw"></path></svg> <span class="text-sm font-medium svelte-2p3paw">Back</span></a></div> <div class="max-w-3xl mx-auto flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10 w-full flex-grow my-auto svelte-2p3paw"><div class="p-4 bg-blue-800/80 text-center text-xl font-bold svelte-2p3paw">Grant AI</div> <div class="flex-1 p-4 sm:p-6 overflow-y-auto chat-messages svelte-2p3paw"></div> <div class="p-4 bg-blue-900/50 svelte-2p3paw"><div class="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 svelte-2p3paw"><input type="text" placeholder="Ask for a chat or /video prompt..." class="flex-1 py-3 px-4 border-none rounded-xl bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full svelte-2p3paw"/> <div class="flex space-x-2 w-full sm:w-auto svelte-2p3paw"><button class="py-3 px-4 bg-purple-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-purple-500 active:scale-95 whitespace-nowrap flex-1 svelte-2p3paw">Upload File</button> <button class="py-3 px-4 bg-green-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-green-500 active:scale-95 whitespace-nowrap flex-1 svelte-2p3paw">💸 Send Money</button> <button class="py-3 px-6 bg-blue-600 text-white border-none rounded-xl cursor-pointer font-bold transition hover:bg-blue-500 active:scale-95 flex-1 svelte-2p3paw">Send</button> <input type="file" class="hidden svelte-2p3paw" accept=".pdf,.docx,image/*"/></div></div> <p class="text-xs text-white/50 text-center mt-2 svelte-2p3paw">Example: /video a majestic eagle flying over mountains</p></div></div></div>`);
  });
}
export {
  _page as default
};
