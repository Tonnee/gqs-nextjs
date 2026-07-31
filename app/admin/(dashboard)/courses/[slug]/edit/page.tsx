import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCoursesServer } from "@/features/courses/data/courses-server";
import { CourseForm } from "@/features/admin/components/course-form";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const courses = getCoursesServer();
    const course = courses.find((c) => c.slug === resolvedParams.slug);

    return {
        title: course ? `Edit ${course.courseName} | Admin Panel` : "Edit Course | Admin Panel",
        description: "Update course details, fees, schedule, and materials.",
    };
}

export default async function EditCoursePage({ params }: PageProps) {
    const resolvedParams = await params;
    const courses = getCoursesServer();
    const course = courses.find((c) => c.slug === resolvedParams.slug);

    if (!course) {
        notFound();
    }

    return <CourseForm initialCourse={course} />;
}
