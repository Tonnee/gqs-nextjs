import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Test Preparation | GRE Quant School",
    description: "Preparation resources for Quant, Verbal, and AWA.",
};

export default function PrepPage() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-primary-deep sm:text-5xl">
                        Test Preparation Hub
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Find specialized study materials categorized across Quantitative, Verbal, and Analytical Writing sections.</p>
                </div>
            </section>
        </main>
    );
}
