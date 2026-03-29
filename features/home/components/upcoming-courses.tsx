import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import { courseData } from "@/features/home/data/course-data";
import CourseCard from "./course-card";

export default function UpcomingCourses() {
    return (
        <section className="pt-32 pb-36 bg-background-subtle">
            <Container>
                <SectionHeading
                    level={2}
                    headingText="Upcoming Courses"
                    topText="Schedule"
                    className="text-center text-primary tracking-wider"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-16">
                    {courseData.map((course) => (
                        <CourseCard
                            key={course.slug}
                            imgSrc={course.imgSrc}
                            imgAlt={course.imgAlt}
                            courseName={course.courseName}
                            courseLevel={course.courseLevel}
                            startDate={course.startDate}
                            days={course.days}
                            time={course.time}
                            courseLink={course.courseLink}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}