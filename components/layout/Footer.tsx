import { Container } from "./container";
import SocialIcon from "../ui/social-icon";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FOOTER_LINKS, LEGAL_LINKS, type FooterLinkSection, type FooterLinkItemType } from "@/data/navigation";
import Link from "next/link";
import FooterLinkItem from "../ui/footer-link-item";

export default function Footer() {
    return (
        <footer className="bg-[#050027] pt-[158px] pb-[100px]">
            <Container>
                <div className="flex flex-col lg:flex-row justify-between border-b border-white/10 pb-[100px] gap-12 lg:gap-0">
                    <div className="w-full lg:w-4/12">
                        <h6 className="text-white font-raleway text-4xl font-bold tracking-wider">
                            GRE Quant School
                        </h6>
                        <p className="mt-8 text-white/50 leading-8">
                            Achieve your GRE dreams with expert guidance and
                            proven strategies. Join a community of learners
                            dedicated to success.
                        </p>

                        <div className="flex mt-11 gap-[26px]">
                            <SocialIcon
                                link="#"
                                icon={<FaFacebookF />}
                                ariaLabel="Facebook"
                            />
                            <SocialIcon
                                link="#"
                                icon={<FaYoutube />}
                                ariaLabel="YouTube"
                            />
                            <SocialIcon
                                link="#"
                                icon={<FaWhatsapp />}
                                ariaLabel="WhatsApp"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 mt-10 lg:mt-0">
                        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-4">
                            {FOOTER_LINKS.map((section: FooterLinkSection, index: number) => (
                                <ul key={index}>
                                    <p className="font-raleway text-[22px] font-bold tracking-wider text-white/85 mb-10">
                                        {section.title}
                                    </p>
                                    {section.links.map((item: FooterLinkItemType, i: number) => (
                                        <FooterLinkItem
                                            key={i}
                                            link={item.link}
                                        >
                                            {item.text}
                                        </FooterLinkItem>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col lg:flex-row justify-between text-center lg:text-left gap-6 lg:gap-0">
                    <p className="w-full lg:w-4/12 text-accent md:mb-6 lg:mb-0">
                        Copyright@GRE_Quant_School
                    </p>

                    <div className="flex flex-col sm:flex-row w-full lg:w-7/12 text-white text-base font-normal justify-between items-center sm:items-start gap-4">
                        {LEGAL_LINKS.map((item, i) => (
                            <Link key={i} href={item.link} className="hover:text-accent ease-linear duration-150">
                                {item.text}
                            </Link>
                        ))}
                        <p className="text-white/50">
                            Design & Developed by{" "}
                            <Link
                                href="https://wa.me/8801843654644"
                                className="text-accent" target="_blank"
                            >
                                Sabiha Afrin
                            </Link>
                            {/* , <Link href="#" className="text-white hover:text-accent ease-linear duration-150">PixelCoding</Link> */}
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}