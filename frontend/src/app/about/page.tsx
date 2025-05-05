'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Loreleaf
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              A modern personal knowledge management system designed to help you capture, connect, and cultivate your ideas with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Our Core Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Loreleaf combines the best practices of knowledge management methodologies like Zettelkasten with modern technology to create a seamless experience for organizing your thoughts.
            </p>

            <div className="grid gap-12">
              {/* Atomic Notes Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center p-8">
                    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      Atomic Notes
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Create small, focused notes called leaves. Each leaf contains a single idea, making your knowledge system flexible and interconnected.
                    </p>
                    <Link 
                      href="/about/atomic-notes" 
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      Learn more about Atomic Notes
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Knowledge Graph Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center p-8">
                    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      Knowledge Graph
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Connect your thoughts with bidirectional links. The system automatically creates backlinks, helping you see relationships between ideas.
                    </p>
                    <Link 
                      href="/about/knowledge-graph" 
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      Learn more about Knowledge Graphs
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Discover Insights Feature Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center p-8">
                    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      Discover Insights
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Search, filter, and analyze your personal knowledge base. Find patterns and connections you never knew existed.
                    </p>
                    <Link 
                      href="/about/discover-insights" 
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      Learn more about Discovering Insights
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wLTMwdjZoNnYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0tMTIgMHY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyLTEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptMTItMjR2NmMwIDYgNiA2IDYgMHYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to try Loreleaf?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Start organizing your thoughts and ideas today with our free personal plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="bg-white text-emerald-700 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-emerald-800/30 hover:bg-gray-100 transition-all duration-300 text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/" 
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300 text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 