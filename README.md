# Loreleaf 🍃

Welcome to Loreleaf - my passion project for personal knowledge management. Born from a desire to organize thoughts in a more natural, interconnected way, Loreleaf helps you cultivate your ideas as a beautiful garden of knowledge.

## Why I Built This

As someone who's always collecting ideas, notes, and insights, I found traditional note-taking too linear. Our thoughts don't exist in isolation - they connect and form networks. Loreleaf embraces this natural way of thinking, allowing your knowledge to grow organically like interconnected leaves on a tree.

## Features

- 🌱 Create atomic "leaves" of knowledge with Markdown support
- 🔗 Build connections between related ideas
- 🔍 Discover insights through your personal knowledge graph
- 🏷️ Organize with tags and collections
- 📊 Visualize connections with an interactive knowledge graph
- 🔐 Secure user authentication

## Tech Stack

- **Backend**: Node.js (Express 5), TypeScript, PostgreSQL, Prisma ORM
- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **State Management**: React Context API
- **Authentication**: JWT with HTTP-only cookies
- **Form Handling**: React Hook Form with Zod validation
- **Graph Visualization**: React Force Graph
- **Testing**: Jest, React Testing Library, Supertest

## UI Showcase

<details>
<summary>📸 Home Page</summary>

![Home Page - Top](frontend/public/images/homePage1.png)
![Home Page - Features](frontend/public/images/homePage2.png)
</details>

<details>
<summary>📸 About Page</summary>

![About Page](frontend/public/images/aboutPage.png)
</details>

<details>
<summary>📸 Dashboard</summary>

![Dashboard View](frontend/public/images/dashboard.png)
</details>

<details>
<summary>📸 Knowledge Graph</summary>

![Knowledge Graph View](frontend/public/images/graphPage.png)
</details>

<details>
<summary>📸 Timeline View</summary>

![Timeline View](frontend/public/images/timelinePage.png)
</details>

<details>
<summary>📸 Collections</summary>

![Creating Collections](frontend/public/images/creatingCollection.png)
![Created Collection](frontend/public/images/createdCollecion.png)
</details>

## Getting Started

### Prerequisites

- Node.js (v20+)
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
   - Create a `.env` file in the `backend` directory with the following:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/loreleaf?schema=public"
   JWT_SECRET="your-secret-key-here"
   JWT_EXPIRES_IN="7d"
   PORT=8000
   NODE_ENV="development"
   ```
   - Create a `.env.local` file in the `frontend` directory with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

6. Run database setup
```
cd ../backend
npm run prisma:migrate
npm run prisma:generate
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
- API controllers (authentication, graph operations)
- Authentication middleware
- Request validation

For more details, see [Backend Testing Documentation](backend/tests-readme.md).

### Frontend Tests

To run frontend tests:

```
cd frontend
npm test
```

Frontend tests cover:
- React components (Navbar, ProtectedRoute)
- Authentication context
- Navigation and protection flows

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

## Roadmap

I'm actively working on enhancing Loreleaf with these upcoming features:

- 🔄 Bidirectional linking
- 📱 Mobile app version
- 🧠 AI-assisted connections and insights
- 🌐 Optional public sharing of knowledge gardens

## Connect & Contribute

I'd love to hear your thoughts or see your contributions! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Made with 💚 by [Khizar](https://github.com/Khizar2004) 