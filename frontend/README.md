# Loreleaf Frontend

*For general project overview, setup, and features, see the [root README](../README.md).*

## Frontend-Specific Details

### Core Libraries

- Next.js 14 (App Router)
- React Hook Form with Zod validation
- React Markdown for content rendering
- React Force Graph for graph visualization

### Directory Structure

```
frontend/
├── src/
│   ├── app/               # Next.js application pages
│   ├── components/        # Reusable components (Navbar, LeafEditor, etc.)
│   ├── context/           # React context providers (AuthContext)
│   ├── services/          # API services (apiService.ts)
│   └── __tests__/         # Test files
├── public/                # Static assets and images
└── package.json
```

### Page Routes

- `/` - Landing page
- `/login` & `/register` - Authentication
- `/dashboard` - Main leaves listing with filters
- `/leaf/new` - Create new leaf
- `/leaf/[id]` - Edit existing leaf
- `/graph` - Knowledge graph visualization
- `/collections` - Manage leaf collections
- `/timeline` - Chronological view of leaves
- `/about` - About page with feature details

### Frontend-Only Commands

```bash
# Run frontend only
npm run dev

# Build for production
npm run build

# Run tests
npm test
```
