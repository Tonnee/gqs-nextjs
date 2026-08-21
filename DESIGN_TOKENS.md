# GRE Quant School - Design Tokens & Style Guide

This document establishes the **strict design tokens, component conventions, and styling rules** for the GRE Quant School Next.js project. All future pages, components, and refactors MUST adhere to these tokens without introducing new colors or arbitrary styles.

---

## 1. Typography Tokens

Defined in `app/layout.tsx` and mapped via `@theme` in `app/globals.css`:

| Token / Class | Font Family | Weights | Primary Usage |
| :--- | :--- | :--- | :--- |
| `font-poppins` / `font-sans` | **Poppins** (Google Font) | `400`, `500`, `600`, `700` | Body text, buttons, metadata labels, tags, forms |
| `font-raleway` | **Raleway** (Google Font) | `400`, `500`, `600`, `700`, `800` | Headings (`<h1>`-`<h6>`), section titles, course titles, dates |

### Typography Scale Hierarchy
* **Page Hero Heading (`<h1>`)**: `text-4xl md:text-5xl lg:text-6xl font-raleway font-bold tracking-widest leading-tight`
* **Section Heading (`<h2>`)**: `text-3xl sm:text-4xl lg:text-5xl font-raleway font-bold text-foreground-heading tracking-tight leading-tight`
* **Card Title (`<h3>` / `<h4>`)**: `text-2xl sm:text-3xl font-raleway font-bold text-foreground-heading leading-snug`
* **Section Subtitle / Badge**: `uppercase text-base sm:text-lg font-medium text-accent tracking-widest mb-3 sm:mb-6`
* **Body / Paragraph Text**: `font-poppins text-sm sm:text-base text-foreground-muted leading-relaxed`

---

## 2. Color Palette Tokens

Defined in `@theme` in `app/globals.css`:

### Primary Brand Colors
| Token Name | Hex Code | Utility Classes | Usage Description |
| :--- | :--- | :--- | :--- |
| `primary` | `#0A033C` | `bg-primary`, `text-primary`, `border-primary` | Main dark hero banners, announcement bar, footer |
| `primary-deep` | `#050027` | `bg-primary-deep`, `text-primary-deep` | High-contrast dark blue used for FAQ, student titles |
| `primary-soft` | `#0A004B` | `bg-primary-soft`, `text-primary-soft` | Supporting dark containers (e.g. Visit Social card) |
| `secondary` | `#323B53` | `text-secondary`, `bg-secondary` | Neutral slate blue supporting tone |
| `light-blue` | `#224BBE` | `bg-light-blue`, `text-light-blue` | Supporting vibrant blue tone |

### Accent Colors (Actions & Highlights)
| Token Name | Hex Code | Utility Classes | Usage Description |
| :--- | :--- | :--- | :--- |
| `accent` | `#F58655` | `bg-accent`, `text-accent`, `border-accent`, `focus-visible:outline-accent` | Primary Action Orange for buttons, active nav, badges, discount highlights |
| `accent-dark` | `#101C3D` | `bg-accent-dark`, `text-accent-dark` | Dark accent base for contact icon circles and play icons |

### Backgrounds & Surfaces
| Token Name | Hex Code | Utility Classes | Usage Description |
| :--- | :--- | :--- | :--- |
| `background` | `#FFFFFF` | `bg-white` | Standard cards, active content areas, navbar backdrop |
| `background-subtle` | `#F5FBFF` | `bg-background-subtle` | Soft ice-blue for alternating sections, course grids, review cards |
| `background-cta` | `#0D0D3F` | `bg-background-cta` | Deep CTA card background foundations |

### Foreground & Text Colors
| Token Name | Hex Code | Utility Classes | Usage Description |
| :--- | :--- | :--- | :--- |
| `foreground-heading` | `#152129` | `text-foreground-heading` | Near-black for titles, headings, and high-emphasis labels |
| `foreground-muted` | `#656565` | `text-foreground-muted` | Neutral dark gray for body descriptions, card details |
| `foreground` | `#171717` | `text-foreground` | General base text |

---

## 3. Layout & Structure Tokens

### Container Standards
* **Max Width**: `max-w-405` (`1620px` / `101.25rem`)
* **Horizontal Padding**: `px-4`
* **Reusable Component**: `<Container className="...">...</Container>` from `@/components/layout/container`

### Standard Section Spacings
* **Standard Page Section**: `py-20 lg:py-28`
* **Spacious Card Section**: `pt-32 pb-36` or `py-20 md:py-32 lg:py-40`
* **Compact Section**: `py-16 md:py-24`

### Header & Navigation
* **Top Announcement Bar**: `min-h-18 bg-primary py-3 md:py-0`
* **Sticky Navbar**: `sticky top-0 z-50 h-20 bg-white/70 backdrop-blur-md border-b border-gray-100`

---

## 4. Component Design Patterns

### 1. Buttons (`CtaButton`)
* **Geometry**: `rounded-full` (Pill shape)
* **Hover Interaction**: Radial cursor-following expanding circle animation (`duration-500 ease-out`)
* **Primary Variant**: `baseColorClass="bg-accent" hoverColorClass="bg-primary" textColorClass="text-white hover:text-white"`
* **Secondary Variant**: `baseColorClass="bg-primary" hoverColorClass="bg-accent" textColorClass="text-white hover:text-white"`
* **Hero Variant**: `baseColorClass="bg-white" hoverColorClass="bg-accent" textColorClass="text-primary hover:text-white"`

### 2. Cards (`CourseCard`, `ClassCard`, `ReviewListCard`)
* **Outer Radii**: `rounded-3xl`
* **Inner Thumbnail Radii**: `rounded-2xl` or `rounded-xl`
* **Padding**: `p-6 md:p-9`
* **Shadows & Hover**: `shadow-sm hover:shadow-md transition-all duration-300`
* **Image Hover**: `group-hover:scale-105 transition-all duration-300 ease-in-out`

### 3. Grid Row Alternation (Video Materials & Features)
* **12-Column Grid**: `grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center`
* **Standard Row**:
  * Left Media (6 cols): `lg:col-span-6 lg:row-start-1 lg:col-start-1`
  * Middle Offset: `Col 7` (1 column empty gap)
  * Right Content (5 cols): `lg:col-span-5 lg:row-start-1 lg:col-start-8`
* **Reversed Row (`isEven = true`)**:
  * Left Content (5 cols): `lg:col-span-5 lg:row-start-1 lg:col-start-1`
  * Middle Offset: `Col 6` (1 column empty gap)
  * Right Media (6 cols): `lg:col-span-6 lg:row-start-1 lg:col-start-7`

---

## 5. Do's and Don'ts

- **DO** use `<CtaButton>` for all action buttons and primary navigation calls-to-action.
- **DO** wrap full-width section contents in `<Container>` to guarantee alignment at `max-w-405`.
- **DO** use `font-raleway` for titles/numbers and `font-poppins` for body/button copy.
- **DO NOT** introduce custom ad-hoc hex colors or new arbitrary font sizes.
- **DO NOT** add dividing top/bottom borders between sections unless specified in the brand layout.
