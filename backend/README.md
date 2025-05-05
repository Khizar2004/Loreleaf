# Loreleaf Backend

This is the backend for Loreleaf, a personal knowledge management system inspired by Zettelkasten and digital gardens.

## Technologies

- Node.js with Express
- TypeScript
- PostgreSQL with Prisma ORM
- JWT Authentication
- Zod for validation

## Features

- User authentication (register/login)
- CRUD operations for Leaves (notes)
- Automatic backlinking between leaves
- Knowledge graph API
- Advanced filtering and search
- Analytics endpoints

## Quick Start

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/loreleaf?schema=public"
   JWT_SECRET="your-secret-key-here"
   JWT_EXPIRES_IN="7d"
   PORT=8000
   NODE_ENV="development"
   ```

3. Run database setup:
   ```
   npm run prisma:migrate
   npm run prisma:generate
   ```

4. Start development server:
   ```
   npm run dev
   ```

## Project Structure

```
backend/
├── src/
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Express middleware
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   ├── __tests__/         # Test files
│   └── server.ts          # Express app
├── prisma/
│   ├── schema.prisma      # Database schema
└── package.json
```

## Key API Endpoints

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and get token
- `GET /api/auth/me` - Get current user info

### Leaves
- `GET /api/leaves` - List leaves (with filtering)
- `POST /api/leaves` - Create leaf
- `GET /api/leaves/:id` - Get specific leaf
- `PUT /api/leaves/:id` - Update leaf
- `DELETE /api/leaves/:id` - Delete leaf

### Graph
- `GET /api/graph` - Get knowledge graph data
- `GET /api/graph/analytics` - Get analytics data 