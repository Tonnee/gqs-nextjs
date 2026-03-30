import Image from "next/image";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const MENTOR_STATS = [
    { title: "Mentorship", value: "120", subtitle: "Batch", bgClass: "bg-[#F0FBFF]" },
    { title: "Success", value: "1K", subtitle: "Students", bgClass: "bg-[#FFF3EE]" },
    { title: "Reviews", value: "400", subtitle: "Positive Reviews", bgClass: "bg-[#F1FFF1]" },
];

interface StatCardProps {
    title: string;
    value: string;
    subtitle: string;
    bgClass: string;
}

function StatCard({ title, value, subtitle, bgClass }: StatCardProps) {
    return (
        <div className={cn("w-full md:w-2/12 rounded-xl flex flex-col items-center justify-center p-6", bgClass)}>
            <p className="text-accent text-xs font-medium uppercase tracking-wider mb-2">
                {title}
            </p>
            <h4 className="text-4xl md:text-5xl font-poppins font-medium text-primary mb-2">
                {value}
            </h4>
            <p className="text-primary/70 text-sm font-medium">
                {subtitle}
            </p>
        </div>
    );
}

export default function CourseMentor() {
    return (
        <section className="bg-white py-16 md:py-24">
            <Container>
                <div className="mb-10 w-full md:w-8/12">
                    <SectionHeading
                        level={2}
                        topText="INSTRUCTOR"
                        headingText="Meet Our GRE Mentor"
                        align="text-left"
                        className="text-foreground"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-9 w-full">
                    {/* Primary Mentor Card - 3/12 width */}
                    <div className="w-full md:w-3/12 bg-primary rounded-xl p-6 flex flex-col xl:flex-row gap-5 items-center xl:items-start shadow-sm">
                        <div className="relative w-24 h-24 xl:w-28 xl:h-28 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                            {/* Placeholder for mentor image, fallback to static if available */}
                            <Image
                                src="/images/sourav-simanta.png"
                                alt="Sourav Simanta"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-grow text-center xl:text-left">
                            <h3 className="text-accent font-semibold text-xl font-poppins mb-1">
                                Sourav Simanta
                            </h3>
                            <p className="text-white/80 text-xs leading-relaxed">
                                Founder & Mentor, GRE Quant School
                            </p>
                            <p className="text-white/80 text-xs leading-relaxed">
                                Quant Score: 166
                            </p>
                            <p className="text-white/80 text-xs leading-relaxed">
                                PHD Student (Admitted), UMBC, USA
                            </p>
                        </div>
                    </div>

                    {MENTOR_STATS.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            subtitle={stat.subtitle}
                            bgClass={stat.bgClass}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
