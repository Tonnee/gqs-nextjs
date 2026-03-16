import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import GoToTop from "@/components/ui/go-to-top";
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
        <html lang="en" className={cn(poppins.variable, raleway.variable)}>
            <body
                className="font-sans antialiased"
            >
                <Header />
                <Navbar />
                {children}
                <Footer />
                <GoToTop />
            </body>
        </html>
    );
}
