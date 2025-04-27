'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactMarkdown from 'react-markdown';
import leafService, { Leaf } from '@/services/apiService';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Check, ChevronLeft, Eye, EyeOff, Save, Tag, Link as LinkIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const titleValue = watch('title');

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => router.push('/dashboard')}
            className="mr-2"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight gradient-text">
            {isEditMode ? 'Edit Leaf' : 'Create New Leaf'}
          </h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPreview(!preview)}
          className="gap-1.5"
        >
          {preview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {preview ? 'Edit' : 'Preview'}
        </Button>
      </header>

      <AnimatePresence initial={false} mode="wait">
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false} mode="wait">
        {preview ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="prose max-w-none p-6">
                  <h1>{titleValue || 'Untitled Leaf'}</h1>
                  <ReactMarkdown>{contentValue || 'No content yet'}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="editor"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  {...register('title')}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.title && "border-destructive focus-visible:ring-destructive"
                  )}
                  placeholder="Enter a title for your leaf"
                />
                {errors.title && (
                  <p className="text-sm text-destructive">{errors.title.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Content (Markdown)
                </label>
                <textarea
                  id="content"
                  {...register('content')}
                  rows={12}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                  placeholder="Write your content in Markdown..."
                />
                {errors.content && (
                  <p className="text-sm text-destructive">{errors.content.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium leading-none flex items-center gap-1.5">
                  <Tag className="h-4 w-4" /> Tags (comma-separated)
                </label>
                <input
                  id="tags"
                  type="text"
                  {...register('tags')}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="tech, notes, ideas"
                />
                {errors.tags && (
                  <p className="text-sm text-destructive">{errors.tags.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none flex items-center gap-1.5">
                  <LinkIcon className="h-4 w-4" /> Link to Other Leaves
                </label>
                {availableLeaves.length === 0 ? (
                  <p className="text-sm text-muted-foreground italic">
                    No other leaves available to link.
                  </p>
                ) : (
                  <div className="max-h-60 overflow-y-auto rounded-md border p-2">
                    {availableLeaves.map((leaf) => (
                      <div key={leaf.id} className="flex items-center my-1.5 px-2">
                        <button
                          type="button"
                          onClick={() => handleLinkToggle(leaf.id)}
                          className={cn(
                            "flex h-8 w-full items-center gap-2 rounded-md px-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                            selectedLinks.includes(leaf.id) && "bg-primary/10"
                          )}
                        >
                          <div className="flex h-4 w-4 items-center justify-center rounded-sm border border-primary/40">
                            {selectedLinks.includes(leaf.id) && (
                              <Check className="h-3 w-3 text-primary" />
                            )}
                          </div>
                          <span className="truncate">{leaf.title}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                  className="flex items-center gap-1.5"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="gradient"
                  disabled={loading}
                  className="gap-1.5 shadow-md"
                >
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : isEditMode ? 'Update Leaf' : 'Create Leaf'}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LeafEditor; 