export interface CourseOutlineItem {
    classNumber: number;
    title: string;
    videoLink: string;
    videoThumbnail?: string;
    videoDuration: string;
    materialsInformation: string;
}

export const mockTestOutlineData: CourseOutlineItem[] = [
    {
        classNumber: 1,
        title: "Mock Test 1: Full-Length Practice Analysis",
        videoLink: "https://www.youtube.com/watch?v=lT2A3Zzy4p0",
        videoThumbnail: "https://img.youtube.com/vi/lT2A3Zzy4p0/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "Mock Test 1 PDF, Answer Key",
    },
    {
        classNumber: 2,
        title: "Mock Test 2: Identifying Weaknesses",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        videoThumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "Mock Test 2 PDF, Detailed Solutions",
    },
    {
        classNumber: 3,
        title: "Mock Test 3: Time Management Strategies",
        videoLink: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
        videoThumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        videoDuration: "2hrs 30m",
        materialsInformation: "Mock Test 3 PDF, Pacing Guide",
    },
    {
        classNumber: 4,
        title: "Mock Test 4: Approaching Difficult Questions",
        videoLink: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        videoThumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
        videoDuration: "2hrs",
        materialsInformation: "Mock Test 4 PDF, Hard Question Tracker",
    },
    {
        classNumber: 5,
        title: "Mock Test 5: Final Review & Strategy Setting",
        videoLink: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        videoThumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
        videoDuration: "2hrs 15m",
        materialsInformation: "Mock Test 5 PDF, Exam Day Checklist",
    }
];
