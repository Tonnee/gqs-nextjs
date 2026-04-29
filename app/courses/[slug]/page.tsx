import { notFound } from "next/navigation";
import { courseData } from "@/features/home/data/course-data";
import CourseHero from "@/features/courses/components/course-hero";
import CourseMaterials from "@/features/courses/components/course-materials";
import CourseDetails from "@/features/courses/components/course-details";
import CourseAccordion from "@/features/courses/components/course-accordion";
import CourseMentor from "@/features/courses/components/mentor";
import DemoClasses from "@/features/home/components/demo-classes";
import CoursePayment from "@/features/courses/components/payment";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

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
            {course.courseOutline && course.courseOutline.length > 0 && (
                <CourseAccordion courseOutline={course.courseOutline} />
            )}
            <CourseMentor />
            <DemoClasses/>
            <CoursePayment course={course} />
            <VisitSocial />
            <Contact/>
        </main>
    );
}
