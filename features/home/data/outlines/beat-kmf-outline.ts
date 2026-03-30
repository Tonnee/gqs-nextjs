export interface CourseOutlineItem {
    classNumber: number;
    title: string;
    videoLink: string;
    videoThumbnail?: string;
    videoDuration: string;
    materialsInformation: string;
}

export const beatKmfOutlineData: CourseOutlineItem[] = [
    {
        classNumber: 1,
        title: "Introduction to KMF Pattern & Strategies",
        videoLink: "https://www.youtube.com/watch?v=lT2A3Zzy4p0",
        videoThumbnail: "https://img.youtube.com/vi/lT2A3Zzy4p0/maxresdefault.jpg",
        videoDuration: "1hr 15m",
        materialsInformation: "KMF Quant Section - Introduction",
    },
    {
        classNumber: 2,
        title: "Algebraic Expressions & Complex Equations",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        videoThumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoDuration: "1.5hrs",
        materialsInformation: "KMF Quant Set 1 to 5",
    },
    {
        classNumber: 3,
        title: "Advanced Geometry Question Walkthrough",
        videoLink: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
        videoThumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "KMF Quant Set 6 to 10",
    },
    {
        classNumber: 4,
        title: "Word Problems & Tricky Translations",
        videoLink: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        videoThumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
        videoDuration: "1hr 45m",
        materialsInformation: "KMF Quant Set 11 to 15",
    },
    {
        classNumber: 5,
        title: "Data Interpretation Analysis",
        videoLink: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        videoThumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
        videoDuration: "1hr 30m",
        materialsInformation: "KMF Quant Set 16 to 20",
    },
    {
        classNumber: 6,
        title: "Statistics & Combinatorics Deep Dive",
        videoLink: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        videoThumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "KMF Quant Set 21 to 25",
    }
];
