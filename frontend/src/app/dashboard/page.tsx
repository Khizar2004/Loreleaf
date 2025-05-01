'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import leafService, { Leaf, FilterParams } from '@/services/apiService';

export default function DashboardPage() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [animateItems, setAnimateItems] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        setLoading(true);
        const data = await leafService.getLeaves(filters);
        setLeaves(data);
        
        // Extract all unique tags from leaves
        const tags = data.reduce((acc: string[], leaf) => {
          leaf.tags.forEach(tag => {
            if (!acc.includes(tag)) acc.push(tag);
          });
          return acc;
        }, []);
        setAllTags(tags);
        
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch leaves');
      } finally {
        setLoading(false);
        // Trigger animation for items after data loads
        setTimeout(() => setAnimateItems(true), 100);
      }
    };

    fetchLeaves();
  }, [filters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setAnimateItems(false);
    setFilters(prev => ({ ...prev, search: searchTerm }));
    setTimeout(() => setAnimateItems(true), 100);
  };

  const handleTagToggle = (tag: string) => {
    setAnimateItems(false);
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(updatedTags);
    setFilters(prev => ({ ...prev, tags: updatedTags.length ? updatedTags : undefined }));
    setTimeout(() => setAnimateItems(true), 100);
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

  const clearFilters = () => {
    setAnimateItems(false);
    setSearchTerm('');
    setSelectedTags([]);
    setFilters({});
    setTimeout(() => setAnimateItems(true), 100);
  };

  return (
    <ProtectedRoute>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-8 shadow-xl mb-8 transform transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyIDB2NmMwIDYgNiA2IDYgMHYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bS0xMi0xMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTEyLTI0djZjMCA2IDYgNiA2IDB2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Your Knowledge Garden</h1>
                <p className="text-emerald-100">
                  {leaves.length} {leaves.length === 1 ? 'leaf' : 'leaves'} in your collection
                </p>
              </div>
              <Link 
                href="/leaf/new" 
                className="bg-white text-emerald-700 hover:bg-emerald-50 py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:scale-105 hover:shadow-emerald-900/20 flex items-center group"
              >
                <span className="mr-2">+</span>
                <span>New Leaf</span>
                <svg className="w-0 h-5 overflow-hidden transition-all duration-300 group-hover:w-5 ml-0 group-hover:ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Search and Filter Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search your leaves..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Search
              </button>
              {(selectedTags.length > 0 || searchTerm) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Clear Filters
                </button>
              )}
            </form>
            
            {allTags.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Filter by Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`${
                        selectedTags.includes(tag)
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                      } px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-fade-in">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            </div>
          )}

          {/* Content Area */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-emerald-500 animate-spin"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">🍃</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your knowledge garden...</p>
            </div>
          ) : leaves.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg text-center max-w-2xl mx-auto animate-fade-in">
              <div className="inline-block p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
                <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your garden is empty</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Time to plant your first thought! Create your first leaf and start growing your knowledge garden.
              </p>
              <Link 
                href="/leaf/new" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-emerald-500/30 hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create your first leaf
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaves.map((leaf, index) => (
                <div 
                  key={leaf.id} 
                  className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-all duration-500 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 ${
                    animateItems 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 truncate flex-grow">
                        {leaf.title}
                      </h3>
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-2 py-1 rounded-full">
                        {new Date(leaf.updatedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {leaf.content}
                    </p>
                    {leaf.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {leaf.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Link indicators for the knowledge graph */}
                    {(leaf.forwardLinks?.length || leaf.backLinks?.length) && (
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        <span>
                          {(leaf.forwardLinks?.length || 0) + (leaf.backLinks?.length || 0)} connection{(leaf.forwardLinks?.length || 0) + (leaf.backLinks?.length || 0) !== 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700 px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800/80">
                    <button
                      onClick={() => handleDelete(leaf.id)}
                      className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                    <button
                      onClick={() => router.push(`/leaf/${leaf.id}`)}
                      className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 flex items-center"
                    >
                      <span>View & Edit</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
} 