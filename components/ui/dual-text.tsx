import { cn } from "@/lib/utils";

interface DualTextProps {
    lightText: string;
    boldText: string;
    boldColor?: string;
    lightColor?: string;
    fontClass?: string;
    distanceBottom?: string;
}

export default function DualText({
    lightText,
    boldText,
    boldColor = "text-black",
    lightColor = "text-[#747474]",
    fontClass = "text-lg",
    distanceBottom = "mb-[14px]",
}: DualTextProps) {
    return (
        <p className={cn(fontClass, distanceBottom, "font-poppins tracking-widest")}>
            <span className={cn("font-normal", lightColor)}>{lightText}</span>
            <span className={cn("font-semibold", boldColor)}>{boldText}</span>
        </p>
    );
}