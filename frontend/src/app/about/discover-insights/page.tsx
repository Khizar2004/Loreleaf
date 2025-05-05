'use client';

import Link from 'next/link';

export default function DiscoverInsightsPage() {
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
              <span>Discover Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Discover Insights
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              Search, filter, and analyze your personal knowledge to uncover patterns and connections you never knew existed.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Unlock Hidden Knowledge
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                The true power of a personal knowledge management system comes not just from storing information, but from being able to extract insights from it. Loreleaf's Discover Insights feature provides powerful tools to help you search, filter, and analyze your knowledge base in ways that reveal new patterns and connections.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                As your collection of notes grows, the potential for discovering unexpected relationships and generating new ideas increases exponentially. Our advanced search and analytics features help you navigate your knowledge and find exactly what you need when you need it.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Key Features
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Advanced Filtering</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Filter your notes by tags, creation date, connections, or content to quickly narrow down to the specific information you're looking for.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Timeline View</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  See your notes arranged chronologically to track the evolution of your thoughts and identify patterns in your thinking over time.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Analytics Dashboard</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Get insights into your knowledge base with visual analytics that show trends, connections, and the distribution of your notes across different topics.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Semantic Search</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Find related ideas even when they don't share the same keywords. Our intelligent search understands the context and meaning behind your notes.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              How Loreleaf Helps You Discover Insights
            </h3>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-12">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Daily Digest</h4>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 dark:text-gray-300">
                      Get a daily summary of your most recent notes and their connections to help you stay on top of your knowledge base and identify emerging patterns in your thinking.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Knowledge Analytics</h4>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 dark:text-gray-300">
                      Visualize trends in your note-taking habits, most-used tags, and the growth of your knowledge network over time with interactive charts and graphs.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Smart Collections</h4>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 dark:text-gray-300">
                      Create dynamic collections of notes based on custom criteria that automatically update as your knowledge base grows, allowing you to organize your thoughts without manual effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 mb-12 text-white">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                Real-World Applications
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h4 className="text-xl font-semibold mb-3 text-emerald-300">Research Projects</h4>
                  <p className="text-gray-300">
                    Organize research findings, connect related concepts, and discover insights that help form new hypotheses or conclusions.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h4 className="text-xl font-semibold mb-3 text-emerald-300">Creative Writing</h4>
                  <p className="text-gray-300">
                    Track story elements, character development, and plot ideas, finding connections that inspire new creative directions.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h4 className="text-xl font-semibold mb-3 text-emerald-300">Professional Development</h4>
                  <p className="text-gray-300">
                    Document your learning journey, connect skills and concepts, and identify gaps in your knowledge to guide further education.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <h4 className="text-xl font-semibold mb-3 text-emerald-300">Project Management</h4>
                  <p className="text-gray-300">
                    Keep track of project components, dependencies, and insights, discovering connections that help solve complex problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-xl border border-emerald-100 dark:border-emerald-900/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
                Ready to Unlock New Insights?
              </h3>
              <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                Start discovering hidden connections in your knowledge today. Loreleaf's powerful search and analytics tools help you get more value from your notes than ever before.
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