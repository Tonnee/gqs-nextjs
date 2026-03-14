import Link from "next/link";
import { ReactNode } from "react";

export interface SocialIconProps {
    icon: ReactNode;
    link: string;
    ariaLabel?: string;
}

export default function SocialIcon({ icon, link, ariaLabel }: SocialIconProps) {
    return (
        <div className="w-[55px] h-[55px] bg-white/10 rounded-full flex justify-center items-center">
            <Link href={link} aria-label={ariaLabel} className="text-2xl text-white hover:text-accent ease-linear duration-200">{icon}</Link>
        </div>
    );
}