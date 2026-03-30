export interface CourseOutlineItem {
    classNumber: number;
    title: string;
    videoLink: string;
    videoThumbnail?: string;
    videoDuration: string;
    materialsInformation: string;
}

export const beatGreQuantOutlineData: CourseOutlineItem[] = [
    {
        classNumber: 1,
        title: "Course Introduction & Geometry Theory",
        videoLink: "https://www.youtube.com/watch?v=lT2A3Zzy4p0",
        videoThumbnail: "https://img.youtube.com/vi/e185bqfPw6Y/hqdefault.jpg",
        videoDuration: "1hr",
        materialsInformation: "Manhattan 5 LB",
    },
    {
        classNumber: 2,
        title: "Triangles, Circles & Cylinders, Polygons & Rectangular Solids",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        videoThumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoDuration: "1hr 30m",
        materialsInformation: "Manhattan 5 LB - Geometry",
    },
    {
        classNumber: 3,
        title: "Coordinate Geometry & 3D Shapes",
        videoLink: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
        videoThumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "ETS Official Guide - Math Review",
    },
    {
        classNumber: 4,
        title: "Arithmetic & Number Properties",
        videoLink: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        videoThumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
        videoDuration: "1hr 15m",
        materialsInformation: "Manhattan 5 LB - Arithmetic",
    },
    {
        classNumber: 5,
        title: "Algebra: Linear & Quadratic Equations",
        videoLink: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        videoThumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
        videoDuration: "1.5hrs",
        materialsInformation: "Nova's GRE Math Prep",
    },
    {
        classNumber: 6,
        title: "Word Problems & Rates",
        videoLink: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
        videoThumbnail: "https://img.youtube.com/vi/V-_O7nl0Ii0/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "Manhattan 5 LB - Word Problems",
    },
    {
        classNumber: 7,
        title: "Data Interpretation & Statistics",
        videoLink: "https://www.youtube.com/watch?v=f2V5_Xy-Rcw",
        videoThumbnail: "https://img.youtube.com/vi/f2V5_Xy-Rcw/maxresdefault.jpg",
        videoDuration: "1hr 45m",
        materialsInformation: "ETS Official Guide - Data Analysis",
    },
    {
        classNumber: 8,
        title: "Probability, Combinatorics & Overlapping Sets",
        videoLink: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        videoThumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "Manhattan Math Strategy Guides",
    }
];
