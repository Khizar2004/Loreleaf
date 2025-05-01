import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';

// Mock dependencies
jest.mock('@/context/AuthContext');
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

// Mock the window object for scroll events
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
});

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
});

describe('Navbar', () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render login and get started links when user is not authenticated', () => {
    // Setup
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      logout: mockLogout,
    });

    // Render
    render(<Navbar />);

    // Assert
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });

  it('should render dashboard and logout when user is authenticated', () => {
    // Setup
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: '123', email: 'test@example.com', name: 'Test User' },
      logout: mockLogout,
    });

    // Render
    render(<Navbar />);

    // Assert
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Knowledge Graph')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });

  it('should call logout when logout button is clicked', () => {
    // Setup
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: '123', email: 'test@example.com', name: 'Test User' },
      logout: mockLogout,
    });

    // Render
    render(<Navbar />);

    // Act
    fireEvent.click(screen.getByText('Logout'));

    // Assert
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  it('should add and remove scroll event listener on mount/unmount', () => {
    // Setup
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      logout: mockLogout,
    });

    // Render
    const { unmount } = render(<Navbar />);

    // Assert - check if event listener was added
    expect(mockAddEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));

    // Act - unmount component
    unmount();

    // Assert - check if event listener was removed
    expect(mockRemoveEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
}); 