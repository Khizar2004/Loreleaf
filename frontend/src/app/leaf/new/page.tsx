'use client';

import LeafEditor from '@/components/LeafEditor';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function NewLeafPage() {
  return (
    <ProtectedRoute>
      <LeafEditor />
    </ProtectedRoute>
  );
} 