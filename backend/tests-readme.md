# Loreleaf Backend Testing Documentation

This document outlines my testing approach for Loreleaf's backend API and services.

## Testing Technologies

I've built a robust testing infrastructure using:

- **Jest**: As the primary testing framework (v29.7.0)
- **ts-jest**: For TypeScript integration (v29.3.2)
- **supertest**: For testing HTTP endpoints (v7.1.0)

## Test Structure

Tests are organized in the `src/__tests__` directory, mirroring the main codebase structure:

```
src/
└── __tests__/
    ├── controllers/
    │   ├── authController.test.ts  # Authentication API tests (login, register, etc.)
    │   └── graphController.test.ts # Knowledge graph API tests
    └── middleware/
        └── authMiddleware.test.ts  # JWT authentication middleware tests
```

## Running Tests

To run the complete test suite:

```bash
npm test
```

For development with auto-reloading:

```bash
npm run test:watch
```

To generate coverage reports:

```bash
npm run test:coverage
```

## Testing Focus Areas

My tests thoroughly cover these critical backend components:

### 1. Authentication Controller

The authController tests verify:
- User registration with proper validation
- Login with JWT token generation
- Proper error handling for invalid credentials
- User info retrieval for authenticated users

### 2. Graph Controller

The graphController tests ensure:
- Knowledge graph data is properly returned
- Analytics data is correctly aggregated
- Only authorized users can access graph data

### 3. Auth Middleware

The middleware tests confirm:
- Routes are properly protected from unauthorized access
- Valid JWT tokens grant access to protected routes
- Invalid or expired tokens are rejected
- Proper error responses are sent for authentication failures

## Mocking Strategy

To isolate units for testing, I use:

- Prisma client mocks for database operations
- JWT mocks for token generation and verification
- Express request/response mocks

Example from authController tests:

```typescript
describe('loginUser', () => {
  it('should return a token when valid credentials are provided', async () => {
    // Mock Prisma to return a matching user
    prismaMock.user.findUnique.mockResolvedValue({
      id: 1,
      email: 'test@example.com',
      password: hashedPassword,
      name: 'Test User',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    // Mock bcrypt to return true for password comparison
    bcryptMock.compare.mockResolvedValue(true);
    
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
```

## Development Workflow

When adding new features to Loreleaf's backend, I follow this process:

1. Write test cases first that define expected behavior
2. Implement the API endpoints or services
3. Run tests to verify implementation
4. Refactor for optimization while maintaining test coverage
