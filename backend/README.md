# Loreleaf Backend

*For general project overview, setup, and features, see the [root README](../README.md).*

## Backend-Specific Details

### Core Technologies

- Express 5.x API
- Prisma ORM with PostgreSQL
- JWT authentication with HTTP-only cookies
- Zod for request validation

### Directory Structure

```
backend/
├── src/
│   ├── controllers/       # Request handlers (auth, leaf, graph)
│   ├── middleware/        # Express middleware (auth, validation)
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Helper functions
│   ├── __tests__/         # Test files
│   └── server.ts          # Express app entry point
├── prisma/
│   ├── schema.prisma      # Database schema
└── package.json
```

### API Documentation

#### Authentication
- `POST /api/auth/register` - Register new user
  - Body: `{ email: string, password: string, name?: string }`
- `POST /api/auth/login` - Login and get token
  - Body: `{ email: string, password: string }`
- `POST /api/auth/logout` - Logout (clear cookie)
- `GET /api/auth/me` - Get current user info

#### Leaves (Notes)
- `GET /api/leaves` - List leaves with filtering
  - Query params: `tags`, `search`, `startDate`, `endDate`
- `POST /api/leaves` - Create leaf
  - Body: `{ title: string, content: string, tags?: string[], linkedLeafIds?: string[] }`
- `GET /api/leaves/:id` - Get specific leaf
- `PUT /api/leaves/:id` - Update leaf
- `DELETE /api/leaves/:id` - Delete leaf
- `POST /api/leaves/:id/link` - Link leaf to others
  - Body: `{ targetLeafIds: string[] }`

#### Knowledge Graph
- `GET /api/graph` - Get knowledge graph data
- `GET /api/graph/analytics` - Get analytics data

#### Collections
- `GET /api/collections` - List user collections
- `POST /api/collections` - Create collection
- `GET /api/collections/:id` - Get collection
- `PUT /api/collections/:id` - Update collection
- `DELETE /api/collections/:id` - Delete collection

### Backend-Only Commands

```bash
# Run backend only
npm run dev

# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Run tests
npm test
``` 