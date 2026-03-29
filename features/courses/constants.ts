import { CourseInfo } from "@/features/home/data/course-data";

export const getCourseDetailsIcons = (course: CourseInfo) => [
    {
        iconSrc: "/images/coures-details-icons/1.png",
        text: "Limited students \nin a batch",
    },
    {
        iconSrc: "/images/coures-details-icons/2.png",
        text: "Recording of the \nmissed classes",
    },
    {
        iconSrc: "/images/coures-details-icons/3.png",
        text: "Practice test \nbefore every class",
    },
    {
        iconSrc: "/images/coures-details-icons/4.png",
        text: `Solving ${course.solvingQues} \nquestions`,
    },
    {
        iconSrc: "/images/coures-details-icons/5.png",
        text: "Free online \nmaterials",
    },
    {
        iconSrc: "/images/coures-details-icons/6.png",
        text: `${course.classDuration} hours long live \nclass`,
    },
    {
        iconSrc: "/images/coures-details-icons/7.png",
        text: `${course.classFrequency} classes per \nweek`,
    },
    {
        iconSrc: "/images/coures-details-icons/8.png",
        text: `${course.totalClasses} classes to \ncover all topics`,
    },
];
