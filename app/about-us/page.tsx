import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | GRE Quant School",
    description: "The story behind GRE Quant School and our mission.",
};

export default function AboutUsPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        About Us
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Discover our mission to make high-quality GRE preparation accessible and effective for everyone.</p>
                </div>
            </section>
        </main>
    );
}
