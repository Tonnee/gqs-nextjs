import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verbal Prep | GRE Quant School",
    description: "Verbal reasoning strategies and vocabulary builders.",
};

export default function VerbalPrepPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Verbal Preparation
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Improve reading comprehension and master the vocabulary necessary for Sentence Equivalence and Text Completion.</p>
                </div>
            </section>
        </main>
    );
}
