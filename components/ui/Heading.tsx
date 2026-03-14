import { cn } from "@/lib/utils";

import { HeadingLevel } from "@/types";

export interface HeadingProps {
    level: HeadingLevel;
    children: React.ReactNode;
    className?: string;
}

export default function DynamicHeading({
    level,
    children,
    className,
}: HeadingProps) {
    const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return (
        <Tag className={cn("font-raleway text-[42px] font-bold", className)}>
            {children}
        </Tag>
    );
}