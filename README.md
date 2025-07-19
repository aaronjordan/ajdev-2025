# ajdev-2025

A fresh take on my personal website, now with a focus on writing rather than simply being a resume.

## Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 5
- **Styling**: TailwindCSS 4.x
<!-- - **Database**: Turso (libSQL) with Drizzle ORM -->
- **Content**: MDSvex for markdown processing
- **Deployment**: Cloudflare Pages (adapter-cloudflare)
- **Testing**: Vitest with Playwright browser testing

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime
- Turso database account (for production)

### Installation

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL and DATABASE_AUTH_TOKEN
```

### Development Commands

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run all tests
bun run test

# Run tests in watch mode
bun run test:unit

# Type checking
bun run check

# Type checking with watch
bun run check:watch

# Format code
bun run format

# Lint code
bun run lint
```

### Database Commands

```bash
# Push schema changes
bun run db:push

# Run migrations
bun run db:migrate

# Open database studio
bun run db:studio
```

## Project Structure

```
src/
├── lib/server/db/     # Database configuration and schema
├── posts/             # Content management system for notes and snippets
├── routes/            # SvelteKit file-based routing
└── components/        # Reusable Svelte components
```

## Content System

The application features a file-based content management system:

- Content files follow the naming pattern: `{kind}-{YYYYMMDD}.md`
- Supported content types: "note" and "snippet"
- Examples: `note-20250702.md`, `snippet-20250703.md`
- Posts are processed via `src/posts/index.ts` with automatic metadata extraction
- Routes are organized under `/notebooks/` (for notes) and `/snippets/`

## Database Setup

(Bound, but not yet in real use.)

- Uses Turso (libSQL) as the database with Drizzle ORM
- Requires `DATABASE_URL` and `DATABASE_AUTH_TOKEN` environment variables
- Schema defined in `src/lib/server/db/schema.ts`
- Database client configured in `src/lib/server/db/index.ts`

## Testing

Dual test setup for comprehensive coverage:

- **Browser tests**: For Svelte components using Playwright with Chromium
- **Node tests**: For server code
- Component tests should use `.svelte.{test,spec}.{js,ts}` suffix
- Server tests exclude `.svelte.test` files

## Deployment

Configured for deployment on Cloudflare Pages with the `adapter-cloudflare` adapter. All routes use `prerender = true` where feasible for optimal performance.

## Development Notes

- Uses Svelte 5 syntax (`$props()`, `{@render children()}`)
- TailwindCSS configured with forms and typography plugins
- ESLint configured with TypeScript, Svelte, and Prettier integration
