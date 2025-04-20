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

  return (
    <ProtectedRoute>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Your Leaves</h1>
          <Link 
            href="/leaf/new" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md shadow transition"
          >
            New Leaf
          </Link>
        </div>

        <div className="mb-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search leaves..."
              className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md shadow transition"
            >
              Search
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : leaves.length === 0 ? (
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">You don't have any leaves yet.</p>
            <Link 
              href="/leaf/new" 
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Create your first leaf
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaves.map((leaf) => (
              <div 
                key={leaf.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                    {leaf.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {leaf.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {leaf.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {new Date(leaf.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="bg-gray-50 px-6 py-3 flex justify-between">
                  <button
                    onClick={() => handleDelete(leaf.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => router.push(`/leaf/${leaf.id}`)}
                    className="text-emerald-600 hover:text-emerald-800"
                  >
                    View & Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
} 