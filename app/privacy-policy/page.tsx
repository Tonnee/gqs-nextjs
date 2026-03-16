import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | GRE Quant School",
    description: "How we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Privacy Policy
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>We are fully committed to protecting your privacy online. Read our policy to understand your data rights.</p>
                </div>
            </section>
        </main>
    );
}
