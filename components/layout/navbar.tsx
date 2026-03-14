"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { CtaButton } from "./cta-button";
import { NAV_LINKS } from "@/data/nav-links";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md transition-all font-poppins" aria-label="Main Navigation">
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
                                const isActive = link.name === "Course Details"; // Mocking active state based on screenshot
                                return (
                                    <li key={link.name}>
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
                            href="/upcoming-batch"
                            className="block px-6 py-2.5 text-sm"
                        >
                            Upcoming Batch
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
                                        isMobileMenuOpen ? "translate-y-[8px] rotate-45" : "translate-y-0 rotate-0"
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
                                        isMobileMenuOpen ? "-translate-y-[8px] -rotate-45" : "translate-y-0 rotate-0"
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
                                const isActive = link.name === "Course Details";
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
                                    href="/upcoming-batch"
                                    className="block w-full px-4 py-3 text-center text-base"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Upcoming Batch
                                </CtaButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
