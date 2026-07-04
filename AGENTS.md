# AGENTS.md

Compact instruction file for OpenCode sessions working on the Siam Gym website.

## Project basics

- **Stack**: React 19 + TypeScript + Vite + Tailwind CSS v4 + SCSS.
- **Package manager**: `bun` (lockfile `bun.lock`). Use `bun install`, not `npm`.
- **No tests** are configured. Do not run a test command.

## Commands

| Command | Purpose |
|---------|---------|
| `bun run dev` | Start Vite dev server (listens on all hosts). |
| `bun run build` | Run `tsc` then `vite build`. Must type-check cleanly. |
| `bun run lint` | ESLint over `ts`/`tsx` with zero warnings allowed. |
| `bun run preview` | Preview production build locally. |

## TypeScript strictness

- `tsconfig.json` has `noUnusedLocals: true` and `noUnusedParameters: true`. Unused variables will fail the build.
- `include` is `["src"]`, so config files live outside `src`.

## Project structure

- **Entry**: `src/main.tsx` wires `react-router-dom` (`createBrowserRouter`) with a shared `Layout` (Header + Outlet + Footer).
- **Routes** are lazy-loaded from `src/pages/*`. Each page must export a `Component` (see existing `index.tsx` / `cours/index.tsx`).
- **Path alias**: `~` maps to `src` in both Vite and TSConfig. Use it for all imports, e.g. `~/components/theHeader`.
- **Components** live in `src/components/<Name>/index.tsx` with a co-located `style.scss`.

## Styling conventions

- **Tailwind v4** is imported in `src/tailwind.css` (`@import "tailwindcss"`). Do not use a `tailwind.config.js` — v4 uses CSS-based config.
- **SCSS** is used for component and global styles (`global.scss`, page styles). Tailwind utility classes are mixed with SCSS.
- Custom fonts and CSS variables are defined in `src/global.scss`. Dark mode is `prefers-color-scheme: dark`.

## Assets

- **SVG icons** are imported as React components via `vite-plugin-svgr`: `import Icon from "~/assets/images/icon.svg?react";`.
- Images are webp/SVG in `src/assets/images/`.

## Deployment

- Hosted on **Vercel**. `vercel.json` contains SPA rewrite rule (`/(.*)` → `/`). All routing is client-side.
- Do not add server-side routing or API routes.

## Nix shell

- `flake.nix` provides a dev shell with `bun` and a `start` wrapper that runs `bun run dev`.
