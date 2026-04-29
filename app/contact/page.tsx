import Contact from "@/features/home/components/contact";
import VisitSocial from "@/features/home/components/visit-social";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | GRE Quant School",
    description: "Get in touch with the GRE Quant School support team.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <VisitSocial platform="facebook" />
            <Contact />
        </main>
    );
}
