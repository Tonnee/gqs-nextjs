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
    { name: "KMF Questions", href: "/courses/kmf-1147-questions" },
    { name: "Video Materials", href: "/video-materials" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
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
