# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Portfolio website for Bela Balsa, a professional dancer, singer and actress (Bordeaux, French/Portuguese). Audience is mostly French professionals (choreographers, directors, production companies, dance companies) plus students/clients. Goal: show the breadth of her work and that she is active, and let people contact her. Visual reference: https://www.joranerest.com/ (feel: sensitive, moving, professional, "WOAW").

Planned sections (MVP): Home ("Je suis une interprète", only her photos/videos), Chorégraphe (her work and others she directed; reference https://www.joranerest.com/personal-work), Singing (albums, songs, short ~3s previews), Cabaret (LoliStar, BleuBlancCiel), About (short bio), Contact (email, socials, form). French is the default language, with English and Portuguese translations. No database for now.

Full product context lives in `context/project-spec.md` (plus a screenshot in `context/screenshots/`). Read it before building new pages.

## Context files

Read the following files in `context/` before working on the code:

- @context/project-overview.md — project overview, goals, audience, and design reference
- @context/coding-standards.md — coding standards and conventions for this project
- @context/ai-interaction.md — how to interact with AI agents (Claude, ChatGPT, etc.) for this project
- @context/current-feature.md — current feature being worked on, with requirements and design notes

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build (also the main type-check gate)
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

There is no test framework set up.

## Stack and configuration notes

- **Next.js 16.4 / React 19.3, App Router under `src/app/`.** APIs differ from older Next.js — consult `node_modules/next/dist/docs/` (`01-app`, `03-architecture`, …) before using any Next API.
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`. Keep this in mind for data fetching/caching patterns (check the docs for how dynamic data must be handled under Cache Components).
- Route types are generated globally: layouts use `LayoutProps<"/">` (and pages `PageProps<...>`) without imports.
- **Tailwind CSS v4.3, CSS-only config.** Tailwind is loaded through the `@tailwindcss/turbopack` loader configured in `next.config.ts` (no PostCSS config). Never create `tailwind.config.*`; put theme tokens in `@theme` in `src/app/globals.css`.
- Path alias `@/*` → `src/*`.
- **Media:** original photos live in `src/media/` and are git-ignored (too heavy). Only the curated, web-sized selection in `src/media/site/<section>/` is committed (JPG, ~2500px long edge, simple kebab-case names). Import them statically into `next/image`.
- The README's stack list mentions React Player, React Icons, React Router, React Slick and React YouTube, but none are installed yet (and React Router should not be needed with the App Router). Add dependencies only when actually used.

## Coding standards (from `context/coding-standards.md`)

- TypeScript strict, no `any` (use `unknown`); interfaces for props and data models.
- Server Components by default; `'use client'` only for interactivity/hooks/browser APIs. Server Actions for forms/mutations (e.g. the contact form), returning `{ success, data, error }` with try/catch; API routes only for webhooks, uploads, third-party integrations, etc.
- File layout: components `src/components/[feature]/ComponentName.tsx`, routes `src/app/[route]/page.tsx`, actions `src/actions/[feature].ts`, types `src/types/[feature].ts`, utils `src/lib/[utility].ts`.
- Naming: PascalCase components and types (no `I` prefix), camelCase functions, SCREAMING_SNAKE_CASE constants.
- Styling: Tailwind only, no inline styles, shadcn/ui where applicable, dark mode first (light mode optional). User-facing errors via toast.
- No commented-out code, no unused imports/variables, keep functions under ~50 lines.
