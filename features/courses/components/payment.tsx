import Image from "next/image";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import type { CourseInfo } from "@/features/home/data/course-data";

interface CoursePaymentProps {
    course: CourseInfo;
}

export default function CoursePayment({ course }: CoursePaymentProps) {
    return (
        <section className="bg-white py-16 md:py-24">
            <Container>
                <div className="w-full">
                    <SectionHeading
                        level={2}
                        topText="PAYMENT"
                        headingText="Course Fee & Payment Methods"
                        align="text-left"
                        className="text-foreground"
                    />

                    <div className="mt-14 flex flex-col gap-4 text-lg md:text-xl font-medium tracking-wide text-foreground">
                        <p>
                            Fees: <span className="text-accent font-semibold">{course.fees}</span> per Month
                        </p>
                        <p>
                            Course Duration: <span className="text-accent font-semibold">{course.courseDuration}</span> (approx.)
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 text-base md:text-lg tracking-wide text-foreground-muted font-medium">
                        <p>
                            (You need to pay the 1st Month's Payment to Confirm your Seat, then before starting the 2nd Month, another payment)
                        </p>
                        <p>
                            *** Our Amazing Policy, if you find this Course is not FIT for you within 3 Classes, you will get 100% REFUND of your FEE
                        </p>
                    </div>

                    <div className="mt-14">
                        <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground mb-4">
                            Payment Methods
                        </h3>
                        <p className="text-foreground-muted tracking-wide font-medium">
                            We accept <span className="text-accent">Bkash, Rocket, Nagad, DBBL, IFIC, & Brac Bank</span>
                        </p>
                    </div>

                    <div className="mt-10 w-full relative h-[100px] sm:h-[120px] md:h-[240px]">
                        <Image 
                            src="/images/payment.png" 
                            alt="Payment Methods including Bkash, Rocket, Nagad, DBBL, IFIC, Brac Bank"
                            fill
                            className="object-contain object-left"
                            unoptimized
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
