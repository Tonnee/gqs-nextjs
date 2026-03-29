import SectionHeading from "@/components/ui/section-heading";
import CourseDetailsItem from "./course-details-item";

import { CourseInfo } from "@/features/home/data/course-data";
import { getCourseDetailsIcons } from "@/features/courses/constants";

interface CourseDetailsProps {
    course: CourseInfo;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
    if (!course || !course.solvingQues || !course.classDuration || !course.classFrequency || !course.totalClasses) {
        return null;
    }

    const details = getCourseDetailsIcons(course);

    return (
        <section className="bg-background-subtle py-16 md:py-36">
            <div className="container mx-auto px-4">
                <SectionHeading
                    level={2}
                    topText="COURSE DETAILS"
                    headingText="The Quant Course That Sets You Up for Success!"
                    className="mb-14 text-foreground-heading"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[36px]">
                    {details.map((item, index) => (
                        <CourseDetailsItem
                            key={index}
                            iconSrc={item.iconSrc}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
