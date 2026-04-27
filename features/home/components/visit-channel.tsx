import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/layout/cta-button";

export default function VisitChannel({className}: {className?: string}) {
    return (
        <section className={`mt-20 md:mt-24 ${className}`}>
            <Container>
                <div className={`bg-primary-soft rounded-3xl px-6 py-16 md:px-12 md:py-20 lg:px-44 lg:pt-22 lg:pb-14 text-center ${className}`}>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                        96 videos and counting – dive into our growing library
                        of GRE Quant insights.
                    </h2>
                    <p className="text-sm md:text-base font-normal leading-relaxed text-white/75 mt-6 mb-10 max-w-3xl mx-auto">
                        Explore our YouTube channel for expert tips,
                        problem-solving strategies, and free GRE Quant lessons.
                        Watch, learn, and practice with engaging videos designed
                        to boost your preparation. Subscribe now to stay updated
                        and take your GRE prep to the next level!
                    </p>
                    <CtaButton
                        href="#"
                        className="px-8 py-3.5"
                        baseColorClass="bg-accent"
                        hoverColorClass="bg-white"
                        textColorClass="text-white hover:text-primary"
                    >
                        Visit our YouTube Channel
                    </CtaButton>
                </div>
            </Container>
        </section>
    );
}