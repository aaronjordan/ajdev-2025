# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `bun run dev`
- **Build for production**: `bun run build`
- **Preview production build**: `bun run preview`
- **Run all tests**: `bun run test` (runs unit tests once)
- **Run tests in watch mode**: `bun run test:unit`
- **Type checking**: `bun run check`
- **Type checking with watch**: `bun run check:watch`
- **Format code**: `bun run format`
- **Lint code**: `bun run lint` (runs prettier check + eslint)

## Database Commands

- **Push schema changes**: `bun run db:push`
- **Run migrations**: `bun run db:migrate`
- **Open database studio**: `bun run db:studio`

## Architecture Overview

This is a SvelteKit application with the following key characteristics:

### Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 5
- **Styling**: TailwindCSS 4.x
- **Database**: Turso (libSQL) with Drizzle ORM
- **Content**: MDSvex for markdown processing
- **Deployment**: Cloudflare Pages (adapter-cloudflare)
- **Testing**: Vitest with Playwright browser testing

### Project Structure

- `src/lib/server/db/` - Database configuration and schema
- `src/posts/` - Content management system for notes and snippets
- `src/routes/` - SvelteKit file-based routing
- `src/components/` - Reusable Svelte components

### Content System

The application uses a file-based content system where:

- Content files follow naming pattern: `{kind}-{YYYYMMDD}.md` (e.g., `note-20250702.md`, `snippet-20250703.md`)
- Two content types: "note" and "snippet"
- Posts are processed via `src/posts/index.ts` with automatic metadata extraction
- Routes are organized under `/notebooks/` (for notes) and `/snippets/`

### Database Setup

- Uses Turso (libSQL) as the database with Drizzle ORM
- Requires `DATABASE_URL` and `DATABASE_AUTH_TOKEN` environment variables
- Schema defined in `src/lib/server/db/schema.ts`
- Database client configured in `src/lib/server/db/index.ts`

### Testing Configuration

- Dual test setup: browser tests for Svelte components, Node tests for server code
- Browser tests use Playwright with Chromium
- Component tests should use `.svelte.{test,spec}.{js,ts}` suffix
- Server tests exclude `.svelte.test` files

### Important Notes

- All routes use `prerender = true` where feasible
- Uses Svelte 5 syntax (`$props()`, `{@render children()}`)
- TailwindCSS configured with forms and typography plugins
- ESLint configured with TypeScript, Svelte, and Prettier integration
