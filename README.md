# construction-builder-website

construction-builder-website

# Construction Builder Website — Monolith Builders

**Concept: BLUEPRINT TO BUILT — Structural Editorial**
Premium construction builder website — 1 radical UI per page, no generic SaaS template.

## Stack

- TanStack Start 1.121.15, TanStack Router 1.97, TanStack Query 5.60
- React 19, TypeScript 5.7, Tailwind v4, shadcn, Framer Motion
- Netlify Adapter @netlify/vite-plugin-tanstack-start 1.1.2

## Quick Start

```bash
Remove-Item -Recurse -Force node_modules, .vite, dist, bun.lockb -ErrorAction SilentlyContinue
bun install
bun run dev
# http://localhost:5173 and http://construction-builder-website.localhost:5173/
```

## Build

```bash
bun run build
# inspect output
ls dist/client
```

## Deploy Netlify

```bash
netlify init
netlify deploy --prod
```

`netlify.toml` publish = dist/client per Netlify docs.

## Pages

- / — Home: BUILT TO LAST hero, pour log, selected work, capabilities index, manifesto
- /projects — Archive with category filter, technical sheets
- /services — Spec index sticky + detail
- /team — Crew roster + personnel files
- /contact — Inquiry sheet MB-INQ-2026 + builder details
- /project-notes — Rich markdown docs, button in footer "Project notes"

## Design System

All tokens in :root in src/styles.css:
--paper, --paper-2, --ink, --ink-2, --muted, --concrete, --steel, --safety, --blueprint, --grid, --border

Usage: Tailwind v4 native syntax bg-(--paper), text-(--ink), border-(--border). No bg-[var(--token)].

Import order: @import url fonts FIRST, then @import "tailwindcss" SECOND — prevents PostCSS @import must precede error.

## Architecture

Feature-based per rules:

- src/features/home/pages/HomePage.tsx composes components
- src/features/projects/..., services/..., team/..., contact/..., project-notes/...
- src/routes/\*.tsx thin — only createFileRoute and render feature page
- Shared in src/components/ui, layout in src/components/layout
- Absolute imports @/

## Verification

After install:

- tsc --noEmit passes
- vite dev starts with HMR intact, CSS injected via head links appCss
- Check: document.querySelectorAll('link[rel="stylesheet"]'), getComputedStyle(document.documentElement).getPropertyValue('--paper')
- All routes reachable, no Not Found for **root**
- Production build succeeds, assets in dist/client

## Images

Unsplash direct URLs q=80&w=2070 object-cover.

## No Cursor Gimmicks
