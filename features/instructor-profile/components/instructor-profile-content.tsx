import Image from "next/image";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";

export default function InstructorProfileContent() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                {/* Mentor Journey & Teaching Philosophy */}
                <div className="mb-20 md:mb-28">
                    <SectionHeading
                        level={2}
                        topText="Mentorship Journey"
                        headingText="A Letter From Sourav Simanta"
                        className="text-center text-foreground-heading mb-12"
                    />

                    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 font-poppins text-base md:text-lg text-foreground-muted leading-relaxed">
                        <p>
                            Greetings and welcome to <strong className="text-foreground-heading font-semibold">GRE Quant School</strong>. I’m Sourav Simanta and it’s an honor to serve as your mentor for the GRE Quantitative section. I am excited to share with you my personal experience, as well as the techniques I have developed to help you achieve your desired score.
                        </p>

                        <p>
                            When I sat for my first official GRE test, I was disappointed with my score in Quant. Although I had diligently prepared and studied extensively, I encountered challenges with time management, overly complicated solutions available in most Quant resources, and an overreliance on calculators. These factors resulted in panic and hindered my ability to answer questions that I was fully capable of solving.
                        </p>

                        <p>
                            Determined to improve my score, I studied for months and looked deeply into my shortcomings. Through this process, I developed innovative techniques that enabled me to solve Quant problems efficiently and without relying on calculators. These techniques culminated in a significant improvement in my Quant score to <strong className="text-accent font-bold">170</strong>.
                        </p>

                        <p>
                            As a seasoned Quant instructor, I have the opportunity to help other GRE aspirants overcome similar challenges and achieve their desired scores. I have developed personalized strategies and techniques that have proven to be effective in maximizing performance on the GRE Quant section.
                        </p>

                        <p>
                            Through my mentorship, I will guide you through the challenging Quant section of the GRE and provide you with the necessary tools to succeed. My approach is tailored to your individual needs, and I am committed to helping you achieve your target score.
                        </p>

                        <p className="pt-2 font-medium text-foreground-heading">
                            Thank you for choosing our services, and I look forward to partnering with you on this exciting journey.
                        </p>
                    </div>
                </div>

                {/* Verified Score Report Showcase */}
                <div className="flex flex-col items-center text-center">
                    <SectionHeading
                        level={2}
                        topText="Official ETS Score Card"
                        headingText="Official GRE Quantitative Reasoning Score"
                        className="text-center text-foreground-heading mb-10"
                    />

                    <div className="w-full flex justify-center">
                        <Image
                            src="/images/gre-score-image.png"
                            alt="Official GRE Quantitative Score 170 - Sourav Simanta"
                            width={2048}
                            height={2048}
                            className="w-full h-auto max-w-4xl rounded-2xl md:rounded-3xl shadow-sm border border-gray-100"
                            sizes="(max-width: 1024px) 100vw, 896px"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
