import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GRE Quant Mock Test Course | GRE Quant School",
    description: "Realistic GRE Quant mock tests to evaluate your readiness.",
};

export default function MockTestPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        GRE Quant Mock Test Course
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Simulate exam day with full-length adaptive mock tests, complete with detailed performance analytics.</p>
                </div>
            </section>
        </main>
    );
}
