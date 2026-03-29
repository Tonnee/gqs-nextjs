import Image from "next/image";
import { CtaButton } from "@/components/layout/cta-button";
import Heading from "@/components/ui/heading";
import DualText from "@/components/ui/dual-text";
import { type CourseInfo } from "@/features/home/data/course-data";

// ---------------------------------------------------------------------------
// Banner — main section component
// ---------------------------------------------------------------------------

interface CourseHeroProps {
    course: CourseInfo;
}

export default function CourseHero({ course }: CourseHeroProps) {
    return (
        <section className="bg-primary w-full min-h-203.5 relative">
            <div className="flex flex-col xl:flex-row items-center w-full h-full min-h-203.5">

                {/* Image + play button */}
                <div className="w-full xl:w-1/2 h-125 xl:h-203.5 relative">
                    <Image
                        src={course.imgSrc}
                        alt={`${course.courseName} Banner`}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                    />
                </div>

                {/* Copy */}
                <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 md:px-12 xl:pl-28 xl:pr-8 py-16 xl:py-0">
                    <div className="max-w-3xl">
                        <p className="font-poppins text-accent text-base font-medium tracking-widest uppercase">
                            {course.courseLevel}
                        </p>
                        <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold tracking-widest leading-tight text-white/90 mb-12" >
                            {course.courseName}
                        </Heading>
                        <div>
                            <p className="font-poppins text-white text-xl font-medium tracking-widest uppercase mb-5">Upcoming Batch</p>

                            <DualText
                                lightText="Starting From:"
                                boldText={course.startDate}
                                lightColor="text-background-subtle/60"
                                boldColor="text-background-subtle"
                            />
                            <DualText
                                lightText="Days:"
                                boldText={course.days}
                                lightColor="text-background-subtle/60"
                                boldColor="text-background-subtle"
                            />
                            <DualText
                                lightText="Time:"
                                boldText={course.time}
                                lightColor="text-background-subtle/60"
                                boldColor="text-background-subtle"
                            />
                        </div>
                        <div className="mt-10 md:mt-20 text-white uppercase flex flex-col sm:flex-row items-start sm:items-center w-max rounded-full sm:pr-2 sm:py-2">
                            <CtaButton
                                href="/enroll"
                                className="w-max sm:w-auto py-3 px-6 mr-6 font-poppins text-base font-medium capitalize whitespace-nowrap"
                                baseColorClass="bg-white"
                                textColorClass="text-primary hover:text-white"
                                hoverColorClass="bg-accent"
                            >
                                Join Today
                            </CtaButton>

                            <span className="text-sm md:text-base text-left mb-4 sm:mb-0">
                                Get <span className="text-accent font-semibold mx-1">50% discount</span> on course fee
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}