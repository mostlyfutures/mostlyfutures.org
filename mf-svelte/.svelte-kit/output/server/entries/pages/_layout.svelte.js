import { x as slot } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<a href="/about" class="info-circle svelte-12qhfyh">i</a> <div class="hamburger-menu svelte-12qhfyh"><span class="svelte-12qhfyh"></span> <span class="svelte-12qhfyh"></span> <span class="svelte-12qhfyh"></span></div> <nav class="nav-menu svelte-12qhfyh"><a href="/crypto-intro" class="svelte-12qhfyh">Crypto Introduction</a> <a href="/trading-intro" class="svelte-12qhfyh">Trading</a> <a href="/landing" class="svelte-12qhfyh">Sart</a> <a href="/grant-ai" class="svelte-12qhfyh">Grant AI</a> <a href="/quizgen" class="svelte-12qhfyh">QuizGen Flashcards</a></nav> <main class="svelte-12qhfyh"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main>`);
  });
}
export {
  _layout as default
};
