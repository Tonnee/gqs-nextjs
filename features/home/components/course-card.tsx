import Image, { StaticImageData } from "next/image";
import DualText from "@/components/ui/dual-text";
import { CtaButton } from "@/components/layout/cta-button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CourseCardProps {
    imgSrc: string | StaticImageData;
    imgAlt: string;
    courseName: string;
    courseLevel: string;
    startDate: string;
    days: string;
    time: string;
    courseLink: string;
    className?: string;
}

export default function CourseCard({
    imgSrc,
    imgAlt,
    courseName,
    courseLevel,
    startDate,
    days,
    time,
    courseLink,
    className,
}: CourseCardProps) {
    return (
        <article className={cn("bg-white md:p-9 p-6 rounded-3xl flex flex-col h-full shadow-sm hover:shadow-md transition-all", className)}>
            {/* Clickable Image Container */}
            <Link href={courseLink} className="relative w-full h-72 rounded-xl overflow-hidden shrink-0 block group">
                <Image
                    src={imgSrc}
                    alt={imgAlt || "Batch course image"}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </Link>

            <p className="font-base tracking-widest text-accent mt-8.5">
                {courseLevel}
            </p>
            <Link href={courseLink} className="font-raleway text-2xl font-extrabold text-ash tracking-wider mt-3.5 hover:text-accent transition-all duration-300 ease-in-out">
                {courseName}
            </Link>

            <div className="mt-7 mb-3.5 flex-1">
                <DualText
                    lightText="Starting From: "
                    boldText={startDate}
                />
                <DualText
                    lightText="Days: "
                    boldText={days}
                />
                <DualText
                    lightText="Time: "
                    boldText={time}
                />
            </div>

            <div className="mt-auto flex">
                <CtaButton
                    href={courseLink}
                    className="px-6 py-3"
                    baseColorClass="bg-primary"
                    hoverColorClass="bg-accent"
                >
                    Learn More
                </CtaButton>
            </div>
        </article>
    );
}