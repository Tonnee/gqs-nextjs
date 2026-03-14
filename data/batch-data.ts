export interface BatchInfo {
    slug: string;
    imgSrc: string;
    imgAlt: string;
    courseName: string;
    courseLevel: string;
    startDate: string;
    days: string;
    time: string;
    courseLink: string;
}

export const batchData: BatchInfo[] = [
    {
        slug: "beat-gre-quant",
        imgSrc: "/images/upcoming-batches/1.png",
        imgAlt: "Beat GRE Quant in 2 Months",
        courseName: "Beat GRE Quant in 2 Months",
        courseLevel: "Basic to Advance",
        startDate: "April 15, 2025",
        days: "Monday - Friday",
        time: "6:00 PM - 8:00 PM",
        courseLink: "#",
    },
    {
        slug: "beat-kmf",
        imgSrc: "/images/upcoming-batches/2.png",
        imgAlt: "Beat KMF's 1147 Quant Questions",
        courseName: "Beat KMF's 1147 Quant Questions",
        courseLevel: "Basic to Advance",
        startDate: "June 30, 2025",
        days: "Monday - Friday",
        time: "6:00 PM - 8:00 PM",
        courseLink: "#",
    },
    {
        slug: "mock-test",
        imgSrc: "/images/upcoming-batches/3.png",
        imgAlt: "Gre Quant Mock Test Course",
        courseName: "Gre Quant Mock Test Course",
        courseLevel: "Advance",
        startDate: "April 15, 2025",
        days: "Monday - Friday",
        time: "6:00 PM - 8:00 PM",
        courseLink: "#",
    },
];
