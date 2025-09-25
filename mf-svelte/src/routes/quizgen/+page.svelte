<script lang="ts">
  import { onMount } from 'svelte';
  
  let pdfFiles: FileList | null = null;
  let textInput = '';
  let isLoading = false;
  let generatedQuiz: Array<{question: string, options: string[], correct: number}> = [];
  let currentQuestionIndex = 0;
  let selectedAnswer: number | null = null;
  let showResults = false;
  let score = 0;

  function handleFileUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    pdfFiles = target.files;
  }

  function generateQuiz() {
    if (!textInput.trim() && !pdfFiles?.length) {
      alert('Please provide text content or upload a PDF file.');
      return;
    }

    isLoading = true;
    
    // Simulate quiz generation with sample questions
    setTimeout(() => {
      generatedQuiz = [
        {
          question: "What is the main topic of the provided content?",
          options: ["Trading", "Technology", "Education", "Finance"],
          correct: 0
        },
        {
          question: "Which of the following is mentioned as important for beginners?",
          options: ["Complex analysis", "User-friendly platforms", "Advanced mathematics", "Programming skills"],
          correct: 1
        },
        {
          question: "What does the content suggest about market demand?",
          options: ["It never changes", "It fluctuates over time", "It only increases", "It's not important"],
          correct: 1
        }
      ];
      isLoading = false;
      currentQuestionIndex = 0;
      selectedAnswer = null;
      showResults = false;
      score = 0;
    }, 2000);
  }

  function selectAnswer(index: number) {
    selectedAnswer = index;
  }

  function nextQuestion() {
    if (selectedAnswer === generatedQuiz[currentQuestionIndex].correct) {
      score++;
    }
    
    if (currentQuestionIndex < generatedQuiz.length - 1) {
      currentQuestionIndex++;
      selectedAnswer = null;
    } else {
      showResults = true;
    }
  }

  function resetQuiz() {
    generatedQuiz = [];
    currentQuestionIndex = 0;
    selectedAnswer = null;
    showResults = false;
    score = 0;
    textInput = '';
    pdfFiles = null;
  }
</script>

<svelte:head>
  <title>QuizGen AI - PDF & Text to Quiz Generator</title>
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
  <!-- Header -->
  <header class="text-center mb-8">
    <div class="flex items-center justify-between mb-6">
      <a href="/" class="text-white hover:text-gray-300 transition-colors flex items-center space-x-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Back to Home</span>
      </a>
    </div>
    <h1 class="text-4xl font-bold text-white mb-2">QuizGen AI</h1>
    <p class="text-gray-300 text-lg">Transform your documents and text into interactive quizzes</p>
  </header>

  {#if !generatedQuiz.length && !isLoading}
    <!-- Main Content Area -->
    <main class="bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto">
      <!-- Input Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- PDF Upload -->
        <div class="space-y-4">
          <label class="block text-lg font-semibold text-gray-200">1. Upload PDF(s) (Optional)</label>
          <div class="file-input-wrapper w-full">
            <button class="bg-gray-700 text-white w-full py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span>{pdfFiles?.length ? `${pdfFiles.length} file(s) selected` : 'Select PDF File(s)'}</span>
            </button>
            <input type="file" accept=".pdf" multiple on:change={handleFileUpload} class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
          </div>
        </div>

        <!-- Text Input -->
        <div class="space-y-4">
          <label for="chat-input" class="block text-lg font-semibold text-gray-200">2. Add Context or Text</label>
          <textarea
            bind:value={textInput}
            placeholder="Enter your text content here for quiz generation..."
            class="w-full h-32 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>
      </div>

      <!-- Generate Button -->
      <div class="mt-8 text-center">
        <button
          on:click={generateQuiz}
          disabled={isLoading}
          class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
        >
          {isLoading ? 'Generating Quiz...' : 'Generate Quiz'}
        </button>
      </div>

      <!-- Instructions -->
      <div class="mt-8 bg-gray-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold text-white mb-3">How to use QuizGen AI:</h3>
        <ol class="text-gray-300 space-y-2 list-decimal list-inside">
          <li>Upload PDF files or paste text content</li>
          <li>Click "Generate Quiz" to create questions</li>
          <li>Answer the generated questions</li>
          <li>Get instant feedback and scoring</li>
        </ol>
      </div>
    </main>
  {/if}

  {#if isLoading}
    <div class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-white mb-4"></div>
      <p class="text-white text-xl">Generating your quiz...</p>
      <p class="text-gray-300">This may take a few moments</p>
    </div>
  {/if}

  {#if generatedQuiz.length > 0 && !showResults}
    <!-- Quiz Display -->
    <div class="bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto">
      <div class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-white">Quiz Question {currentQuestionIndex + 1} of {generatedQuiz.length}</h2>
          <div class="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Progress: {currentQuestionIndex + 1}/{generatedQuiz.length}
          </div>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2 mb-6">
          <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: {((currentQuestionIndex + 1) / generatedQuiz.length) * 100}%"></div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-6">{generatedQuiz[currentQuestionIndex].question}</h3>
        <div class="space-y-3">
          {#each generatedQuiz[currentQuestionIndex].options as option, index}
            <button
              on:click={() => selectAnswer(index)}
              class="w-full text-left p-4 rounded-lg border transition-all {selectedAnswer === index ? 'bg-blue-600 border-blue-500 text-white' : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'}"
            >
              <span class="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
            </button>
          {/each}
        </div>
      </div>

      <div class="flex justify-between">
        <button
          on:click={resetQuiz}
          class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Start Over
        </button>
        <button
          on:click={nextQuestion}
          disabled={selectedAnswer === null}
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex === generatedQuiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  {/if}

  {#if showResults}
    <!-- Results Display -->
    <div class="bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-white mb-6">Quiz Complete!</h2>
      <div class="mb-6">
        <div class="text-6xl font-bold text-blue-400 mb-2">{score}/{generatedQuiz.length}</div>
        <p class="text-xl text-gray-300">Your Score: {Math.round((score / generatedQuiz.length) * 100)}%</p>
      </div>
      
      <div class="mb-8">
        {#if score === generatedQuiz.length}
          <p class="text-green-400 text-xl">Perfect score! Excellent work! 🎉</p>
        {:else if score >= generatedQuiz.length * 0.7}
          <p class="text-blue-400 text-xl">Great job! You did well! 👏</p>
        {:else}
          <p class="text-yellow-400 text-xl">Good effort! Consider reviewing the material. 📚</p>
        {/if}
      </div>

      <button
        on:click={resetQuiz}
        class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
      >
        Generate New Quiz
      </button>
    </div>
  {/if}
</div>

<style>
  .file-input-wrapper {
    position: relative;
    overflow: hidden;
  }
</style>