# Loreleaf Frontend Testing Documentation

This document outlines the testing approach for Loreleaf's frontend application.

## Testing Framework & Tools

I've built a comprehensive testing suite using:

- **Jest**: As the test runner and assertion library
- **React Testing Library**: For testing React components with a user-centric approach
- **jest-environment-jsdom**: For simulating a browser environment

## Test Structure

Tests are organized in the `src/__tests__` directory and mirror the application structure:

```
src/
└── __tests__/
    ├── components/
    │   ├── Navbar.test.tsx      # Tests for navigation functionality
    │   └── ProtectedRoute.test.tsx # Tests for auth-protected routes
    └── context/
        └── AuthContext.test.tsx # Tests for authentication state management
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

My frontend testing strategy follows these key principles:

### 1. Component Testing

I test components for:
- Correct rendering of UI elements
- Proper behavior when props change
- Event handling (clicks, form submissions, etc.)
- Conditional rendering based on state

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
- Integration with protected components

### 3. Navigation & Protection

The ProtectedRoute tests ensure:
- Authenticated users can access protected routes
- Unauthenticated users are redirected to login
- Loading states are handled properly

## Mocking Strategy

I use Jest's mocking capabilities to isolate components for testing:
- Next.js router and navigation hooks
- Authentication context
- API service calls

## Best Practices I Follow

1. **User-centric testing**: I focus on testing from the user's perspective rather than implementation details

2. **Behavior over implementation**: Tests verify what the component does, not how it's built

3. **Isolated tests**: Each test runs independently without relying on state from previous tests

4. **Comprehensive coverage**: I aim to test all critical user flows and edge cases

## Maintaining and Extending Tests

When adding new features, I follow this workflow:

1. Write tests that define the expected behavior
2. Implement the feature to satisfy the tests
3. Refactor while ensuring tests continue to pass

## Accessibility Focus

I ensure Loreleaf's components are accessible by testing:
- Proper ARIA roles and semantic HTML
- Keyboard navigation
- Screen reader compatibility
- Color contrast and visual accessibility 