import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { PublicLayout } from "@/components/layout/public-layout";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GRE Quant School",
    description: "GRE Quant School",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(poppins.variable, raleway.variable)} suppressHydrationWarning>
            <body
                className="font-sans antialiased"
                suppressHydrationWarning
            >
                <PublicLayout header={<Header />}>{children}</PublicLayout>
            </body>
        </html>
    );
}
