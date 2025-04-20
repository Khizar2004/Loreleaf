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
  linkedLeafIds: z.array(z.string().uuid()).optional().default([]),
});

export const updateLeafSchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  content: z.string().optional(),
  tags: z.array(z.string()).optional(),
  linkedLeafIds: z.array(z.string().uuid()).optional(),
});

// Link Schemas
export const createLinkSchema = z.object({
  sourceLeafId: z.string().uuid(),
  targetLeafId: z.string().uuid(),
});

// Filter Schemas
export const leafFilterSchema = z.object({
  tags: z.array(z.string()).optional(),
  search: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
}); 