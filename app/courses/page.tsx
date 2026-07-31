import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import CourseCard from "@/features/home/components/course-card";
import CourseMaterials from "@/features/courses/components/course-materials";
import CourseMentor from "@/features/courses/components/mentor";
import DemoClasses from "@/features/home/components/demo-classes";
import Contact from "@/features/home/components/contact";
import { getCoursesServer } from "@/features/courses/data/courses-server";

export const metadata: Metadata = {
    title: "All Courses | GRE Quant School",
    description: "Explore our expert-led GRE Quant courses designed to take you from basic to 170 Quant score.",
};

export default function CoursesPage() {
    const courses = getCoursesServer();

    return (
        <main className="min-h-screen bg-background-subtle font-poppins">
            {/* 1. Header Banner */}
            <section className="bg-primary text-white py-16 md:py-24">
                <Container>
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <p className="text-accent text-sm md:text-base font-semibold uppercase tracking-widest">
                            GRE Quant Preparation Batches
                        </p>
                        <h1 className="text-3xl md:text-5xl font-raleway font-bold leading-tight">
                            Master GRE Quant with Targeted Guidance
                        </h1>
                        <p className="text-white/80 text-base md:text-lg leading-relaxed">
                            From basic concepts to advanced KMF problem solving, choose the right course tailored to your target score timeline.
                        </p>
                    </div>
                </Container>
            </section>

            {/* 2. Course Cards Grid Catalog */}
            <section className="py-16 md:py-24">
                <Container>
                    <SectionHeading
                        level={2}
                        headingText="Available Courses & Upcoming Batches"
                        topText="Explore Programs"
                        className="text-center text-primary tracking-wider"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-16">
                        {courses.map((course) => (
                            <CourseCard
                                key={course.slug}
                                imgSrc={course.imgSrc}
                                imgAlt={course.imgAlt || course.courseName}
                                courseName={course.courseName}
                                courseLevel={course.courseLevel}
                                startDate={course.startDate}
                                days={course.days}
                                time={course.time}
                                courseLink={course.courseLink || `/courses/${course.slug}`}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            {/* 5. Demo Video Classes */}
            <DemoClasses />

            {/* 6. Contact & Enrollment Assistance */}
            <Contact />
        </main>
    );
}
