import { notFound } from "next/navigation";
import { courseData } from "@/features/home/data/course-data";
import CourseHero from "@/features/courses/components/course-hero";
import CourseMaterials from "@/features/courses/components/course-materials";
import CourseDetails from "@/features/courses/components/coures-details";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return courseData.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CoursePage({ params }: PageProps) {
    const resolvedParams = await params;
    const course = courseData.find((c) => c.slug === resolvedParams.slug);

    if (!course) {
        notFound();
    }

    return (
        <main>
            <CourseHero course={course} />
            <CourseMaterials materials={course.materials} />
            <CourseDetails course={course} />
        </main>
    );
}
