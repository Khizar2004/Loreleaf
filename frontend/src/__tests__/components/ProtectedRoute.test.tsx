import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

// Mock the auth context
jest.mock('@/context/AuthContext');
jest.mock('next/navigation');

describe('ProtectedRoute', () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading spinner when loading is true', () => {
    // Setup
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      loading: true,
    });

    // Render
    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    // Assert
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });

  it('should render children when user is authenticated', () => {
    // Setup
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: '123', email: 'test@example.com', name: 'Test User' },
      loading: false,
    });

    // Render
    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    // Assert
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should redirect to login when user is not authenticated', async () => {
    // Setup
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      loading: false,
    });

    // Render
    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    );

    // Assert
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/login');
    });
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });
}); 