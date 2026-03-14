# Repository Audit & Refactoring Plan

Full audit of **gqs-nextjs** against [project-rules.md](file:///f:/gqs-nextjs/project-rules.md), factoring in strict adherence to folder structures, naming conventions, and code architecture.

---

## 1. Folder Structure & Architecture Violations (Strict)

> Rule §2: Follow a strictly feature-based architecture... `app/` is for pages/layouts only... `components/ui/` is for Primitive generic UI elements. Feature-specific components remain co-located with their features.

### Current structure vs. required

```text
Current                          Required (project-rules §2)
─────────────────────────        ─────────────────────────
app/_sections/                   ✗ Not in the spec. Feature UI must move to `features/home`
_data/                (empty)    ✗ Empty & not in the spec
                                 features/  — missing entirely
components/layout/VisitChannel   ✗ Not a global layout. Move to `features/home`
components/layout/Contact        ✗ Not a global layout. Move to `features/home`
components/layout/HomeFaq        ✗ Not a global layout. Move to `features/home`
```

### Severe Component Misclassifications

The following complex, domain-specific components are improperly placed in primitive UI or Layout folders:

| File | Current Location | Correct Location |
|------|------------------|------------------|
| `BatchCard.tsx` | `components/ui` | `features/home/components/` |
| `ClassCard.tsx` | `components/ui` | `features/home/components/` |
| `ReviewCard.tsx` | `components/ui` | `features/home/components/` |
| `VisitChannel.tsx` | `components/layout/` | `features/home/components/` |
| `Contact.tsx` | `components/layout/` | `features/home/components/` |
| `HomeFaq.tsx` | `components/layout/` | `features/home/components/` |

### Recommended architecture actions
- [x] Create a `features/home/components/` directory (Domain-Driven Design).
- [x] Move all files from `app/_sections/` to `features/home/components/`.
- [x] Move specific domain cards from `components/ui/` to `features/home/components/`.
- [x] Move specific landing page sections from `components/layout/` to `features/home/components/`.
- [x] Delete the empty `_data/` directory.
- [x] Delete `FooterLinks.tsx` (unused code violation, Rule §12).

---

## 2. Naming Convention Violations (Rule §4)

> Rule §4: "Files and Folders: ALWAYS use `kebab-case` (e.g., `user-profile.tsx`, `components/auth/`)."

Virtually every file in this project violates this rule by using `PascalCase` or `camelCase` for file names.

### Actions Required (Mass Renaming)
Every single component file must be completely renamed to `kebab-case`. Examples:
- `components/ui/Navbar.tsx` → `components/ui/navbar.tsx`
- `components/ui/ClassCard.tsx` → `features/home/components/class-card.tsx`
- `app/_sections/DemoClasses.tsx` → `features/home/components/demo-classes.tsx`
- `data/demoClassData.ts` → `data/demo-class-data.ts`
- `data/homeFaqData.ts` → `data/home-faq-data.ts`
- `data/materPieceData.ts` → (Delete entirely, duplicate of `master-piece-data.ts`)

---

## 3. Server Component Rule Violations

> Rule §3: **Server by default.** Only use `"use client"` when hooks/interactivity are strictly required. Push client boundaries **as far down** as possible.

| File | `"use client"`? | Verdict |
|------|:---:|---------|
| `Banner.tsx` | ✅ | **Justified** — uses `useState` for modal + `useEffect` for body scroll lock |
| `Navbar.tsx` | ✅ | **Justified** — uses `useState` for mobile menu toggle |
| `CtaButton.tsx`| ✅ | **Justified** — uses `useState`, `useRef`, mouse event handlers |
| `FaqAccordion.tsx`| ✅ | **Justified** — uses `useState`, `useRef`, `useEffect` |
| `master-pieces.tsx`| ✅ | ⚠️ **Only needed because of `react-slick` Slider.** Consider loading dynamically via `next/dynamic` to shrink the client bundle (Rule §9) |

**No unnecessary `"use client"` markers found** — all 5 are justified by hooks/interactivity.

---

## 4. DRY Violations (Duplicated Logic)

### 4a. Duplicate data files
**Violation:** `materPieceData.ts` and `master-piece-data.ts` are identical except for slightly different image paths.
**Action:** Delete `materPieceData.ts`. Ensure `master-pieces.tsx` consumes the correct constant.

### 4b. Card component patterns
`BatchCard.tsx` and `ClassCard.tsx` share heavily duplicated DOM structure. Both render a rounded container, absolute image, and same `CtaButton` anchor.
**Action:** Consider extracting a simple `card-shell.tsx` primitive, or prioritize unified structural CSS via `cn()`.

### 4c. Inline data
- Data constants `NAV_LINKS` (in `Navbar.tsx`) and `defaultLeft` / `defaultRight` (in `Header.tsx`) violate Rule §7 (Data Organization).
**Action:** Extract to `data/nav-links.ts` and `data/announcements.ts`.

---

## 5. Improper Tailwind Usage

### 5a. Direct `clsx` usage instead of `cn()`
> Rule §5: **ALWAYS use `cn` (clsx + tailwind-merge) for dynamic class names**. 

**Violation:** `lib/utils.ts` exports `cn()` correctly, but 7 files directly import `clsx` and ignore `twMerge`: `ClassCard`, `ReviewCard`, `Review`, `CtaButton`, `Container`, `CenterText`.
**Action:** Replace all `clsx` imports with `import { cn } from "@/lib/utils"` and swap usages.

### 5b. Template literal class merging
**Violation:** Many files use raw template literals `` `${className}` `` without any merging utility. Notable offenders: `BatchCard`, `DualText`, `Heading`, `Header`, and multiple lines in `Navbar`.
**Action:** Refactor all instances to use `cn()`.

---

## 6. TypeScript Issues (Rule §6)

### 6a. Untyped data files
**Violation:** `demoClassData.ts`, `reviewcard-data.ts`, `footer-link-data.ts`, `master-piece-data.ts` have no explicit types. Using `any` or relying on broad structural inference limits type safety.
**Action:** Define strict shape types (`DemoClassItem[]`, etc.) and annotate all exports.

### 6b. Inline type annotations and Weak typing
**Violation:** `Footer.tsx` uses verbose, complex inline mapping types. `Heading.tsx` and `SectionHeading.tsx` map `level` to `number` (which accepts `99`), instead of an explicit union (`1 | 2 | 3 | 4 | 5 | 6`).
**Action:** Extract standard `<Heading>` props to a strict union type. Remove inline typings inside the `<Footer>` mapping once data files are typed correctly.

---

## 7. Accessibility Gaps

| File | Issue | Rule |
|------|-------|------|
| `Header.tsx` | Uses `<div role="region">` as root — should be `<header>` | §8 |
| `SocialIcon.tsx` | No `aria-label` on social link | §8 |
| `Heading.tsx` | Wraps in unnecessary `<>` fragment | §11 KISS |

---

## 8. Performance Observations

| File | Issue | Rule |
|------|-------|------|
| `Banner.tsx`| `<Image>` uses static import but **missing `width`/`height` or `fill`** — relies completely on CSS size | §9 |
| `master-pieces.tsx`| `react-slick` is imported directly into the client bundle - Should use `next/dynamic` | §9 |

---

## Summary — Strict Prioritized Execution Plan

All refactoring must occur sequentially, verifying build success at every atomic change.

### Phase 1: Preparation & Typing
1. [x] Delete empty `_data/` directory.
2. [x] Delete `FooterLinks.tsx` and `materPieceData.ts`.
3. [x] Create explicit TypeScript interfaces for all data files in `data/`.
4. [x] Extract `NAV_LINKS` and header announcements into `data/`.
5. [x] Fix `Heading` + `SectionHeading` `level` types to a strict `1 | 2 | 3 | 4 | 5 | 6` union.

### Phase 2: Domain-Driven Re-architecture & Naming (The Great Rename)
1. [x] Create directory: `features/home/components/`.
2. [x] Move and rename every component file from `app/_sections/`, `components/ui/`, and `components/layout/` to exactly match `kebab-case` convention.
3. [x] Fix all broken imports project-wide following the rename.

### Phase 3: Tailwind `cn()` Hardening
1. [x] Sweep the entire codebase. Remove all direct imports of `clsx`.
2. [x] Convert all instances of `` `... ${className}` `` block concatenations into `cn(..., className)` calls.

### Phase 4: Semantics & Accessibility
1. [x] Convert the root `<div>` in `header.tsx` to `<header>`.
2. [x] Add `aria-label` attributes to social networking links.
3. [x] Optimize `<Image>` tracking in `banner.tsx`.
4. [x] Change the `react-slick` import to Next's `dynamic` import to chop the client payload size.

### Phase 5: Final Architectural Polish (Rule §2, §3, §5)
1. [x] Move `header.tsx` and `navbar.tsx` from `components/ui/` to `components/layout/`.
2. [x] Fix class concatenation in `app/layout.tsx` using `cn()`.
3. [x] Extract `VideoModal` from `banner.tsx` into its own file.

### Verification Plan
```bash
npm run build && npm run lint
```
Every phase must result in ZERO warnings and ZERO errors. Run the dev server locally to confirm no layout shifts.

---

### Step-by-Step Execution Order (Phase 5)

1. [x] **Move Layout Components**: Relocate `header.tsx` and `navbar.tsx` to `components/layout/`.
2. [x] **Update Layout Imports**: Update `app/layout.tsx` to point to the new locations.
3. [x] **Refactor HTML Classes**: Update `app/layout.tsx` to use `cn()` for the `<html>` tag.
4. [x] **Extract VideoModal**: Create `features/home/components/video-modal.tsx` and migrate logic from `banner.tsx`.
5. [x] **Update Banner**: Refactor `banner.tsx` to use the new `VideoModal` component.
6. [x] **Final Verification**: Run `npm run build` to ensure project stability.
