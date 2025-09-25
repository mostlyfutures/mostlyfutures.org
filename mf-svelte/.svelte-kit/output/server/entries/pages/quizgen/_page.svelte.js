import { y as head, z as attr, F as attr_style, G as ensure_array_like, J as attr_class, K as stringify } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  let textInput = "";
  let isLoading = false;
  let generatedQuiz = [];
  let currentQuestionIndex = 0;
  let selectedAnswer = null;
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>QuizGen AI - PDF &amp; Text to Quiz Generator</title>`);
    });
    $$renderer2.push(`<script src="https://cdn.tailwindcss.com"><\/script><!---->`);
  });
  $$renderer.push(`<div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4"><header class="text-center mb-8"><div class="flex items-center justify-between mb-6"><a href="/" class="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> <span>Back to Home</span></a></div> <h1 class="text-4xl font-bold text-white mb-2">QuizGen AI</h1> <p class="text-gray-300 text-lg">Transform your documents and text into interactive quizzes</p></header> `);
  if (!generatedQuiz.length && !isLoading) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<main class="bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-4"><label class="block text-lg font-semibold text-gray-200">1. Upload PDF(s) (Optional)</label> <div class="file-input-wrapper w-full svelte-2rq9r2"><button class="bg-gray-700 text-white w-full py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg> <span>${escape_html("Select PDF File(s)")}</span></button> <input type="file" accept=".pdf" multiple class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/></div></div> <div class="space-y-4"><label for="chat-input" class="block text-lg font-semibold text-gray-200">2. Add Context or Text</label> <textarea placeholder="Enter your text content here for quiz generation..." class="w-full h-32 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none">`);
    const $$body = escape_html(textInput);
    if ($$body) {
      $$renderer.push(`${$$body}`);
    }
    $$renderer.push(`</textarea></div></div> <div class="mt-8 text-center"><button${attr("disabled", isLoading, true)} class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none">${escape_html("Generate Quiz")}</button></div> <div class="mt-8 bg-gray-700 p-6 rounded-lg"><h3 class="text-xl font-semibold text-white mb-3">How to use QuizGen AI:</h3> <ol class="text-gray-300 space-y-2 list-decimal list-inside"><li>Upload PDF files or paste text content</li> <li>Click "Generate Quiz" to create questions</li> <li>Answer the generated questions</li> <li>Get instant feedback and scoring</li></ol></div></main>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  if (generatedQuiz.length > 0 && true) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto"><div class="mb-6"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold text-white">Quiz Question ${escape_html(currentQuestionIndex + 1)} of ${escape_html(generatedQuiz.length)}</h2> <div class="bg-blue-600 text-white px-4 py-2 rounded-lg">Progress: ${escape_html(currentQuestionIndex + 1)}/${escape_html(generatedQuiz.length)}</div></div> <div class="w-full bg-gray-700 rounded-full h-2 mb-6"><div class="bg-blue-600 h-2 rounded-full transition-all"${attr_style(`width: ${stringify((currentQuestionIndex + 1) / generatedQuiz.length * 100)}%`)}></div></div></div> <div class="mb-8"><h3 class="text-xl font-semibold text-white mb-6">${escape_html(generatedQuiz[currentQuestionIndex].question)}</h3> <div class="space-y-3"><!--[-->`);
    const each_array = ensure_array_like(generatedQuiz[currentQuestionIndex].options);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      $$renderer.push(`<button${attr_class(`w-full text-left p-4 rounded-lg border transition-all ${stringify(selectedAnswer === index ? "bg-blue-600 border-blue-500 text-white" : "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600")}`)}><span class="font-medium">${escape_html(String.fromCharCode(65 + index))}.</span> ${escape_html(option)}</button>`);
    }
    $$renderer.push(`<!--]--></div></div> <div class="flex justify-between"><button class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">Start Over</button> <button${attr("disabled", selectedAnswer === null, true)} class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${escape_html(currentQuestionIndex === generatedQuiz.length - 1 ? "Finish Quiz" : "Next Question")}</button></div></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  _page as default
};
