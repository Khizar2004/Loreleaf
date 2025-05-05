'use client';

import Link from 'next/link';

export default function AtomicNotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center text-emerald-200 mb-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Atomic Notes</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Atomic Notes
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              The foundation of effective knowledge management starts with small, focused notes that capture individual ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 p-8 mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                What are Atomic Notes?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Atomic Notes, or "leaves" in Loreleaf, are the building blocks of your knowledge system. Each leaf contains a single, discrete idea - small enough to be specific, but substantial enough to stand on its own.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                This approach is inspired by the Zettelkasten method, popularized by prolific social scientist Niklas Luhmann, who used it to produce vast amounts of academic work by creating connections between individual ideas.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Key Benefits
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Focused Creation</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  By focusing on one idea per leaf, you can articulate your thoughts more clearly and precisely, without getting lost in complexity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Modular Thinking</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Atomic notes can be reorganized, connected, and recombined in endless ways, allowing for flexible knowledge structures.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Faster Retrieval</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  When your knowledge is organized into discrete units, it's easier to find exactly what you're looking for without wading through large documents.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Improved Understanding</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Breaking down complex subjects into atomic components helps you understand them more deeply and identify connections between concepts.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              How Loreleaf Enhances Atomic Notes
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Rich Markdown Editing</h4>
                    <p className="text-gray-600 dark:text-gray-300">Format your notes with Markdown for easy-to-read structure, including headings, lists, code blocks, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Effortless Tagging</h4>
                    <p className="text-gray-600 dark:text-gray-300">Add tags to categorize your notes and find related ideas across your knowledge base.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bidirectional Linking</h4>
                    <p className="text-gray-600 dark:text-gray-300">Connect notes to each other with links that work in both directions, creating a network of related ideas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Seamless Organization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Easily browse, filter, and organize your notes based on tags, creation date, or connections.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-xl border border-emerald-100 dark:border-emerald-900/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
                Ready to Start Creating Atomic Notes?
              </h3>
              <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                Sign up for Loreleaf today and start organizing your thoughts into a powerful knowledge system. Our intuitive interface makes it easy to create, connect, and cultivate your ideas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/register" 
                  className="bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link 
                  href="/about" 
                  className="bg-white text-emerald-600 border border-emerald-600 font-medium py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors text-center"
                >
                  Back to Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 