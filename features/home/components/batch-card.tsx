import Image, { StaticImageData } from "next/image";
import DualText from "@/components/ui/dual-text";
import { CtaButton } from "@/components/layout/cta-button";
import { cn } from "@/lib/utils";

interface BatchCardProps {
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

export default function BatchCard({
    imgSrc,
    imgAlt,
    courseName,
    courseLevel,
    startDate,
    days,
    time,
    courseLink,
    className,
}: BatchCardProps) {
    return (
        <article className={cn("bg-white p-9 rounded-3xl flex flex-col h-full", className)}>
                <div className="relative w-full h-[290px] rounded-xl overflow-hidden shrink-0">
                    <Image
                        src={imgSrc}
                        alt={imgAlt || "Batch course image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>

                <p className="font-base tracking-widest text-accent mt-[34px]">
                    {courseLevel}
                </p>
                <h4 className="font-raleway text-2xl font-extrabold text-ash tracking-wider mt-[14px]">
                    {courseName}
                </h4>

                <div className="mt-[28px] mb-[14px] flex-1">
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