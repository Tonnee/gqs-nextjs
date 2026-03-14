export interface NavLink {
    name: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Course Details", href: "/course-details" }, // Active state demo
    { name: "KMF Questions", href: "/kmf-questions" },
    { name: "Video Materials", href: "/video-materials" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
];
