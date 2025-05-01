# Backend Testing Documentation

This document outlines the testing approach for the Loreleaf backend.

## Testing Framework

We use Jest as our testing framework, along with the following additional tools:

- **ts-jest**: For TypeScript support
- **supertest**: For API endpoint testing

## Test Structure

Tests are organized in the `src/__tests__` directory and follow a structure that mirrors the main application:

```
src/
└── __tests__/
    ├── controllers/
    │   ├── authController.test.ts
    │   └── graphController.test.ts
    ├── middleware/
    │   └── authMiddleware.test.ts
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

## Test Coverage

The test suite aims to cover:

1. **Controllers** - Testing API endpoints for proper request handling, response formatting, and error handling
2. **Middleware** - Ensuring middleware functions like authentication are working correctly
3. **Services** - Testing business logic functionality
4. **Utils** - Testing utility functions

## Mocking Strategy

We use Jest's mocking capabilities to isolate the components being tested:

- Database interactions are mocked via the Prisma client
- External services are mocked with Jest mock functions
- Authentication is mocked using JWT token verification mocks

## Example Test

Here's an example of how we test the authentication controller:

```typescript
describe('Auth Controller', () => {
  // Test setup with mocks
  
  describe('loginUser', () => {
    it('should login a user successfully', async () => {
      // Arrange - setup test data
      
      // Act - call the controller function
      
      // Assert - verify the results
    });
    
    it('should handle invalid credentials', async () => {
      // Test error cases
    });
  });
});
```

## Adding New Tests

When adding new features, please follow this test-driven approach:

1. Write tests that define the expected behavior
2. Implement the feature to satisfy the tests
3. Refactor while ensuring tests still pass

## CI Integration

These tests are integrated into the CI pipeline and must pass before merging. 