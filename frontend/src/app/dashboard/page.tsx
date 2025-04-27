'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProtectedRoute from '@/components/ProtectedRoute';
import leafService, { Leaf, FilterParams } from '@/services/apiService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, PlusCircle, Trash2, Edit, Tag, Calendar } from 'lucide-react';
import { formatDate, truncateText } from '@/lib/utils';

export default function DashboardPage() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({});
  const [searchTerm, setSearchTerm] = useState('');
  
  const router = useRouter();

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        setLoading(true);
        const data = await leafService.getLeaves(filters);
        setLeaves(data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch leaves');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, [filters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({ ...prev, search: searchTerm }));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this leaf?')) {
      try {
        await leafService.deleteLeaf(id);
        setLeaves(leaves.filter(leaf => leaf.id !== id));
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to delete leaf');
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <ProtectedRoute>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Your Leaves</h1>
          <Link href="/leaf/new">
            <Button variant="gradient" size="sm" className="shadow-md flex items-center gap-1">
              <PlusCircle className="h-4 w-4" />
              <span>New Leaf</span>
            </Button>
          </Link>
        </header>

        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search leaves..."
            className="w-full rounded-lg border bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <Button 
            type="submit" 
            size="sm" 
            variant="ghost" 
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7"
          >
            Search
          </Button>
        </form>

        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive"
          >
            {error}
          </motion.div>
        )}

        {loading ? (
          <div className="flex h-52 items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent"
            />
          </div>
        ) : leaves.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex h-52 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center"
          >
            <div className="rounded-full bg-primary/10 p-3">
              <PlusCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-medium">No leaves found</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              Create your first leaf to start organizing your knowledge
            </p>
            <Link href="/leaf/new">
              <Button variant="gradient" size="sm">
                Create your first leaf
              </Button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {leaves.map((leaf) => (
              <motion.div key={leaf.id} variants={item} className="leaf-card">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="truncate text-xl">{leaf.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-muted-foreground line-clamp-3">
                      {truncateText(leaf.content, 150)}
                    </p>
                    
                    {leaf.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {leaf.tags.map(tag => (
                          <div 
                            key={tag}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <time dateTime={leaf.updatedAt.toString()}>
                        {formatDate(leaf.updatedAt)}
                      </time>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-destructive hover:text-destructive/80"
                      onClick={() => handleDelete(leaf.id)}
                    >
                      <Trash2 className="mr-1 h-3.5 w-3.5" />
                      Delete
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-primary hover:text-primary/80"
                      onClick={() => router.push(`/leaf/${leaf.id}`)}
                    >
                      <Edit className="mr-1 h-3.5 w-3.5" />
                      View & Edit
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </ProtectedRoute>
  );
} 