import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Dynamic Background and Animations */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl animate-float-delay-1"></div>
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-200 rounded-full filter blur-3xl animate-float-delay-2"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDgwNzUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyIDB2NmMwIDYgNiA2IDYgMHYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bS0xMi0xMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTEyLTI0djZjMCA2IDYgNiA2IDB2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
              <div className="bg-white/5 backdrop-blur-lg p-2 inline-block rounded-full text-white font-medium text-sm px-4 mb-6 animate-slide-up">
                🚀 A new way to organize your thoughts
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Grow your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">knowledge</span> organically
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                A personal knowledge management system inspired by Zettelkasten, Roam Research, and digital gardens.
                Connect your thoughts, build a knowledge graph, and watch your ideas grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <Link 
                  href="/register" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-emerald-500/30 hover:translate-y-[-2px] transition-all duration-300 text-center group"
                >
                  <span className="flex items-center justify-center">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  href="/login" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium py-3 px-8 rounded-full transition-all duration-300 text-center"
                >
                  Sign In
                </Link>
              </div>
              
              <div className="mt-12 flex items-center text-emerald-100/80 text-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required • Free personal plan
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-full max-w-lg h-80 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-300/20 backdrop-blur-xl rounded-2xl transform rotate-2 scale-[1.03]"></div>
                <div className="absolute inset-0 glass-effect rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                  <div className="absolute -right-4 -top-12 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-2xl"></div>
                  <div className="flex items-center border-b border-white/10 px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 text-white/60 text-sm">Loreleaf - Knowledge Graph</div>
                  </div>
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="relative w-48 h-48 mx-auto mb-4">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-36 h-36 rounded-full bg-emerald-500/20 animate-pulse"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin-slow">
                              <svg width="160" height="160" viewBox="0 0 160 160" className="text-emerald-400">
                                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <circle cx="80" cy="80" r="60" stroke="currentColor" strokeOpacity="0.2" />
                                  {[...Array(10)].map((_, i) => (
                                    <g key={i} transform={`rotate(${i * 36} 80 80)`}>
                                      <circle cx="136" cy="80" r="4" fill="currentColor" />
                                      <line x1="100" y1="80" x2="125" y2="80" />
                                    </g>
                                  ))}
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl">🍃</span>
                          </div>
                        </div>
                        <p className="text-white/70">Your knowledge graph is growing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Features Section with Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Features designed for <span className="text-emerald-600 dark:text-emerald-400">thoughtful</span> minds
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our powerful tools help you capture, connect, and cultivate your ideas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-all duration-300 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 h-full z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Atomic Notes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Create small, focused notes called leaves. Each leaf contains a single idea, making your knowledge system flexible and interconnected.
                </p>
                <Link href="/register" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative group mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-all duration-300 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 h-full z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Knowledge Graph</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Connect your thoughts with bidirectional links. The system automatically creates backlinks, helping you see relationships between ideas.
                </p>
                <Link href="/register" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative group mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-all duration-300 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 h-full z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Discover Insights</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Search, filter, and analyze your personal knowledge base. Find patterns and connections you never knew existed.
                </p>
                <Link href="/register" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wLTMwdjZoNnYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0tMTIgMHY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyLTEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptMTItMjR2NmMwIDYgNiA2IDYgMHYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to transform your thinking?
            </h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Join thousands of thinkers, researchers, and creators who use Loreleaf to organize their thoughts and generate new insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="bg-white text-emerald-700 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-emerald-800/30 hover:bg-gray-100 transition-all duration-300 text-center"
              >
                Get Started for Free
              </Link>
              <Link 
                href="/login" 
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300 text-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
