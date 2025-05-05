# Loreleaf Frontend

This is the frontend for Loreleaf, a personal knowledge management system inspired by Zettelkasten and digital gardens.

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form with Zod validation
- Axios for API requests
- React Markdown for rendering markdown content
- Force Graph for knowledge graph visualization

## Features

- User authentication (register/login)
- Dashboard to view and manage leaves
- Markdown editor with preview
- Knowledge graph visualization
- Linking between leaves

## Quick Start

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

3. Start development server:
   ```
   npm run dev
   ```

## Project Structure

```
frontend/
├── src/
│   ├── app/               # Next.js application pages
│   ├── components/        # Reusable components
│   ├── context/           # React context providers
│   ├── services/          # API services
│   └── __tests__/         # Test files
├── public/                # Static assets
└── package.json
```

## Key Pages

- `/` - Landing page
- `/login` & `/register` - Authentication
- `/dashboard` - List of leaves
- `/leaf/new` - Create new leaf
- `/leaf/[id]` - Edit existing leaf
- `/graph` - Knowledge graph visualization
- `/collections` - Manage leaf collections
- `/timeline` - Chronological view of leaves
