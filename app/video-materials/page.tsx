import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Materials | GRE Quant School",
    description: "Library of instructional videos for GRE Quant concepts.",
};

export default function VideoMaterialsPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Video Materials
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Access our extensive library of recorded problem-solving sessions and concept breakdowns.</p>
                </div>
            </section>
        </main>
    );
}
