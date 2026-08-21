export interface NavLink {
    name: string;
    href: string;
}

export interface FooterLinkItemType {
    link: string;
    text: string;
}

export interface FooterLinkSection {
    title: string;
    links: FooterLinkItemType[];
}

export const NAV_LINKS: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "KMF Questions", href: "/kmf-questions" },
    { name: "Video Materials", href: "/video-materials" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
];

export interface KmfLinkItem extends NavLink {
    level: string;
    questionCount: string;
    format: string;
    type: string;
}

export const KMF_LINKS: KmfLinkItem[] = [
    {
        name: "KMF latest 1794",
        href: "/kmf-questions/kmf-latest-1794",
        level: "GRE Quant Bank",
        questionCount: "1,794 Questions",
        format: "Answers & Solutions",
        type: "Topic-wise Practice",
    },
    {
        name: "KMF 1147",
        href: "/kmf-questions/kmf-1147",
        level: "Classic Quant Bank",
        questionCount: "1,147 Questions",
        format: "Answers & Solutions",
        type: "High-Frequency GRE",
    },
    {
        name: "KMF Verbal",
        href: "/kmf-questions/kmf-verbal",
        level: "Verbal Reasoning",
        questionCount: "102+ Questions",
        format: "Reading & Logic",
        type: "Full Explanations",
    },
];

export interface VideoMaterialLinkItem extends NavLink {
    category: string;
    description: string;
    duration: string;
    level: string;
}

export const VIDEO_MATERIALS_LINKS: VideoMaterialLinkItem[] = [
    {
        name: "Must Know Strategies",
        href: "/video-materials/must-know-strategies",
        category: "GRE Strategies",
        description: "Traps, silly mistakes & test day strategies",
        duration: "5 Key Lessons",
        level: "All Quant Topics",
    },
    {
        name: "Basics Sessions",
        href: "/video-materials/basics-sessions",
        category: "Foundation",
        description: "Concept reviews & formula walkthroughs",
        duration: "7 Core Modules",
        level: "Concept Mastery",
    },
    {
        name: "Confusing Topics",
        href: "/video-materials/confusing-topics",
        category: "Deep Dives",
        description: "Lines equations, interest & Venn diagrams",
        duration: "5 Deep Dives",
        level: "Advanced 165+ Prep",
    },
];

export const FOOTER_LINKS: FooterLinkSection[] = [
    {
        title: "Our Courses",
        links: [
            {
                link: "/courses/beat-gre-quant-in-2-months",
                text: "Beat GRE Quant in 2 Months",
            },
            {
                link: "/courses/kmf-1147-questions",
                text: "Beat KMF's 1147 Quant Questions",
            },
            {
                link: "/courses/mock-test",
                text: "GRE Quant Mock Test Course",
            },
        ],
    },
    {
        title: "Prep Links",
        links: [
            {
                link: "/prep/quant",
                text: "Quant Prep",
            },
            {
                link: "/prep/verbal",
                text: "Verbal Prep",
            },
            {
                link: "/prep/awa",
                text: "AWA Prep",
            },
        ],
    },
    {
        title: "General Links",
        links: [
            {
                link: "/free-questions",
                text: "Free Questions",
            },
            {
                link: "/instructor-profile",
                text: "Instructor Profile",
            },
            {
                link: "/about-us",
                text: "About Us",
            },
        ],
    },
];

export const LEGAL_LINKS = [
    {
        link: "/terms-and-conditions",
        text: "Terms and Conditions",
    },
    {
        link: "/privacy-policy",
        text: "Privacy Policy",
    },
];
