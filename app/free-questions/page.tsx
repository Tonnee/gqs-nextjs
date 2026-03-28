import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Questions | GRE Quant School",
    description: "Practice with sample GRE Quant questions for free.",
};

export default function FreeQuestionsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-primary-deep sm:text-5xl">
                        Free Practice Questions
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Test your current skills with hand-picked practice questions from our curriculum.</p>
                </div>
            </section>
        </main>
    );
}
