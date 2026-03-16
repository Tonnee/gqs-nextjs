import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Beat GRE Quant in 2 Months | GRE Quant School",
    description: "Comprehensive 2-month GRE Quant course.",
};

export default function BeatGreQuantPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Beat GRE Quant in 2 Months
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>A rigorous two-month curriculum designed to cover all topics from arithmetic to advanced data analysis.</p>
                </div>
            </section>
        </main>
    );
}
