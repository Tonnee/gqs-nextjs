"use client";

import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    baseColorClass?: string;
    hoverColorClass?: string;
    textColorClass?: string;
}

export function CtaButton({ 
    href, 
    children, 
    className, 
    onClick,
    baseColorClass = "bg-accent",
    hoverColorClass = "bg-primary",
    textColorClass = "text-white hover:text-white"
}: CtaButtonProps) {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsHovered(true);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsHovered(false);
    };

    return (
        <Link
            ref={buttonRef}
            href={href}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "group relative overflow-hidden rounded-full font-normal shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-block text-center transition-colors duration-500 ease-out",
                baseColorClass,
                textColorClass,
                className
            )}
        >
            <span
                className={cn(
                    "pointer-events-none absolute z-0 rounded-full transition-transform duration-500 ease-out",
                    hoverColorClass
                )}
                style={{
                    width: "1px",
                    height: "1px",
                    left: hoverPos.x,
                    top: hoverPos.y,
                    transform: isHovered ? "translate(-50%, -50%) scale(500)" : "translate(-50%, -50%) scale(0)",
                }}
            />
            <span className="relative z-10">
                {children}
            </span>
        </Link>
    );
}
