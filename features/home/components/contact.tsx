import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import CenterText from "@/components/layout/center-text";
import IconText from "@/components/ui/icon-text";
import { MdCall } from "react-icons/md";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
    return (
        <section className="mt-[200px] mb-[178px]">
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

                <div className="flex flex-wrap xl:flex-nowrap mt-[78px] xl:justify-between justify-center gap-10 xl:gap-0">
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