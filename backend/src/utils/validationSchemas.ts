import { z } from 'zod';

// Auth Schemas
export const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long'),
  name: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

// Leaf Schemas
export const createLeafSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string(),
  tags: z.array(z.string()).optional().default([]),
  linkedLeafIds: z.array(z.string()).optional().default([]),
});

export const updateLeafSchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  content: z.string().optional(),
  tags: z.array(z.string()).optional(),
  linkedLeafIds: z.array(z.string()).optional(),
});

// Link Schemas
export const createLinkSchema = z.object({
  sourceLeafId: z.string().uuid(),
  targetLeafId: z.string().uuid(),
});

// Leaf Link Schema
export const linkLeafSchema = z.object({
  targetLeafIds: z.array(z.string()).min(1, 'At least one target leaf is required'),
});

// Filter Schemas
export const leafFilterSchema = z.object({
  tags: z.array(z.string()).optional(),
  search: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

// Collection Schemas
export const createCollectionSchema = z.object({
  name: z.string().min(1, 'Collection name is required'),
  tags: z.array(z.string()).optional().default([]),
  searchTerm: z.string().optional(),
  createdAfter: z.string().optional().refine(
    (val) => !val || !isNaN(Date.parse(val)),
    { message: 'createdAfter must be a valid date string' }
  ),
  createdBefore: z.string().optional().refine(
    (val) => !val || !isNaN(Date.parse(val)),
    { message: 'createdBefore must be a valid date string' }
  ),
});

export const updateCollectionSchema = z.object({
  name: z.string().min(1, 'Collection name is required').optional(),
  tags: z.array(z.string()).optional(),
  searchTerm: z.string().optional().nullable(),
  createdAfter: z.string().optional().nullable().refine(
    (val) => !val || !isNaN(Date.parse(val)),
    { message: 'createdAfter must be a valid date string' }
  ),
  createdBefore: z.string().optional().nullable().refine(
    (val) => !val || !isNaN(Date.parse(val)),
    { message: 'createdBefore must be a valid date string' }
  ),
}); 