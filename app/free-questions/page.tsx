import type { Metadata } from "next";
import FreeQuestionsHero from "@/features/free-questions/components/free-questions-hero";
import QuestionsList from "@/features/free-questions/components/questions-list";
import VisitChannel from "@/features/home/components/visit-channel";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "Free Questions | GRE Quant School",
    description: "Practice with sample GRE Quant questions for free.",
};

export default function FreeQuestionsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <FreeQuestionsHero />
            <QuestionsList />
            <VisitChannel />
            <Contact/>
        </main>
    );
}
