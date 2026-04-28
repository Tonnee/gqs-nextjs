"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { CtaButton } from "./cta-button";
import { NAV_LINKS } from "@/features/home/data/navigation";
import { courseData } from "@/features/home/data/course-data";
import { cn } from "@/lib/utils";
import { MdKeyboardArrowDown } from "react-icons/md";
import DualText from "@/components/ui/dual-text";

const kmfLinks = [
    { name: "KMF latest 1794", href: "/kmf-questions/kmf-latest-1794" },
    { name: "KMF 1147", href: "/kmf-questions/kmf-1147" },
    { name: "KMF Verbal", href: "/kmf-questions/kmf-verbal" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md transition-all font-poppins select-none" aria-label="Main Navigation">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* 1. Left: Logo */}
                    <div className="flex shrink-0 items-center">
                        <Link 
                            href="/" 
                            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" 
                            aria-label="GRE Quant School Home"
                        >
                            <div className="relative flex items-center h-12 w-48">
                                <Image
                                    src="/images/gre-quant-school-logo.png"
                                    alt="GRE Quant School Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* 2. Center: Desktop Navigation Links */}
                    <div className="hidden lg:flex flex-1 items-center justify-center">
                        <ul className="flex items-center justify-center space-x-8 xl:space-x-16">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                                
                                if (link.name === "Courses" || link.name === "KMF Questions") {
                                    const isCourses = link.name === "Courses";
                                    return (
                                        <li key={link.name} className="group flex items-center h-20">
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "flex items-center gap-1 text-sm font-normal transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                                                    isActive ? "text-accent" : "text-dark"
                                                )}
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                {link.name}
                                                <MdKeyboardArrowDown className="text-lg transition-transform duration-300 group-hover:rotate-180" />
                                            </Link>

                                            <div className="absolute top-[80px] left-0 w-full bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out cursor-default border-t border-gray-100">
                                                <Container>
                                                    {isCourses ? (
                                                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-20 py-14">
                                                            {courseData.map((course) => (
                                                                <div key={course.slug} className="flex flex-col space-y-2 group/course">
                                                                    <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">{course.courseLevel}</p>
                                                                    <Link href={course.courseLink} className="text-foreground-heading text-3xl leading-tight font-semibold group-hover/course:text-accent transition-colors">
                                                                        {course.courseName}
                                                                    </Link>
                                                                    <div className="flex flex-col mt-10">
                                                                        <DualText lightText="Starts:" boldText={course.startDate} lightColor="text-foreground-muted" boldColor="text-primary" distanceBottom="mb-4" fontClass="text-sm" />
                                                                        <DualText lightText="Days:" boldText={course.days} lightColor="text-foreground-muted" boldColor="text-primary" distanceBottom="mb-4" fontClass="text-sm" />
                                                                        <DualText lightText="Time:" boldText={course.time} lightColor="text-foreground-muted" boldColor="text-primary" distanceBottom="mb-0" fontClass="text-sm" />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            {/* 4th Column Image displays only for xl screens */}
                                                            <div className="hidden xl:block relative w-full h-[350px] rounded-lg overflow-hidden shadow-sm">
                                                                <Image
                                                                    src="/images/course-banner.png"
                                                                    alt="Latest Courses"
                                                                    fill
                                                                    className="object-cover transition-transform hover:scale-105 duration-500"
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
                                                            {kmfLinks.map((kmf) => (
                                                                <Link key={kmf.href} href={kmf.href} className="flex flex-col space-y-2 group/kmf p-6 rounded-xl hover:bg-background-subtle transition-colors">
                                                                    <span className="text-foreground-heading text-2xl font-semibold group-hover/kmf:text-accent transition-colors">
                                                                        {kmf.name}
                                                                    </span>
                                                                    <span className="text-sm text-foreground-muted">Practice the best GRE questions from our updated bank.</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </Container>
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={link.name} className="flex items-center h-20">
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-sm font-normal transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                                                isActive ? "text-accent" : "text-dark"
                                            )}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* 3. Right: Desktop CTA Button */}
                    <div className="hidden lg:flex shrink-0 items-center justify-end">
                        <CtaButton
                            href="https://wa.me/+8801833455635"
                            className="block px-6 py-2.5 text-sm"
                            target="_blank"
                        >
                            Join Our Course
                        </CtaButton>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-secondary hover:bg-gray-100 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle navigation menu"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Animated hamburger bars */}
                            <div className="flex h-6 w-6 flex-col items-center justify-center" aria-hidden="true">
                                <span
                                    className={cn(
                                        "block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                                        isMobileMenuOpen ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0"
                                    )}
                                />
                                <span
                                    className={cn(
                                        "mt-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                                        isMobileMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                                    )}
                                />
                                <span
                                    className={cn(
                                        "mt-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out",
                                        isMobileMenuOpen ? "-translate-y-2 -rotate-45" : "translate-y-0 rotate-0"
                                    )}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Dropdown */}
            <div
                className={cn(
                    "lg:hidden grid transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
                id="mobile-menu"
            >
                <div className="overflow-hidden">
                    <div className={cn("border-t border-gray-100 bg-white", !isMobileMenuOpen && "invisible")}>
                        <ul className="space-y-1 px-4 pb-6 pt-2">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                                
                                if (link.name === "Courses" || link.name === "KMF Questions") {
                                    const isCourses = link.name === "Courses";
                                    return (
                                        <li key={link.name}>
                                            <div className="flex flex-col">
                                                <Link
                                                    href={link.href}
                                                    className={cn(
                                                        "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors",
                                                        isActive ? "bg-accent/10 text-accent" : "text-secondary hover:bg-gray-50 hover:text-primary"
                                                    )}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    aria-current={isActive ? "page" : undefined}
                                                >
                                                    {link.name}
                                                    <MdKeyboardArrowDown className="text-xl" />
                                                </Link>
                                                <div className="pl-6 pr-3 py-2 flex flex-col space-y-3 mb-2 mt-1">
                                                    {isCourses ? (
                                                        courseData.map((course) => (
                                                            <Link 
                                                                key={course.slug} 
                                                                href={course.courseLink} 
                                                                className="flex flex-col space-y-1 bg-gray-50/50 p-2 rounded-md hover:bg-gray-100 transition-colors"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                <span className="text-sm font-semibold text-primary">{course.courseName}</span>
                                                                <span className="text-xs text-foreground-muted">{course.startDate} • {course.time}</span>
                                                            </Link>
                                                        ))
                                                    ) : (
                                                        kmfLinks.map((kmf) => (
                                                            <Link 
                                                                key={kmf.href} 
                                                                href={kmf.href} 
                                                                className="flex flex-col space-y-1 bg-gray-50/50 p-2 rounded-md hover:bg-gray-100 transition-colors"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                <span className="text-sm font-semibold text-primary">{kmf.name}</span>
                                                            </Link>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "block rounded-md px-3 py-3 text-base font-medium transition-colors",
                                                isActive ? "bg-accent/10 text-accent" : "text-secondary hover:bg-gray-50 hover:text-primary"
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className="pt-4">
                                <CtaButton
                                    href="/courses"
                                    className="block w-full px-4 py-3 text-center text-base"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Upcoming Courses
                                </CtaButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
