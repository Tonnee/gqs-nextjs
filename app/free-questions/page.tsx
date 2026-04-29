import type { Metadata } from "next";
import LogoHero from "@/components/ui/logo-hero";
import QuestionsList from "@/features/free-questions/components/questions-list";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "Free Questions | GRE Quant School",
    description: "Practice with sample GRE Quant questions for free.",
};

export default function FreeQuestionsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <LogoHero
                backgroundImage="/images/logo-page-banner.png"
                title={
                    <>
                        <span>
                            Free Practice
                            <br />
                        </span>
                        <span>
                            Questions
                        </span>
                    </>
                }
                subtitle="1000 questions with Answers"
            />
            <QuestionsList />
            <VisitSocial />
            <Contact/>
        </main>
    );
}
