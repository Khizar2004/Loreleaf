# Loreleaf Backend Testing Documentation

This document outlines my testing approach for Loreleaf's backend API and services.

## Testing Technologies

I've built a robust testing infrastructure using:

- **Jest**: As the primary testing framework
- **ts-jest**: For TypeScript integration
- **supertest**: For testing HTTP endpoints

## Test Structure

Tests are organized in the `src/__tests__` directory, mirroring the main codebase structure:

```
src/
└── __tests__/
    ├── controllers/
    │   ├── authController.test.ts  # Authentication API endpoints
    │   └── graphController.test.ts # Knowledge graph API endpoints
    └── middleware/
        └── authMiddleware.test.ts  # Authentication middleware
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

My tests thoroughly cover these critical components:

### 1. API Controllers

The controller tests verify:
- Proper request handling and validation
- Correct response formatting and status codes
- Error handling and appropriate error responses
- Business logic implementation

### 2. Authentication

The auth tests ensure:
- User registration works correctly
- Login generates valid JWT tokens
- Protected routes reject unauthorized access
- Password hashing and verification is secure

### 3. Middleware

Middleware tests confirm:
- JWT validation properly protects routes
- Error handling for invalid/expired tokens
- Request processing and modification works as expected

## Mocking Strategy

To isolate units for testing, I use:

- Prisma client mocks for database operations
- JWT mocks for authentication testing
- Request/response mocks for controller testing

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

## CI Integration

These tests run automatically in the CI pipeline before deployment to ensure:
- No regressions are introduced
- Code quality remains high
- Backend services remain reliable and secure 