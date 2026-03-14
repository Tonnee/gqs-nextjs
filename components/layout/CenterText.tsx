import { cn } from "@/lib/utils";

interface CenterTextProps {
    text: string;
    className?: string;
}

export default function CenterText({ text, className }: CenterTextProps) {
    return (
        <p
            className={cn(
                "font-poppins w-full md:w-10/12 lg:w-3/4 mx-auto text-center text-sm md:text-base font-normal text-[#656565] leading-relaxed md:leading-8",
                className
            )}
        >
            {text}
        </p>
    );
}