'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import leafService, { Leaf } from '@/services/apiService';
import LeafEditor from '@/components/LeafEditor';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function LeafPage() {
  const params = useParams();
  const leafId = params.id as string;
  
  const [leaf, setLeaf] = useState<Leaf | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaf = async () => {
      try {
        setLoading(true);
        const data = await leafService.getLeaf(leafId);
        setLeaf(data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch leaf');
      } finally {
        setLoading(false);
      }
    };

    if (leafId) {
      fetchLeaf();
    }
  }, [leafId]);

  return (
    <ProtectedRoute>
      {loading ? (
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-t-2 border-b-2 border-emerald-500 animate-spin"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">🍃</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading leaf content...</p>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-fade-in">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LeafEditor leafId={leafId} existingLeaf={leaf || undefined} />
      )}
    </ProtectedRoute>
  );
} 