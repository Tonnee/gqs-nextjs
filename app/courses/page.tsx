import type { Metadata } from "next";
import CourseHero from "@/features/courses/components/course-hero";

export const metadata: Metadata = {
    title: "Our Courses | GRE Quant School",
    description: "Browse our comprehensive GRE Quant courses to ace your exam.",
};

export default function CoursesPage() {
    return (
        <>
            <CourseHero />
        </>
    );
}
