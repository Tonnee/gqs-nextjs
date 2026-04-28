import Contact from "@/features/home/components/contact";
import VisitChannel from "@/features/home/components/visit-channel";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | GRE Quant School",
    description: "Get in touch with the GRE Quant School support team.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <VisitChannel 
                headingText="14K followers and counting - Join our facebook group to get the latest updates."
                descriptionText="Explore our Facebook group for expert tips, problem-solving strategies, and free GRE Quant lessons. Watch, learn, and practice with engaging videos designed to boost your preparation. Subscribe now to stay updated and take your GRE prep to the next level!"
                ctaText="Join our Facebook Group"
            />
            <Contact />
        </main>
    );
}
