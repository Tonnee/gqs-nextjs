import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Portal | GRE Quant School",
    description: "Backend management portal for GRE Quant School.",
};

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
