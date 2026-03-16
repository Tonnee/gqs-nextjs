import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Courses | GRE Quant School",
    description: "Browse our comprehensive GRE Quant courses to ace your exam.",
};

export default function CoursesPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Our Courses
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Explore our targeted step-by-step courses formulated to help you boost your GRE Quant score.</p>
                </div>
            </section>
        </main>
    );
}
