/**
 * GRE Quant School - Design Tokens
 * 
 * Strict single source of truth for design tokens used across the application.
 * Extracted directly from app/globals.css, app/layout.tsx, app/page.tsx, and components/.
 * DO NOT introduce new colors or unapproved styles.
 */

export const DESIGN_TOKENS = {
    /**
     * Typography configuration matching Next.js fonts in app/layout.tsx
     */
    fonts: {
        poppins: {
            variable: "--font-poppins",
            className: "font-poppins",
            weights: ["400", "500", "600", "700"] as const,
            usage: "Body text, buttons, tags, metadata, forms",
        },
        raleway: {
            variable: "--font-raleway",
            className: "font-raleway",
            weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] as const,
            usage: "Headings (H1-H6), section titles, numbers, card names, announcements",
        },
    },

    /**
     * Color palette matching @theme definitions in app/globals.css
     */
    colors: {
        primary: {
            DEFAULT: "#0A033C",
            className: "bg-primary text-primary border-primary",
            description: "Main section dark backgrounds, header announcement bar, footer",
        },
        primaryDeep: {
            DEFAULT: "#050027",
            className: "bg-primary-deep text-primary-deep border-primary-deep",
            description: "High-contrast deep blue used for FAQ, student review titles",
        },
        primarySoft: {
            DEFAULT: "#0A004B",
            className: "bg-primary-soft text-primary-soft border-primary-soft",
            description: "Supporting dark containers and cards (e.g., Visit Social banner)",
        },
        secondary: {
            DEFAULT: "#323B53",
            className: "bg-secondary text-secondary border-secondary",
            description: "Neutral slate blue supporting tone for links and subtitles",
        },
        lightBlue: {
            DEFAULT: "#224BBE",
            className: "bg-light-blue text-light-blue border-light-blue",
            description: "Supporting vibrant blue tone",
        },
        accent: {
            DEFAULT: "#F58655",
            className: "bg-accent text-accent border-accent focus-visible:outline-accent",
            description: "Primary Action Orange for CTAs, active states, badges, highlight dates",
        },
        accentDark: {
            DEFAULT: "#101C3D",
            className: "bg-accent-dark text-accent-dark border-accent-dark",
            description: "Dark accent base for contact icon bubbles and play buttons",
        },
        background: {
            DEFAULT: "#FFFFFF",
            subtle: "#F5FBFF",
            cta: "#0D0D3F",
            classNameSubtle: "bg-background-subtle",
            classNameCta: "bg-background-cta",
            description: "Subtle ice-blue for alternating section backgrounds and cards",
        },
        foreground: {
            DEFAULT: "#171717",
            heading: "#152129",
            muted: "#656565",
            classNameHeading: "text-foreground-heading",
            classNameMuted: "text-foreground-muted",
            description: "Near-black for titles; neutral gray for descriptive subtext",
        },
    },

    /**
     * Layout & Container tokens matching components/layout/container.tsx
     */
    layout: {
        container: {
            maxWidth: "max-w-405", // 1620px / 101.25rem
            padding: "px-4",
            className: "w-full mx-auto max-w-405 px-4",
        },
        sectionPadding: {
            standard: "py-20 lg:py-28",
            compact: "py-16 md:py-24",
            spacious: "pt-32 pb-36",
        },
        headerHeight: "min-h-18",
        navbarHeight: "h-20",
    },

    /**
     * Interactive Button Tokens (CtaButton)
     */
    buttons: {
        shape: "rounded-full",
        font: "font-poppins font-medium text-sm",
        variants: {
            primary: {
                base: "bg-accent",
                hover: "bg-primary",
                text: "text-white hover:text-white",
            },
            secondary: {
                base: "bg-primary",
                hover: "bg-accent",
                text: "text-white hover:text-white",
            },
            hero: {
                base: "bg-white",
                hover: "bg-accent",
                text: "text-primary hover:text-white",
            },
        },
    },

    /**
     * Border Radii Tokens
     */
    radii: {
        card: "rounded-3xl",
        thumbnail: "rounded-2xl",
        innerContainer: "rounded-xl",
        button: "rounded-full",
        badge: "rounded-full",
    },

    /**
     * Transitions and Micro-animations
     */
    animation: {
        hoverScale: "group-hover:scale-105 transition-all duration-300 ease-in-out",
        ctaRipple: "transition-transform duration-500 ease-out",
        fastTransition: "transition-colors duration-200",
    },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
