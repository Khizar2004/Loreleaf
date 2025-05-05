# Loreleaf Frontend Testing Documentation

This document outlines the testing approach for Loreleaf's frontend application.

## Testing Framework & Tools

I've built a comprehensive testing suite using:

- **Jest**: As the test runner and assertion library (v29.7.0)
- **React Testing Library**: For testing React components with a user-centric approach (v16.3.0)
- **jest-environment-jsdom**: For simulating a browser environment (v29.7.0)

## Test Structure

Tests are organized in the `src/__tests__` directory and mirror the application structure:

```
src/
└── __tests__/
    ├── components/
    │   ├── Navbar.test.tsx      # Tests navigation functionality
    │   └── ProtectedRoute.test.tsx # Tests auth-protected routes
    └── context/
        └── AuthContext.test.tsx # Tests authentication state management
```

## Running Tests

To run all tests:

```bash
npm test
```

To run tests with watch mode during development:

```bash
npm run test:watch
```

To generate a coverage report:

```bash
npm run test:coverage
```

## Testing Approach

My frontend testing strategy focuses on these key components:

### 1. Component Testing

I test the Navbar and ProtectedRoute components for:
- Correct rendering based on authentication state
- Navigation link visibility and functionality
- Proper redirection for protected content

Example from Navbar testing:
```tsx
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
```

### 2. Context Testing

For the AuthContext provider, I test:
- Initial authentication state
- Login/logout functionality
- User state persistence
- Token handling and storage

### 3. Navigation & Protection

The ProtectedRoute tests verify:
- Authenticated users can access protected routes
- Unauthenticated users are redirected to login
- Loading states are properly handled during authentication checks

## Mocking Strategy

I use Jest's mocking capabilities to isolate components:
- Next.js router (useRouter) is mocked for navigation testing
- Authentication context (useAuth) is mocked to simulate different auth states
- API service calls are mocked to avoid actual network requests

## Best Practices I Follow

1. **User-centric testing**: I focus on testing from the user's perspective rather than implementation details

2. **Behavior over implementation**: Tests verify what the component does, not how it's built

3. **Isolated tests**: Each test runs independently without relying on state from previous tests

4. **Complete test coverage**: I aim to test both successful paths and error handling

## Maintaining and Extending Tests

When adding new features, I follow this workflow:

1. Write tests that define the expected behavior
2. Implement the feature to satisfy the tests
3. Refactor while ensuring tests continue to pass

As the application grows, I'll expand test coverage to include:
- Additional components as they're developed
- More complex user flows and interactions
- Edge cases and error handling scenarios 