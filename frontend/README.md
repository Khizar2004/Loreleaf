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

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Set up your environment variables by creating a `.env.local` file:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
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

## Pages

- `/` - Landing page
- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - List of leaves
- `/leaf/new` - Create new leaf
- `/leaf/[id]` - Edit existing leaf
- `/graph` - Knowledge graph visualization

## Project Structure

```
frontend/
├── src/
│   ├── app/               # Next.js application pages
│   ├── components/        # Reusable components
│   ├── context/           # React context providers
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── package.json
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
