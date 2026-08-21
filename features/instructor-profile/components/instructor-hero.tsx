import Image from "next/image";
import Heading from "@/components/ui/heading";
import { 
    FaGraduationCap, 
    FaAward, 
    FaUniversity, 
    FaFacebookMessenger, 
    FaQuoteLeft,
    FaFacebookF,
    FaWhatsapp,
    FaEnvelope,
    FaPhoneAlt
} from "react-icons/fa";

export default function InstructorHero() {
    return (
        <section className="bg-primary w-full min-h-203.5 relative overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center w-full h-full min-h-203.5">
                {/* Left Side: Instructor Action Image */}
                <div className="w-full xl:w-1/2 h-125 sm:h-150 xl:h-203.5 relative">
                    <Image
                        src="/images/sourav-simanta-instructor-gre-quant.jpg"
                        alt="Sourav Simanta, Lead Instructor and Founder of GRE Quant School"
                        fill
                        priority
                        className="object-cover object-top"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent xl:hidden" />
                </div>

                {/* Right Side: Instructor Bio Details, Credentials, Socials, and Quote */}
                <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 md:px-12 xl:pl-20 xl:pr-12 py-16 xl:py-12">
                    <div className="max-w-2xl">
                        <p className="font-poppins text-accent text-sm sm:text-base font-semibold tracking-widest uppercase mb-3">
                            Meet Your Lead Mentor
                        </p>

                        <Heading 
                            level={1} 
                            className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold tracking-tight leading-tight text-white mb-8"
                        >
                            Sourav Simanta
                        </Heading>

                        {/* Credentials List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3.5 text-white/90">
                                <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0 border border-accent/30">
                                    <FaGraduationCap className="text-lg" />
                                </div>
                                <span className="font-poppins font-medium text-sm sm:text-base md:text-lg">
                                    Founder & Mentor, GRE Quant School
                                </span>
                            </div>

                            <div className="flex items-center gap-3.5 text-white/90">
                                <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0 border border-accent/30">
                                    <FaAward className="text-lg" />
                                </div>
                                <span className="font-poppins font-medium text-sm sm:text-base md:text-lg">
                                    GRE Quantitative Score: <strong className="text-accent font-bold">170 (Perfect Score)</strong>
                                </span>
                            </div>

                            <div className="flex items-center gap-3.5 text-white/90">
                                <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0 border border-accent/30">
                                    <FaUniversity className="text-lg" />
                                </div>
                                <span className="font-poppins font-medium text-sm sm:text-base md:text-lg">
                                    PhD Student (Admitted), UMBC, USA
                                </span>
                            </div>

                            {/* Direct Social & Contact Links */}
                            <div className="pt-4 flex flex-wrap items-center gap-3">
                                <a
                                    href="https://www.facebook.com/sourav.simanta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook Profile"
                                    title="Facebook Profile"
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent text-white border border-white/10 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                                >
                                    <FaFacebookF className="text-sm group-hover:scale-110 transition-transform" />
                                </a>

                                <a
                                    href="https://m.me/sourav.simanta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Chat on Messenger"
                                    title="Chat on Messenger"
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0084FF] text-white border border-white/10 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                                >
                                    <FaFacebookMessenger className="text-base group-hover:scale-110 transition-transform" />
                                </a>

                                <a
                                    href="https://wa.me/8801833455635"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    title="Chat on WhatsApp"
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white border border-white/10 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                                >
                                    <FaWhatsapp className="text-base group-hover:scale-110 transition-transform" />
                                </a>

                                <a
                                    href="mailto:quantschool@gmail.com"
                                    aria-label="Email"
                                    title="Send Email"
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent text-white border border-white/10 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                                >
                                    <FaEnvelope className="text-sm group-hover:scale-110 transition-transform" />
                                </a>

                                <a
                                    href="tel:+8801833455635"
                                    aria-label="Phone Number"
                                    title="Call +88 01833455635"
                                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent text-white border border-white/10 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                                >
                                    <FaPhoneAlt className="text-xs group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Mentorship Philosophy Quote */}
                        <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-xs">
                            <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0 border border-accent/30">
                                <FaQuoteLeft className="text-sm" />
                            </div>
                            <p className="font-poppins text-sm sm:text-base text-white/90 italic leading-relaxed pt-1">
                                &ldquo;Through personalized strategies and calculator-free shortcuts, I help GRE test-takers overcome panic, master speed, and achieve their dream scores.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
