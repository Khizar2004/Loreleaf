'use client';

import Link from 'next/link';

export default function KnowledgeGraphPage() {
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
              <span>Knowledge Graph</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Knowledge Graph
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              Visualize and navigate your network of ideas to discover unexpected connections and insights.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                What is a Knowledge Graph?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                A Knowledge Graph is a visual representation of how your ideas interconnect. In Loreleaf, each note (leaf) becomes a node in your graph, with connections forming the edges between them. This network visualization reveals patterns and relationships that might otherwise remain hidden.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Unlike linear note-taking systems, a graph-based approach mirrors how our brains naturally work - through association and connection rather than rigid hierarchies or sequences.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Key Benefits
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Discover Connections</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Visualize how your ideas relate to each other and discover unexpected connections between concepts that you might not have noticed.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Navigate Intuitively</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Move through your knowledge base in a natural, intuitive way by following connections rather than rigid structures.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Identify Knowledge Hubs</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Spot which ideas serve as central hubs in your thinking, connecting many other concepts and serving as foundational knowledge.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">See Knowledge Gaps</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Identify isolated nodes or clusters that could benefit from being connected to your broader knowledge network.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              How Loreleaf's Knowledge Graph Works
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
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Automatic Link Creation</h4>
                    <p className="text-gray-600 dark:text-gray-300">When you link two leaves together, the connection is automatically reflected in your knowledge graph, making it effortless to build your network.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Interactive Visualization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Explore your knowledge graph with an interactive interface that lets you zoom, pan, and click on nodes to view the corresponding leaves.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tag-Based Filtering</h4>
                    <p className="text-gray-600 dark:text-gray-300">Filter your graph view based on tags to focus on specific areas of your knowledge or explore themed subsets of your notes.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Graph Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-300">View statistics and insights about your knowledge graph, such as most connected notes, central concepts, and isolated areas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-xl mb-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/10 rounded-xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Explore Your Mind's Connections
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-emerald-600 dark:text-emerald-400 text-4xl font-bold mb-2">1</div>
                    <p className="text-gray-700 dark:text-gray-300">Create atomic notes with your ideas</p>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-emerald-600 dark:text-emerald-400 text-4xl font-bold mb-2">2</div>
                    <p className="text-gray-700 dark:text-gray-300">Connect related notes with bidirectional links</p>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-emerald-600 dark:text-emerald-400 text-4xl font-bold mb-2">3</div>
                    <p className="text-gray-700 dark:text-gray-300">Watch your knowledge graph emerge organically</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  The more you add to your knowledge base, the richer and more insightful your graph becomes, revealing relationships you might never have consciously recognized.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-xl border border-emerald-100 dark:border-emerald-900/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
                Ready to Map Your Knowledge?
              </h3>
              <p className="text-emerald-700 dark:text-emerald-400 mb-6">
                Start building your personal knowledge graph today. Loreleaf makes it easy to create connections between your ideas and visualize them in a way that sparks new insights.
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