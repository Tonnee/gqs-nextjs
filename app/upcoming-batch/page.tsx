import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Upcoming Batches | GRE Quant School",
    description: "Schedule for new course intakes and live sessions.",
};

export default function UpcomingBatchPage() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-7xl">
                <header className="mb-12">
                    <h1 className="font-poppins text-4xl font-bold tracking-tight text-[#050027] sm:text-5xl">
                        Upcoming Batches
                    </h1>
                </header>
                <div className="font-raleway text-base text-neutral-600 leading-relaxed">
                    <p>Review the schedule to find dates to join our next live interactive cohort.</p>
                </div>
            </section>
        </main>
    );
}
