import type { Metadata } from "next";
import CourseHero from "@/features/courses/components/course-hero";
import { courseData } from "@/features/home/data/course-data";
import CourseMaterials from "@/features/courses/components/course-materials";
import CourseDetails from "@/features/courses/components/coures-details";

export const metadata: Metadata = {
    title: "Our Courses | GRE Quant School",
    description: "Browse our comprehensive GRE Quant courses to ace your exam.",
};

export default function CoursesPage() {
    return (
        <>
            <CourseHero course={courseData[0]} />
            <CourseMaterials materials={courseData[0].materials} />
            <CourseDetails course={courseData[0]} />
        </>
    );
}
