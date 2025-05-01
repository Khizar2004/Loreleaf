# Frontend Testing Documentation

This document outlines the testing approach for the Loreleaf frontend.

## Testing Framework

We use the following technologies for frontend testing:

- **Jest**: As the test runner and assertion library
- **React Testing Library**: For testing React components
- **jest-environment-jsdom**: For simulating a browser environment

## Test Structure

Tests are organized in the `src/__tests__` directory and follow a structure that mirrors the main application:

```
src/
└── __tests__/
    ├── components/
    │   ├── Navbar.test.tsx
    │   └── ProtectedRoute.test.tsx
    ├── context/
    │   └── AuthContext.test.tsx
    └── utils/
        └── ...
```

## Running Tests

To run all tests:

```bash
npm test
```

To run tests with watch mode (development):

```bash
npm run test:watch
```

To generate a coverage report:

```bash
npm run test:coverage
```

## Testing Approach

Our frontend testing strategy follows these principles:

### 1. Component Testing

Components are tested for:
- Correct rendering of UI elements
- Proper behavior when props change
- Event handling (clicks, form submissions, etc.)
- Conditional rendering

Example:
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

Context providers are tested for:
- Initial state
- State updates
- Methods that modify state
- Integration with components

### 3. Hook Testing

Custom hooks are tested using `renderHook` from React Testing Library:
- Initial return values
- Behavior after actions
- Side effects

### 4. Mocking Strategy

We use Jest's mocking capabilities to isolate the components being tested:
- External API calls via axios
- Next.js router
- Third-party libraries

## Best Practices

1. **Prefer user-centric tests**: Test from the user's perspective using queries like `getByRole`, `getByText` rather than implementation details.

2. **Test behavior, not implementation**: Focus on what the component does, not how it's built.

3. **Use data-testid sparingly**: Only add test IDs when no other query method works.

4. **Mock at the boundary**: Only mock external dependencies, not internal functions.

5. **Keep tests isolated**: Each test should be independent and not rely on the state from previous tests.

## Adding New Tests

When adding new features, please follow this test-driven approach:

1. Write tests that define the expected behavior
2. Implement the feature to satisfy the tests
3. Refactor while ensuring tests still pass

## Accessibility Testing

We ensure our components are accessible by:
- Using proper ARIA roles and attributes
- Testing keyboard navigation
- Ensuring screen reader compatibility 