import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quant Prep | GRE Quant School",
    description: "Quantitative reasoning basics and strategies.",
};

export default function QuantPrepPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Quantitative Preparation
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Review key mathematical concepts, formulas, and time-saving techniques to boost calculation speed.</p>
                </div>
            </section>
        </main>
    );
}
