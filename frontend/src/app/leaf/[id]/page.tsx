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
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : (
        <LeafEditor leafId={leafId} existingLeaf={leaf || undefined} />
      )}
    </ProtectedRoute>
  );
} 