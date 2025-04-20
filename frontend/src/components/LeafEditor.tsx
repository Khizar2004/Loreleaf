'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactMarkdown from 'react-markdown';
import leafService, { Leaf } from '@/services/apiService';
import { useRouter } from 'next/navigation';

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
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableLeaves, setAvailableLeaves] = useState<Leaf[]>([]);
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  
  const router = useRouter();
  const isEditMode = !!leafId;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeafFormData>({
    resolver: zodResolver(leafSchema),
    defaultValues: {
      title: existingLeaf?.title || '',
      content: existingLeaf?.content || '',
      tags: existingLeaf?.tags.join(', ') || '',
    },
  });

  const contentValue = watch('content');

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

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {isEditMode ? 'Edit Leaf' : 'Create New Leaf'}
        </h1>
        <button
          type="button"
          onClick={() => setPreview(!preview)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition"
        >
          {preview ? 'Edit' : 'Preview'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {preview ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">{watch('title')}</h2>
          <div className="prose max-w-none">
            <ReactMarkdown>{contentValue}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              {...register('title')}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter a title for your leaf"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Content (Markdown)
            </label>
            <textarea
              id="content"
              {...register('content')}
              rows={10}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              placeholder="Write your content in Markdown..."
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">
              Tags (comma-separated)
            </label>
            <input
              id="tags"
              type="text"
              {...register('tags')}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="tech, notes, ideas"
            />
            {errors.tags && (
              <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Link to Other Leaves
            </label>
            {availableLeaves.length === 0 ? (
              <p className="text-gray-500 italic">
                No other leaves available to link.
              </p>
            ) : (
              <div className="max-h-60 overflow-y-auto border rounded-md p-2">
                {availableLeaves.map((leaf) => (
                  <div key={leaf.id} className="flex items-center p-2 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      id={`leaf-${leaf.id}`}
                      checked={selectedLinks.includes(leaf.id)}
                      onChange={() => handleLinkToggle(leaf.id)}
                      className="mr-2"
                    />
                    <label htmlFor={`leaf-${leaf.id}`} className="cursor-pointer">
                      {leaf.title}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : isEditMode ? 'Update Leaf' : 'Create Leaf'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LeafEditor; 