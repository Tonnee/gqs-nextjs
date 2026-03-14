import Image, { StaticImageData } from "next/image";
import DualText from "./DualText";
import { CtaButton } from "../layout/CtaButton";
import { cn } from "@/lib/utils";
interface ClassCardProps {
    imgSrc: string | StaticImageData;
    imgAlt: string;
    classTitle: string;
    duration: string;
    classLink: string;
    className?: string;
    ctaBaseColorClass?: string;
    ctaHoverColorClass?: string;
}

export default function ClassCard({
    imgSrc,
    imgAlt,
    classTitle,
    duration,
    classLink,
    className,
    ctaBaseColorClass = "bg-primary",
    ctaHoverColorClass = "bg-accent",
}: ClassCardProps) {
    return (
        <article className={cn(
            "bg-white p-9 rounded-3xl flex flex-col h-full",
            className
        )}>
            <div className="relative w-full h-[248px] rounded-xl overflow-hidden shrink-0">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <p className="font-base tracking-widest text-accent mt-[34px]">
                Title
            </p>

            <h5 className="font-raleway text-2xl font-extrabold text-[#152129] tracking-wider mt-[14px]">
                {classTitle}
            </h5>

            <div className="mt-[8px] mb-[9px] flex-1">
                <DualText
                    lightText="Class Duration: "
                    boldText={duration}
                />
            </div>

            <div className="mt-auto flex">
                <CtaButton
                    href={classLink}
                    className="px-6 py-3"
                    baseColorClass={ctaBaseColorClass}
                    hoverColorClass={ctaHoverColorClass}
                >
                    See on YouTube
                </CtaButton>
            </div>
        </article>
    );
}