'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import leafService, { Leaf } from '@/services/apiService';

export default function TimelinePage() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [animateItems, setAnimateItems] = useState(false);
  const [timelineGroups, setTimelineGroups] = useState<Record<string, Leaf[]>>({});
  
  const router = useRouter();

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        setLoading(true);
        const data = await leafService.getLeaves();
        setLeaves(data);
        
        // Group leaves by month
        const groups: Record<string, Leaf[]> = {};
        data.forEach(leaf => {
          const date = new Date(leaf.createdAt);
          const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
          if (!groups[monthYear]) {
            groups[monthYear] = [];
          }
          groups[monthYear].push(leaf);
        });
        
        // Sort groups by date (newest first)
        const sortedGroups: Record<string, Leaf[]> = {};
        Object.keys(groups)
          .sort((a, b) => {
            const dateA = new Date(groups[a][0].createdAt);
            const dateB = new Date(groups[b][0].createdAt);
            return dateB.getTime() - dateA.getTime();
          })
          .forEach(key => {
            sortedGroups[key] = groups[key].sort((a, b) => 
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          });
        
        setTimelineGroups(sortedGroups);
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
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <ProtectedRoute>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Timeline Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-8 shadow-xl mb-8 transform transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyIDB2NmMwIDYgNiA2IDYgMHYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bS0xMi0xMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTEyLTI0djZjMCA2IDYgNiA2IDB2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Timeline View</h1>
                <p className="text-emerald-100">
                  Track the evolution of your thoughts chronologically
                </p>
              </div>
              <div className="flex gap-3">
                <Link 
                  href="/dashboard" 
                  className="bg-white/90 text-emerald-700 hover:bg-white py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:shadow-emerald-900/20 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Dashboard
                </Link>
                <Link 
                  href="/leaf/new" 
                  className="bg-white text-emerald-700 hover:bg-emerald-50 py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:scale-105 hover:shadow-emerald-900/20 flex items-center group"
                >
                  <span className="mr-2">+</span>
                  <span>New Leaf</span>
                </Link>
              </div>
            </div>
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

          {/* Loading State */}
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
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your knowledge timeline...</p>
            </div>
          ) : leaves.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg text-center max-w-2xl mx-auto animate-fade-in">
              <div className="inline-block p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
                <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your timeline is empty</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Create some leaves to start building your knowledge timeline.
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
            <div className={`transition-all duration-500 ${animateItems ? 'opacity-100' : 'opacity-0'}`}>
              {/* Timeline */}
              <div className="relative border-l-2 border-emerald-500 dark:border-emerald-700 ml-4 md:ml-8 pl-6 md:pl-10">
                {Object.entries(timelineGroups).map(([monthYear, leaves], groupIndex) => (
                  <div key={monthYear} className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 -ml-14 bg-white dark:bg-gray-800 inline-block px-4 py-2 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      {monthYear}
                    </h2>
                    
                    <div className="space-y-8">
                      {leaves.map((leaf, index) => (
                        <div 
                          key={leaf.id} 
                          className={`relative transition-all duration-300 transform ${
                            animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                          }`}
                          style={{ transitionDelay: `${(groupIndex * 100) + (index * 50)}ms` }}
                        >
                          {/* Timeline dot */}
                          <div className="absolute -left-[46px] mt-1">
                            <div className="w-7 h-7 rounded-full bg-emerald-500 dark:bg-emerald-700 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                              <span className="text-xs text-white">{index + 1}</span>
                            </div>
                          </div>
                          
                          {/* Content card */}
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="p-6">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                {formatDate(leaf.createdAt)}
                              </div>
                              <Link 
                                href={`/leaf/${leaf.id}`}
                                className="block group"
                              >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                  {leaf.title}
                                </h3>
                              </Link>
                              
                              {/* Tags */}
                              {leaf.tags && leaf.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {leaf.tags.map(tag => (
                                    <span 
                                      key={tag} 
                                      className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              {/* Preview of content */}
                              <div className="mt-3 text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                {leaf.content.substring(0, 150)}...
                              </div>
                              
                              <div className="mt-4 flex justify-between items-center">
                                <Link 
                                  href={`/leaf/${leaf.id}`}
                                  className="text-emerald-600 dark:text-emerald-400 font-medium text-sm hover:underline flex items-center"
                                >
                                  View details
                                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </Link>
                                
                                {/* Connection info */}
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {leaf.forwardLinks && (
                                    <span className="inline-flex items-center">
                                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                      </svg>
                                      {leaf.forwardLinks.length} connection{leaf.forwardLinks.length !== 1 ? 's' : ''}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
} 