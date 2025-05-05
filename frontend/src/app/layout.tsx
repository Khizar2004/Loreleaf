import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Loreleaf - Personal Knowledge Management",
  description: "A personal knowledge management system inspired by Zettelkasten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
        {children}
            </main>
            <footer className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white pt-16 pb-12 border-t border-gray-800 relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTIyMzMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em0wLTMwdjZoNnYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0tMTIgMHY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyLTEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptMTItMjR2NmMwIDYgNiA2IDYgMHYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
              
              {/* Decorative elements */}
              <div className="absolute left-10 top-10 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
              <div className="absolute right-10 bottom-10 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
              
              <div className="container mx-auto px-4 relative z-10">
                {/* Top section with divider */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-gray-800/50">
                  <div className="flex-shrink-0">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-2">🍃</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Loreleaf</span>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                      Connect your thoughts, build a knowledge graph, and watch your ideas grow.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                    <div>
                      <h3 className="text-emerald-400 font-semibold mb-4 text-sm uppercase tracking-wider">Features</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/about/atomic-notes" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-emerald-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Atomic Notes
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/knowledge-graph" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-emerald-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Knowledge Graph
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/discover-insights" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-emerald-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Discover Insights
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-emerald-400 font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-emerald-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/login" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-emerald-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Sign In
                          </Link>
                        </li>
                        <li>
                          <Link href="/register" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-emerald-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Get Started
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Bottom copyright section */}
                <div className="text-center">
                  <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Loreleaf. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
