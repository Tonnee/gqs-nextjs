import Heading from "@/components/ui/heading";
import { Container } from "@/components/layout/container";

export default function FreeQuestionsHero() {
    return (
        <section 
            className="w-full bg-cover bg-center bg-no-repeat py-20 md:py-32"
            style={{ backgroundImage: `url('/images/logo-page-banner.png')` }}
        >
            <Container>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-start-7 md:col-span-6 text-left flex flex-col justify-center">
                        <Heading level={1} className="text-5xl md:text-[72px] font-extrabold text-primary-deep leading-tight tracking-wide mb-[50px]">
                            <span>
                                Free Practice
                                <br />
                            </span>
                            <span>
                                Questions
                            </span>
                        </Heading>
                        <p className="font-raleway text-2xl md:text-[32px] font-semibold text-accent">
                            1000 questions with Answers
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
