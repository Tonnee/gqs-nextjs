export interface FooterLinkItemType {
    link: string;
    text: string;
}

export interface FooterLinkSection {
    title: string;
    links: FooterLinkItemType[];
}

const footerLinkData: FooterLinkSection[] = [
    {
        title: "Our Courses",
        links: [
            {
                link: "#",
                text: "Beat GRE Quant in 2 Months",
            },
            {
                link: "#",
                text: "Beat KMF's 1147 Quant Questions",
            },
            {
                link: "#",
                text: "GRE Quant Mock Test Course",
            },
        ],
    },
    {
        title: "Important Links",
        links: [
            {
                link: "#",
                text: "Quant Prep",
            },
            {
                link: "#",
                text: "Verbal Prep",
            },
            {
                link: "#",
                text: "AWA Prep",
            },
        ],
    },
    {
        title: "Support",
        links: [
            {
                link: "#",
                text: "Free  Questions",
            },
            {
                link: "#",
                text: "Instructor Profile",
            },
            {
                link: "#",
                text: "About Us",
            },
        ],
    },
];

export default footerLinkData;