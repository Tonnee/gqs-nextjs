<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Expert Audit Roles & Refactoring Directives

When writing, refactoring, or optimizing code in this repository, evaluate all changes against the following expert role domains:

## 1. Senior Next.js & React Architect
- Enforce clean App Router server vs client component boundaries (`'use client'` strictly at leaf interactive components).
- Decouple data fetching and business logic from UI components using service abstractions (`features/[feature]/api` or `lib/services`).
- Ensure error boundaries (`error.tsx`), route fallbacks (`not-found.tsx`), and Suspense boundaries (`loading.tsx`) are implemented for all routes.

## 2. Accessibility (WCAG 2.2 AA) Specialist
- Enforce semantic HTML5 tags (`<nav>`, `<header>`, `<main>`, `<article>`, `<section>`, `<aside>`) and standard ARIA attributes.
- Use `<fieldset>` and `<legend>` for form option groups and multi-select filters.
- Maintain strict keyboard focus traps, visible focus rings, and focus restoration in modal dialogs and dropdown menus.
- Ensure text color contrast ratios meet or exceed 4.5:1 against backgrounds across dark and light modes.

## 3. Performance & Core Web Vitals Engineer
- Use dynamic imports (`next/dynamic`) for heavy client components and third-party libraries (e.g., Embla Carousel, complex chart libraries).
- Optimize Google Fonts (`next/font/google`) with `display: "swap"` and explicit weight subsets.
- Prevent Cumulative Layout Shift (CLS) by assigning explicit width/height or `fill` to all `<Image>` components.
- Prevent render-blocking scripts and keep client hydration minimal.

## 4. Security & DevOps Engineer
- Configure HTTP Security Headers (X-Frame-Options, Content-Security-Policy, X-Content-Type-Options) in `next.config.ts`.
- Sanitize and validate all user inputs server-side in Server Actions and Route Handlers using Zod schemas.
- Prevent sensitive credential exposure by using `NEXT_PUBLIC_` strictly for client-safe environment variables.

## 5. SEO & Metadata Lead
- Define comprehensive dynamic `generateMetadata()` on all dynamic routes (`/courses/[slug]`, `/kmf-questions/[slug]`).
- Maintain dynamic `app/sitemap.ts`, `app/robots.ts`, and structured JSON-LD schemas (`Course`, `EducationalOrganization`, `BreadcrumbList`).
- Include OpenGraph (`og:image`, `og:title`) and Twitter card metadata for social sharing.

## 6. Fullstack Database & API Architect
- Design clean, centralized TypeScript interfaces for domain entities (`Course`, `Question`, `Review`, `User`, `Enrollment`).
- Execute all data mutations via Next.js Server Actions (`features/[feature]/actions.ts`) with type validation and structured return types (`{ success: boolean; data?: T; error?: string }`).
- Architect backend logic to easily integrate with relational/NoSQL databases (PostgreSQL / Prisma / Drizzle / Supabase) using strict type safety and Row-Level Security (RLS).

## 7. Design System Architect & UI Visual Lead
- Exclusively use Tailwind CSS v4 utility classes and custom theme tokens (`@theme` in `app/globals.css`).
- Prevent CSS margin collapsing across viewports by using responsive padding (`pt-*`, `pb-*`, `py-*`) on section containers.
- Enforce premium, high-contrast visual design, smooth transitions, micro-animations, and consistent brand tokens (`primary`, `accent`, `secondary`, `foreground`).
