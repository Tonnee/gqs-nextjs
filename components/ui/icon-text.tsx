import { ReactNode } from "react";

export interface IconTextProps {
    icon: ReactNode;
    text: string;
}

export default function IconText({ icon, text }: IconTextProps) {
    return (
        <div className="flex gap-4.5 items-center mb-8 md:mb-0">
            <div className="flex h-14 w-14 rounded-full bg-accent-dark justify-center items-center text-white text-2xl font-poppins">
                {icon}
            </div>

            <p className="text-lg tracking-widest text-black">{text}</p>
        </div>
    );
}