import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AWA Prep | GRE Quant School",
    description: "Analytical Writing Assessment tips and essay grading guidelines.",
};

export default function AwaPrepPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        AWA Preparation
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Learn how to properly structure your Analytical Writing Assessment essays to score 5.0+ with ease.</p>
                </div>
            </section>
        </main>
    );
}
