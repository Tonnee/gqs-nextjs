import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | GRE Quant School",
    description: "Website terms of service and usage conditions.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Terms and Conditions
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Please rigorously review the terms of service that govern your use of our platform.</p>
                </div>
            </section>
        </main>
    );
}
