import Link from "next/link";
import { ReactNode } from "react";

export interface FooterLinkItemProps {
    link: string;
    children: ReactNode;
}

export default function FooterLinkItem({ link, children }: FooterLinkItemProps) {
    return (
        <li className="mb-8">
            <Link href={link} className="text-lg tracking-widest text-white/70 hover:text-accent ease-linear duration-200">{children}</Link>
        </li>
    );
}