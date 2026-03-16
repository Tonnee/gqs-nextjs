import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Beat KMF's 1147 Quant Questions | GRE Quant School",
    description: "Detailed breakdown and solutions for KMF's 1147 Quant questions.",
};

export default function KmfQuestionsPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Beat KMF&apos;s 1147 Quant Questions
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Master the most challenging KMF math problems with our comprehensive video explanations and shortcut techniques.</p>
                </div>
            </section>
        </main>
    );
}
