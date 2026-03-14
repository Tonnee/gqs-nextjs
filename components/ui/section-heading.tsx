import Heading from "./heading";
import { HeadingLevel } from "@/types";

interface SectionHeadingProps {
    level: HeadingLevel;
    topText: string;
    headingText: string;
    className?: string;
    align?: string;
}

export default function SectionHeading({
    level,
    topText,
    headingText,
    className,
    align = "text-center",
}: SectionHeadingProps) {
    return (
        <div className={align}>
            <p className="uppercase text-lg font-medium text-accent tracking-wider mb-6">
                {topText}
            </p>
            <Heading
                level={level}
                className={className}
            >
                {headingText}
            </Heading>
        </div>
    );
}