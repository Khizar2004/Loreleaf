import React from 'react';
import { render, act, renderHook, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Mock dependencies
jest.mock('axios');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('AuthContext', () => {
  const mockPush = jest.fn();
  const mockAxios = axios as jest.Mocked<typeof axios>;
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    
    // Mock the initial user check
    mockAxios.get.mockRejectedValueOnce(new Error('Not authenticated'));
  });

  it('should initialize with loading state', async () => {
    // Render
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });

    // Assert initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.user).toBe(null);
    expect(result.current.error).toBe(null);

    // Wait for the initial load to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should load user data on initialization if authenticated', async () => {
    // Setup
    mockAxios.get.mockReset();
    mockAxios.get.mockResolvedValueOnce({
      data: {
        success: true,
        user: { id: 'user-123', email: 'test@example.com', name: 'Test User' },
      },
    });

    // Render
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });

    // Wait for the initial load to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Assert
    expect(result.current.user).toEqual({
      id: 'user-123',
      email: 'test@example.com',
      name: 'Test User',
    });
  });

  it('should login user successfully', async () => {
    // Setup
    mockAxios.post.mockResolvedValueOnce({
      data: {
        success: true,
        user: { id: 'user-123', email: 'test@example.com', name: 'Test User' },
      },
    });

    // Render
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });

    // Wait for the initial load to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Act
    await act(async () => {
      await result.current.login('test@example.com', 'password');
    });

    // Assert
    expect(mockAxios.post).toHaveBeenCalledWith(
      expect.stringContaining('/auth/login'),
      { email: 'test@example.com', password: 'password' },
      { withCredentials: true }
    );
    expect(result.current.user).toEqual({
      id: 'user-123',
      email: 'test@example.com',
      name: 'Test User',
    });
    expect(mockPush).toHaveBeenCalledWith('/dashboard');
  });

  it('should handle login errors', async () => {
    // Setup
    const errorResponse = {
      response: {
        data: {
          message: 'Invalid credentials',
        },
      },
    };
    
    mockAxios.post.mockRejectedValueOnce(errorResponse);

    // Render
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });

    // Wait for the initial load to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Act
    let error;
    await act(async () => {
      try {
        await result.current.login('wrong@example.com', 'wrongpassword');
      } catch (err) {
        error = err;
      }
    });

    // Assert
    expect(error).toBeDefined();
    expect(mockAxios.post).toHaveBeenCalledWith(
      expect.stringContaining('/auth/login'),
      { email: 'wrong@example.com', password: 'wrongpassword' },
      { withCredentials: true }
    );
    
    // Wait for state update
    await waitFor(() => {
      expect(result.current.error).toBe('Invalid credentials');
    });
    expect(result.current.user).toBe(null);
  });

  it('should logout user successfully', async () => {
    // Setup - first get a logged in user
    mockAxios.get.mockReset();
    mockAxios.get.mockResolvedValueOnce({
      data: {
        success: true,
        user: { id: 'user-123', email: 'test@example.com', name: 'Test User' },
      },
    });
    
    mockAxios.post.mockResolvedValueOnce({
      data: {
        success: true,
      },
    });

    // Render
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });

    // Wait for user to be loaded
    await waitFor(() => {
      expect(result.current.user).not.toBe(null);
    });

    // Act
    await act(async () => {
      await result.current.logout();
    });

    // Assert
    expect(mockAxios.post).toHaveBeenCalledWith(
      expect.stringContaining('/auth/logout'),
      {},
      { withCredentials: true }
    );
    expect(result.current.user).toBe(null);
    expect(mockPush).toHaveBeenCalledWith('/login');
  });
}); 