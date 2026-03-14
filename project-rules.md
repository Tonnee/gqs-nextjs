# Project Rules

This document outlines the strict core development principles and standards for this repository. It serves as the definitive guide for both human developers and AI assistants to ensure senior-level, scalable, and production-ready code.

**AI Assistants:** You must adhere strictly to these rules in every response and code generation. Do not deviate.

---

## 1. Core Development Principles
- **Simplicity & Readability:** Write clean, self-documenting code. Prefer simple, explicit logic over clever abstractions. Re-read code to ensure a junior developer could understand it.
- **Server-First Approach:** Next.js App Router defaults to React Server Components (RSC). **ONLY** use standard React Client Components (via `"use client"`) when interactivity, hooks, or browser APIs are strictly required. Do not use `"use client"` globally or unnecessarily.
- **Modularity & Composition:** Ensure components and utilities are highly reusable, decoupled, and focused on a single responsibility (Single Responsibility Principle). Use composition (passing `children`) to avoid massive prop lists.
- **Minimal Dependencies:** **DO NOT** add new dependencies unless explicitly authorized. Rely entirely on the existing tech stack.
- **Zero Warnings:** All code must pass strict TypeScript checks and ESLint rules without warnings. Committing code with warnings or `any` types is strictly prohibited.

## 2. Folder Structure for Scalable Next.js Projects
Follow a strictly feature-based architecture. Global UI elements go in `components/ui`, while feature-specific components remain co-located with their features.
```text
/
├── app/                  # Next.js App Router (pages, layouts, route handlers, error/loading states)
├── components/           # Reusable, global UI components
│   ├── ui/               # Primitive generic UI elements (buttons, inputs)
│   ├── layout/           # Global layouts (navbar, footer, sidebar)
│   └── shared/           # Complex shared components
├── features/             # Feature-based modules (domain-driven design)
│   └── [feature-name]/
│       ├── components/   # Feature-specific components
│       ├── actions/      # Next.js Server Actions for this feature
│       ├── api/          # Data fetching for this feature
│       └── utils/        # Feature-specific utilities
├── lib/                  # Global utility functions, API clients, and wrappers (e.g., `utils.ts` for clsx)
├── types/                # Global TypeScript type declarations (only for truly global types)
├── hooks/                # Custom React hooks (strictly for client components)
├── store/                # Global client state management (Zustand, Context, etc.)
├── data/                 # Static data, constants, and mock data
└── public/               # Static assets (images, fonts, icons)
```

## 3. Component Architecture Rules
- **Server vs. Client Components:**
  - **Server by default.** Do not add `"use client"` unless specifically using `useState`, `useEffect`, `useContext`, standard DOM APIs (e.g., `window`), or onClick handlers.
  - Push Client Components as far down the component tree as possible (leave parents as Server Components).
- **Separation of Concerns:** Keep data fetching and business logic in Server Components, Server Actions, or dedicated service functions in `features/[feature]/api`. Pass simple, serializable data as props to Client Components.
- **Prop Drilling:** Avoid prop drilling past 2 levels. Use server-side data fetching directly in the component that needs it, or use React context/Zustand for global client state.
- **Max File Size Guidelines:** Component files must be concise. If a file exceeds 200 lines, extract logic into custom hooks or break the UI into smaller sub-components.

## 4. Naming Conventions
- **Files and Folders:** ALWAYS use `kebab-case` (e.g., `user-profile.tsx`, `components/auth/`).
- **Components:** ALWAYS use `PascalCase` for React component functions (e.g., `UserProfile`).
- **Functions & Variables:** ALWAYS use `camelCase` for variable names, utility functions, and hooks (e.g., `formatDate`, `useWindowSize`).
- **Types & Interfaces:** ALWAYS use `PascalCase` and descriptive names. **DO NOT** use an `I` prefix (e.g., `User` instead of `IUser`, `ButtonProps` instead of `TButtonProps`).
- **Constants:** ALWAYS use `UPPER_SNAKE_CASE` for global, non-changing constants (e.g., `MAX_RETRY_COUNT`).

## 5. Tailwind Styling Rules
- **Utility-First:** Exclusively use Tailwind CSS v4 utility classes. **DO NOT** write custom CSS in `.css` files unless absolutely required for highly complex animations or root level base styles (`app/globals.css`).
- **Class Merging:** ALWAYS use a class merge utility (`cn` combining `clsx` and `tailwind-merge`) for dynamic class names to avoid specificity clashing.
  ```typescript
  // Example utility implementation expectation
  import { clsx, type ClassValue } from "clsx"
  import { twMerge } from "tailwind-merge"
  export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }
  ```
- **Inline Styles:** **DO NOT** mix Tailwind classes with inline `style={{}}` objects, except for highly dynamic values (e.g., calculated transform offsets).
- **Responsiveness:** Build mobile-first. Establish base styles for mobile, then apply standard breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).

## 6. TypeScript Rules
- **Strict Mode:** `tsconfig.json` strict mode must be enabled and fully respected.
- **No `any`:** Explicitly type all variables, function parameters, state, and return types. Expanding types with `any` is a terminable offense for AI generation. Use `unknown` if truly dynamic, then narrow.
- **Interfaces vs Types:** Use `type` for standard unions, intersections, and mapped types. Use `interface` primarily for defining object shapes or class implementations that will be extended. For component props, `type Props = {}` or `interface Props {}` are both acceptable, but be internally consistent per file.
- **Co-location:** Keep component prop types in the identical file as the component if they are completely coupled. Only move to `types/` if structurally shared.

## 7. Data Organization Rules
- **Server Actions:** Use Next.js Server Actions for all mutations. Place them in `features/[name]/actions.ts`.
- **Data Fetching:** Fetch data exclusively server-side in Server Components, Layouts, or Route Handlers via standard standard Node.js `fetch`.
- **Constants & Mock Data:** Store static/mock data in the `data/` directory or `features/[name]/constants.ts`. Do not clutter component files with giant static arrays.
- **Environment Variables:** Validate environment variables early. Never expose private keys to the client. Prepend `NEXT_PUBLIC_` only when the variable is legally allowed in the browser bundle.

## 8. Accessibility Requirements
- **Semantic HTML:** Do not use `<div>` for everything. Use proper HTML5 semantic tags (`<nav>`, `<header>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<button>`).
- **Aria Attributes:** Implement standard ARIA roles, `aria-label`, `aria-describedby`, and `aria-hidden` strictly where native HTML semantic elements fall short.
- **Keyboard Navigation:** Forms and interactive components MUST be fully usable via `Tab`, `Enter`, and `Space`. Add `tabIndex={0}` only to non-native interactive elements.
- **Image Alts:** Every `<Image>` component MUST have a descriptive `alt` attribute. Use `alt=""` explicitly for purely decorative images.

## 9. Performance Best Practices
- **Image Optimization:** ALWAYS use the `next/image` component for images. Provide explicit `width` and `height` (or use `fill`) to prevent Cumulative Layout Shift (CLS).
- **Client Bundles:** Minimize the size of client boundaries. Import large external client-side libraries dynamically using `next/dynamic` to split the bundle.
- **Caching Validation:** Heavily leverage Next.js App Router caching. Prefer explicit `revalidate` tags or times for static/semi-static fetches.

## 10. Git Commit Conventions
- **Format:** Strongly enforce Conventional Commits: `type(scope): subject`.
- **Types:** `feat` (new feature), `fix` (bug fix), `docs` (documentation), `style` (formatting), `refactor` (restructuring without feature change), `test` (tests), `chore` (maintenance, deps).
- **Subject:** Imperative mood ("add auth" not "added auth"), lowercase, no period at end.

## 11. Code Quality Standards
- **DRY (Don't Repeat Yourself):** Consolidate repeating logic into utility functions or custom hooks immediately upon noticing duplication.
- **KISS (Keep It Simple, Stupid):** Avoid over-engineering. Write the simplest possible function that solves the problem robustly. Do not pre-optimize for use cases that do not exist yet.
- **Early Returns:** Use early returns to prevent deep nesting and improve readability (Guard Clauses).
- **Linting:** Resolve all ESLint and TypeScript compiler errors dynamically. Ignoring rules via `// @ts-ignore` or `// eslint-disable-next-line` requires extremely sound justification documented in a comment above the line.

## 12. Refactoring Guidelines
- **No Functional Changes:** When refactoring for structure or performance, the application's observable output must remain mathematically identical.
- **Incremental Verification:** Refactor incrementally in extremely small steps. Verify rendering and behavior after each atomic change.
- **Dead Code Detection:** If you replace a component, hunt down and rigorously delete the old component and any of its orphaned dependencies.

## 13. AI Code Generation Rules (Strict AI Instructions)
- **Absolute Adherence:** The AI must read and internalize this file before every major refactor or feature generation.
- **No Hallucinated Dependencies:** The AI must **ONLY** use dependencies physically present in `package.json`. If a required dependency is missing, the AI MUST request permission from the user to install it.
- **Complete Solutions Without Placeholders:** The AI MUST output fully implemented code. Using lazy placeholder comments like `// implement logic here`, `// ... rest of the code`, or `// add error handling` is strictly prohibited. Output the full functional file.
- **Context Awareness:** The AI must proactively use tools (`grep_search`, `view_file`) to understand the surrounding project context, matching existing code styles, identifying shared utility wrappers (e.g., checking if `lib/utils` exports `cn`), and leveraging already existing UI components before generating new ones from scratch.
