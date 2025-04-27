'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, BookOpen, Network, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function HomePage() {
  const { user } = useAuth();
  
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm">
                Your second brain, reimagined
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="gradient-text">Loreleaf</span> - Knowledge Management
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Create, connect, and explore your ideas with a beautiful knowledge graph.
                The Zettelkasten method, reimagined for the modern age.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-6"
            >
              {user ? (
                <Link href="/dashboard">
                  <Button variant="gradient" size="lg" className="shadow-lg group">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/register">
                    <Button variant="gradient" size="lg" className="shadow-lg group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" size="lg">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features that <span className="gradient-text">empower</span> your thinking
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Loreleaf combines the best of note-taking, knowledge management, and visual thinking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm"
            >
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Markdown Notes</h3>
              <p className="text-muted-foreground">
                Create richly formatted notes with Markdown. Simple, flexible, and powerful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm"
            >
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Knowledge Graph</h3>
              <p className="text-muted-foreground">
                Visualize connections between your ideas. Discover patterns and insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm"
            >
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zettelkasten Method</h3>
              <p className="text-muted-foreground">
                Organize ideas with the proven Zettelkasten method. Build a network of knowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-background p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to transform your <span className="gradient-text">knowledge</span>?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Join Loreleaf today and start building your personal knowledge system.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                {user ? (
                  <Link href="/dashboard">
                    <Button variant="gradient" size="lg" className="shadow-lg group">
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/register">
                      <Button variant="gradient" size="lg" className="shadow-lg group">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button variant="outline" size="lg">
                        Login
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
