"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import GoToTop from "@/components/ui/go-to-top";

export function PublicLayout({
    children,
    header,
}: {
    children: React.ReactNode;
    header?: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <>
            {header}
            <Navbar />
            {children}
            <Footer />
            <GoToTop />
        </>
    );
}
