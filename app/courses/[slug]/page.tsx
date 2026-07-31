import { notFound } from "next/navigation";
import { getCoursesServer } from "@/features/courses/data/courses-server";
import { courseData } from "@/features/home/data/course-data";
import CourseHero from "@/features/courses/components/course-hero";
import CourseMaterials from "@/features/courses/components/course-materials";
import CourseDetails from "@/features/courses/components/course-details";
import CourseAccordion from "@/features/courses/components/course-accordion";
import CourseMentor from "@/features/courses/components/mentor";
import DemoClasses from "@/features/home/components/demo-classes";
import CoursePayment from "@/features/courses/components/payment";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const courses = getCoursesServer();
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CoursePage({ params }: PageProps) {
    const resolvedParams = await params;
    const courses = getCoursesServer();
    let course = courses.find((c) => c.slug === resolvedParams.slug);

    if (!course) {
        course = courseData.find((c) => c.slug === resolvedParams.slug);
    }

    if (!course) {
        notFound();
    }

    return (
        <main>
            <CourseHero course={course} />
            <CourseMaterials
                materials={course.materials}
                showBooks={course.showBooks}
                books={course.books}
            />
            <CourseDetails course={course} />
            {course.courseOutline && course.courseOutline.length > 0 && (
                <CourseAccordion courseOutline={course.courseOutline} />
            )}
            <CourseMentor />
            <DemoClasses />
            <CoursePayment course={course} />
        </main>
    );
}
