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

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Set up your environment variables by creating a `.env` file based on the example:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/loreleaf?schema=public"
   JWT_SECRET="your-secret-key-here"
   JWT_EXPIRES_IN="7d"
   PORT=8000
   NODE_ENV="development"
   ```

3. Run Prisma migrations to set up the database:
   ```
   npm run prisma:migrate
   ```

4. Generate Prisma client:
   ```
   npm run prisma:generate
   ```

## Development

Start the development server:
```
npm run dev
```

## Build and Run

Build the project:
```
npm run build
```

Start the production server:
```
npm start
```

## API Endpoints

### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get token
- `POST /api/auth/logout` - Logout (clear cookie)
- `GET /api/auth/me` - Get current user info

### Leaf Routes
- `GET /api/leaves` - Get all leaves (with optional filtering)
- `POST /api/leaves` - Create a new leaf
- `GET /api/leaves/:id` - Get a specific leaf
- `PUT /api/leaves/:id` - Update a leaf
- `DELETE /api/leaves/:id` - Delete a leaf

### Graph Routes
- `GET /api/graph` - Get knowledge graph data
- `GET /api/graph/analytics` - Get analytics data

## Project Structure

```
backend/
├── src/
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Express middleware
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   ├── config/            # Configuration
│   └── server.ts          # Express app
├── prisma/
│   ├── schema.prisma      # Database schema
└── package.json
``` 