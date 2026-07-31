# Project Rules — Fullstack Next.js Architecture

This document outlines the strict core development principles, folder structure, and engineering standards for this repository. It serves as the definitive guide for human developers and AI assistants to ensure clean, scalable, type-safe, and production-ready code.

**AI Assistants:** You must adhere strictly to these rules in every response and code generation. Do not deviate.

---

## 1. Core Development Principles
- **Simplicity & Readability:** Write clean, self-documenting code. Prefer simple, explicit logic over clever abstractions. Re-read code to ensure a junior developer could easily understand it.
- **Server-First Approach:** Next.js App Router defaults to React Server Components (RSC). **ONLY** use standard React Client Components (via `"use client"`) when interactivity, state hooks (`useState`, `useEffect`), custom hooks, or DOM event listeners are strictly required.
- **Fullstack Data Integrity:** Validate all client-server boundaries (Server Actions, API Route Handlers) using type-safe schema validation (Zod). Never trust unvalidated input on the server.
- **Modularity & Composition:** Ensure components and utilities are highly reusable, decoupled, and focused on a single responsibility (Single Responsibility Principle). Use composition (passing `children`) to avoid prop-drilling and bloated prop lists.
- **Minimal Dependencies:** **DO NOT** add new npm packages unless explicitly authorized by the user. Rely entirely on the existing tech stack.
- **Zero Warnings:** All code must pass strict TypeScript compiler checks and ESLint rules without warnings. Using `any` types or suppressing lint rules (`// @ts-ignore`) without solid written justification is strictly prohibited.

---

## 2. Folder Structure for Scalable Fullstack Next.js Projects
Follow a strictly domain-driven, feature-based architecture. Global UI elements reside in `components/`, while domain features are co-located in `features/`.

```text
/
├── app/                  # Next.js App Router (pages, layouts, route handlers, error/loading states)
│   ├── api/              # API Route Handlers (REST / Webhooks)
│   ├── (auth)/           # Auth route group (login, register)
│   └── [route]/          # App pages & layouts
├── components/           # Global reusable UI elements
│   ├── ui/               # Generic primitive UI elements (buttons, inputs, cards)
│   ├── layout/           # Global layout components (header, navbar, footer, container)
│   └── shared/           # Complex shared components (data tables, modal frames)
├── features/             # Domain-driven feature modules
│   └── [feature-name]/
│       ├── components/   # Feature-specific components
│       ├── actions/      # Next.js Server Actions (mutations & server logic)
│       ├── api/          # Server-side data fetching functions / DB queries
│       ├── data/         # Mock data & static feature constants
│       ├── types/        # Feature-specific TypeScript interfaces/types
│       └── utils/        # Feature helper utilities & Zod schemas
├── lib/                  # Global utilities, API clients, DB config, and wrappers
│   ├── db/               # Database client (Prisma / Supabase / Drizzle config)
│   └── utils.ts          # Utility functions (e.g., `cn` for Tailwind class merging)
├── types/                # Project-wide global TypeScript type definitions
├── hooks/                # Custom React hooks (strictly for client components)
├── store/                # Global client state management (Zustand, Context)
├── public/               # Static public assets (images, fonts, icons)
├── AGENTS.md             # Expert AI agent roles & audit guidelines
└── project-rules.md      # Core repository architecture rules & standards
```

---

## 3. Component Architecture & RSC Boundaries
- **Server Component by Default:** Every component in `app/` and `features/` is a Server Component unless marked with `"use client"`.
- **Push Interactivity to Leaves:** Keep top-level pages, layouts, and containers as Server Components. Extract interactive controls (buttons, forms, dropdowns) into isolated leaf Client Components.
- **Separation of Concerns:** Keep server-side data fetching, authorization checks, and database queries in Server Components or dedicated `features/[feature]/api` service modules. Pass plain, serializable objects to Client Components.
- **Avoid Deep Prop Drilling:** Do not drill props past 2 levels. Use direct server-side data fetching in Server Components or lightweight React Context / Zustand for global client state.
- **File Size Guideline:** Keep component files concise (aim under 200 lines). Extract complex logic into custom hooks or break UI into smaller modular sub-components.

---

## 4. Fullstack Data Flow & Server Actions
- **Mutations via Server Actions:** Execute all data mutations (form submissions, status updates, user actions) using Next.js Server Actions placed in `features/[feature]/actions/`.
- **Input Validation:** Validate all action inputs server-side using Zod schemas before processing.
- **Standardized Action Responses:** Server Actions must return a consistent, type-safe response pattern:
  ```typescript
  export type ActionResponse<T = unknown> = 
    | { success: true; data: T; message?: string }
    | { success: false; error: string; errors?: Record<string, string[]> };
  ```
- **Cache Revalidation:** Call `revalidatePath()` or `revalidateTag()` inside Server Actions after successful mutations to ensure UI freshness without manual browser reloads.

---

## 5. Database & API Layer Architecture
- **Type-Safe Entities:** Define explicit TypeScript interfaces/types for database entities (`User`, `Course`, `Question`, `Enrollment`).
- **Database Abstraction:** Isolate direct database queries inside `lib/db/` or `features/[feature]/api/`. Never write raw database queries directly inside React components.
- **Route Handlers:** Use Next.js Route Handlers (`app/api/[route]/route.ts`) for external API integrations, webhooks, or public REST endpoints. Always handle errors with proper HTTP status codes (`200`, `400`, `401`, `403`, `500`).
- **Security & Authorization:** Enforce authentication and role checks on the server side (in Server Actions and Route Handlers) before returning or mutating database records.

---

## 6. Tailwind CSS v4 Styling Rules
- **Utility-First:** Exclusively use Tailwind CSS v4 utility classes. **DO NOT** write custom `.css` rules unless required for root `@theme` definitions or complex animations.
- **Tailwind v4 Configuration (`@theme`):** Tailwind v4 uses CSS for configuration. Do not create `tailwind.config.ts`. Define design tokens, colors, fonts, and breakpoints via the `@theme` directive in `app/globals.css`.
- **Class Merging with `cn`:** Always use the class merging utility (`cn` combining `clsx` and `tailwind-merge`) when defining dynamic or configurable class names:
  ```typescript
  import { clsx, type ClassValue } from "clsx";
  import { twMerge } from "tailwind-merge";

  export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
  }
  ```
- **Non-Collapsing Layout Spacing:** Use section padding (`pt-*`, `pb-*`, `py-*`) rather than un-responsive outer top/bottom margins (`mt-*`, `mb-*`) on section tags to prevent CSS margin collapsing across viewports.
- **Responsive Design:** Build mobile-first. Establish base styles for mobile viewports, then layer responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).

---

## 7. Naming Conventions & TypeScript Rules
- **File & Folder Names:** ALWAYS use `kebab-case` (e.g., `course-card.tsx`, `features/video-materials/`).
- **React Components:** ALWAYS use `PascalCase` (e.g., `CourseCard`).
- **Variables & Functions:** ALWAYS use `camelCase` (e.g., `formatCurrency`, `getCourseBySlug`).
- **Types & Interfaces:** ALWAYS use `PascalCase` without `I` or `T` prefixes (e.g., `User`, `CourseProps` instead of `IUser` or `TCourseProps`).
- **Constants:** ALWAYS use `UPPER_SNAKE_CASE` for non-changing static values (e.g., `DEFAULT_PAGE_SIZE`).
- **Strict TypeScript:** Keep `strict: true` in `tsconfig.json`. Explicitly type function parameters, return types, and state. Use `unknown` with type narrowing instead of `any`.

---

## 8. SEO & Metadata Best Practices
- **Dynamic Metadata:** Export `metadata` objects or implement `generateMetadata()` on all dynamic pages (`/courses/[slug]`, `/kmf-questions/[slug]`).
- **Semantic Headings:** Maintain proper heading hierarchy (exactly one `<h1>` per page, followed by logical `<h2>`, `<h3>`).
- **Structured Data:** Include JSON-LD schemas (`EducationalOrganization`, `Course`, `BreadcrumbList`) for search engine indexing.
- **Robots & Sitemap:** Maintain dynamic `app/sitemap.ts` and `app/robots.ts`.

---

## 9. Accessibility Requirements (WCAG 2.2 AA)
- **Semantic HTML5:** Use proper semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer`, `<button>`). Do not wrap everything in generic `<div>` tags.
- **ARIA & Labels:** Implement `aria-label`, `aria-expanded`, `aria-controls`, and `aria-hidden` where standard HTML fall short.
- **Keyboard Navigation:** Ensure interactive elements (modals, dropdowns, forms) support full keyboard navigation (`Tab`, `Enter`, `Space`, `Escape`) with visible focus rings (`focus-visible:outline-2`).
- **Image Alts:** Every `<Image>` component MUST have a descriptive `alt` string (or `alt=""` for purely decorative graphics).

---

## 10. Performance Best Practices & Core Web Vitals
- **Image Optimization:** Always use `next/image` with explicit `width`/`height` or `fill` to prevent Cumulative Layout Shift (CLS).
- **Font Optimization:** Use `next/font/google` with `display: "swap"` to prevent flash of unstyled text (FOUT).
- **Bundle Optimization:** Dynamically import heavy client component boundaries or libraries using `next/dynamic` (e.g., carousels, charts, modal overlays).

---

## 11. Git Commit Conventions
Follow Conventional Commits format: `type(scope): subject`
- **Types:** `feat` (new feature), `fix` (bug fix), `docs` (documentation), `style` (formatting), `refactor` (code restructuring), `test` (adding tests), `chore` (deps/build update).
- **Example:** `feat(courses): add server action for user course enrollment`

---

## 12. Code Quality & Refactoring Standards
- **DRY & KISS:** Consolidate repeated logic into reusable utility functions or custom hooks. Keep code straightforward and avoid over-engineering.
- **Guard Clauses:** Prefer early returns over deeply nested `if/else` conditionals.
- **Dead Code Cleanup:** When replacing or updating components, hunt down and delete unused imports, files, and orphaned functions immediately.

---

## 13. AI Code Generation Rules (Strict Instructions)
- **Read Guidelines First:** Internalize `AGENTS.md` and `project-rules.md` before generating code or modifying features.
- **No Hallucinated Packages:** Use ONLY dependencies listed in `package.json`. If a new dependency is required, request permission from the user first.
- **Complete Code Output:** Never output incomplete snippets with placeholders like `// implement logic here`. Always return full, functional, copy-paste-ready code.
- **Context Inspection:** Use search tools (`grep_search`, `view_file`) to check existing utility functions (e.g., `cn`), existing component patterns, and type definitions before creating duplicates.
