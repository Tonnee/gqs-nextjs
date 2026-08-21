import { cn } from "@/lib/utils";

import { HeadingLevel } from "@/types";

export interface HeadingProps {
    level: HeadingLevel;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function DynamicHeading({
    level,
    children,
    className,
    id,
}: HeadingProps) {
    const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return (
        <Tag id={id} className={cn("font-raleway text-4xl font-bold", className)}>
            {children}
        </Tag>
    );
}