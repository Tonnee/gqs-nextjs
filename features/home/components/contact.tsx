import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import CenterText from "@/components/ui/center-text";
import IconText from "@/components/ui/icon-text";
import { MdCall } from "react-icons/md";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

interface ContactProps {
    className?: string;
}

export default function Contact({ className }: ContactProps = {}) {
    return (
        <section className={cn("pt-20 md:pt-32 lg:pt-48 pb-16 md:pb-28 lg:pb-44", className)}>
            <Container>
                <SectionHeading
                    level={6}
                    topText="Contact"
                    headingText="Get in Touch with Us"
                />

                <CenterText
                    text="Our students’ success is our greatest achievement. From mastering GRE Quant strategies to achieving their dream scores, their journeys are a testament to our effective guidance. Read their stories of perseverance, growth, and triumph. Let their success inspire and motivate you to reach your goals too!"
                    className="mt-8 mb-10"
                />

                <div className="flex flex-wrap xl:flex-nowrap mt-20 xl:justify-between justify-center gap-10 xl:gap-0">
                    <IconText
                        icon={<MdCall />}
                        text="+88 01833455635"
                    />

                    <IconText
                        icon={<FaFacebookF />}
                        text="fb/grequantschoolonline"
                    />

                    <IconText
                        icon={<RiMailSendFill />}
                        text="quantschool@gmail.com"
                    />

                    <IconText
                        icon={<FaWhatsapp />}
                        text="+88 01833455635"
                    />
                </div>
            </Container>
        </section>
    );
}