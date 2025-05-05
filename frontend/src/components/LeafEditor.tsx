'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactMarkdown from 'react-markdown';
import leafService, { Leaf } from '@/services/apiService';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define validation schema
const leafSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string(),
  tags: z.string().optional(),
});

type LeafFormData = z.infer<typeof leafSchema>;

interface LeafEditorProps {
  leafId?: string;
  existingLeaf?: Leaf;
}

const LeafEditor: React.FC<LeafEditorProps> = ({ leafId, existingLeaf }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableLeaves, setAvailableLeaves] = useState<Leaf[]>([]);
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  const [searchLeaves, setSearchLeaves] = useState('');
  const [animateIn, setAnimateIn] = useState(false);
  
  const router = useRouter();
  const isEditMode = !!leafId;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<LeafFormData>({
    resolver: zodResolver(leafSchema),
    defaultValues: {
      title: existingLeaf?.title || '',
      content: existingLeaf?.content || '',
      tags: existingLeaf?.tags.join(', ') || '',
    },
  });

  const contentValue = watch('content');
  const titleValue = watch('title');

  useEffect(() => {
    // Trigger animation after mounting
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Fetch available leaves for linking
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const leaves = await leafService.getLeaves();
        // Filter out the current leaf
        setAvailableLeaves(
          leaves.filter((leaf) => leaf.id !== leafId)
        );

        // If editing, set initial selected links
        if (existingLeaf && existingLeaf.forwardLinks) {
          setSelectedLinks(
            existingLeaf.forwardLinks.map((link) => link.id)
          );
        }
      } catch (error) {
        console.error('Failed to fetch available leaves:', error);
      }
    };

    fetchLeaves();
  }, [leafId, existingLeaf]);

  const handleLinkToggle = (leafId: string) => {
    setSelectedLinks((prev) =>
      prev.includes(leafId)
        ? prev.filter((id) => id !== leafId)
        : [...prev, leafId]
    );
  };

  const onSubmit = async (data: LeafFormData) => {
    try {
      setLoading(true);
      setError(null);

      // Convert comma-separated tags to array
      const tagsArray = data.tags
        ? data.tags.split(',').map((tag) => tag.trim()).filter(Boolean)
        : [];

      if (isEditMode && leafId) {
        await leafService.updateLeaf(leafId, {
          title: data.title,
          content: data.content,
          tags: tagsArray,
          linkedLeafIds: selectedLinks,
        });
      } else {
        await leafService.createLeaf({
          title: data.title,
          content: data.content,
          tags: tagsArray,
          linkedLeafIds: selectedLinks,
        });
      }

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save leaf');
    } finally {
      setLoading(false);
    }
  };

  // Filter available leaves based on search
  const filteredLeaves = availableLeaves.filter(leaf => 
    leaf.title.toLowerCase().includes(searchLeaves.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-500 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-8 shadow-xl mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDYgNiA2IDYgMHYtNmgtNnptLTEyIDB2NmMwIDYgNiA2IDYgMHYtNmgtNnptMCAxMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bS0xMi0xMnY2YzAgNiA2IDYgNiAwdi02aC02em0wIDEydjZjMCA2IDYgNiA2IDB2LTZoLTZ6bTEyLTI0djZjMCA2IDYgNiA2IDB2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {isEditMode ? 'Edit Leaf' : 'Create New Leaf'}
                </h1>
                <p className="text-emerald-100">
                  {isEditMode ? 'Update your knowledge' : 'Plant a new thought in your garden'}
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/dashboard"
                  className="bg-white/20 text-white hover:bg-white/30 py-3 px-6 rounded-full shadow-lg font-medium transition-all hover:shadow-emerald-900/20 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Dashboard
                </Link>
              </div>
            </div>
          </div>

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

          {/* Main Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Editor Section */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
                    <div className="relative">
                      <input
                        id="title"
                        type="text"
                        {...register('title')}
                        className="w-full px-0 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-xl font-semibold text-gray-800 dark:text-white placeholder-gray-400"
                        placeholder="Enter a title for your leaf..."
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <textarea
                        id="content"
                        {...register('content')}
                        rows={15}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-mono text-gray-800 placeholder-gray-400"
                        placeholder="Write your content in Markdown..."
                      />
                      {errors.content && (
                        <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="tags" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Tags
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                        </div>
                        <input
                          id="tags"
                          type="text"
                          {...register('tags')}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder="tech, notes, ideas (comma-separated)"
                        />
                      </div>
                      {errors.tags && (
                        <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => router.push('/dashboard')}
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 py-3 px-6 rounded-xl transition-all duration-300 flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading || (!isDirty && !selectedLinks.length)}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-emerald-500/30 hover:translate-y-[-2px] transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Saving...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {isEditMode ? 'Update Leaf' : 'Create Leaf'}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Editing Tips */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  Editing Tips
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Use Markdown to format your content
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Add tags separated by commas
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Link to other leaves to build your knowledge graph
                  </li>
                </ul>
              </div>
              
              {/* Connected Leaves */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800/80">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Connect Leaves
                  </h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={searchLeaves}
                        onChange={(e) => setSearchLeaves(e.target.value)}
                        placeholder="Search leaves..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  {availableLeaves.length === 0 ? (
                    <div className="text-center py-6">
                      <div className="inline-block p-3 bg-gray-100 dark:bg-gray-700 rounded-full mb-3">
                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        No other leaves available to link.
                      </p>
                    </div>
                  ) : filteredLeaves.length === 0 ? (
                    <div className="text-center py-6">
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        No leaves match your search.
                      </p>
                    </div>
                  ) : (
                    <div className="max-h-80 overflow-y-auto pr-2 space-y-2">
                      {filteredLeaves.map((leaf) => (
                        <div 
                          key={leaf.id} 
                          className={`${
                            selectedLinks.includes(leaf.id)
                              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700'
                          } border rounded-xl p-3 cursor-pointer transition-all duration-200`}
                          onClick={() => handleLinkToggle(leaf.id)}
                        >
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-3 flex-shrink-0 ${
                              selectedLinks.includes(leaf.id)
                                ? 'bg-emerald-500'
                                : 'border border-gray-300 dark:border-gray-600'
                            }`}>
                              {selectedLinks.includes(leaf.id) && (
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex-grow truncate">
                              <h4 className="text-sm font-medium text-gray-800 dark:text-white truncate">
                                {leaf.title}
                              </h4>
                              {leaf.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {leaf.tags.slice(0, 2).map((tag) => (
                                    <span 
                                      key={tag} 
                                      className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                  {leaf.tags.length > 2 && (
                                    <span className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                                      +{leaf.tags.length - 2}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {selectedLinks.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>{selectedLinks.length} connection{selectedLinks.length !== 1 ? 's' : ''} selected</span>
                        <button 
                          type="button"
                          onClick={() => setSelectedLinks([])}
                          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                        >
                          Clear all
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeafEditor; 