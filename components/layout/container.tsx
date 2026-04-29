import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    withPadding?: boolean;
}

export function Container({
    children,
    className,
    withPadding = true,
}: ContainerProps) {
    return (
        <div className={cn("w-full mx-auto max-w-405", withPadding && "px-4", className)}>
            {children}
        </div>
    );
}
