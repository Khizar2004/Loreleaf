# Loreleaf 🍃

Loreleaf is a personal knowledge management system that helps you organize your thoughts and ideas as interconnected "leaves" of knowledge.

## Features

- Create, edit, delete, and link knowledge "leaves"
- Organize leaves with tags
- Visualize your knowledge graph to see connections
- User authentication and personal knowledge space

## Tech Stack

- **Backend**: Node.js, Express, TypeScript, PostgreSQL, Prisma ORM
- **Frontend**: Next.js, React, Tailwind CSS
- **Authentication**: JWT
- **Testing**: Jest, React Testing Library, Supertest

## Getting Started

### Prerequisites

- Node.js (v14+)
- PostgreSQL

### Installation

1. Clone the repository
```
git clone https://github.com/Khizar2004/Loreleaf.git
cd Loreleaf
```

2. Install dependencies for backend
```
cd backend
npm install
```

3. Install dependencies for frontend
```
cd ../frontend
npm install
```

4. Create a PostgreSQL database named `loreleaf`

5. Configure environment variables:
   - Create a `.env` file in the `backend` directory based on `.env.example`

6. Run database migrations
```
cd ../backend
npx prisma migrate dev
```

7. Start the development servers:

For backend:
```
cd backend
npm run dev
```

For frontend:
```
cd frontend
npm run dev
```

8. Visit `http://localhost:3000` in your browser

## Testing

The project includes comprehensive tests for both backend and frontend.

### Backend Tests

To run backend tests:

```
cd backend
npm test
```

Backend tests cover:
- API controllers
- Middleware
- Authentication
- Error handling

For more details, see [Backend Testing Documentation](backend/tests-readme.md).

### Frontend Tests

To run frontend tests:

```
cd frontend
npm test
```

Frontend tests cover:
- React components
- Context providers
- Authentication flow
- UI behavior

For more details, see [Frontend Testing Documentation](frontend/tests-readme.md).

## Code Coverage

To generate code coverage reports:

```
# Backend
cd backend
npm run test:coverage

# Frontend
cd frontend
npm run test:coverage
```

## License

This project is licensed under the MIT License. 