import Link from "next/link";
import { cn } from "@/lib/utils";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CtaButton } from "@/components/layout/cta-button";
import { NAV_LINKS, KMF_LINKS } from "@/features/home/data/navigation";
import { courseData } from "@/features/home/data/course-data";

interface MobileMenuProps {
    isOpen: boolean;
    pathname: string | null;
    onClose: () => void;
}

export function MobileMenu({ isOpen, pathname, onClose }: MobileMenuProps) {
    return (
        <div
            className={cn(
                "lg:hidden grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
            id="mobile-menu"
        >
            <div className="overflow-hidden">
                <div className={cn("border-t border-gray-100 bg-white", !isOpen && "invisible")}>
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
                                                onClick={onClose}
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
                                                            onClick={onClose}
                                                        >
                                                            <span className="text-sm font-semibold text-primary">{course.courseName}</span>
                                                            <span className="text-xs text-foreground-muted">{course.startDate} • {course.time}</span>
                                                        </Link>
                                                    ))
                                                ) : (
                                                    KMF_LINKS.map((kmf) => (
                                                        <Link 
                                                            key={kmf.href} 
                                                            href={kmf.href} 
                                                            className="flex flex-col space-y-1 bg-gray-50/50 p-2 rounded-md hover:bg-gray-100 transition-colors"
                                                            onClick={onClose}
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
                                        onClick={onClose}
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
                                onClick={onClose}
                            >
                                Upcoming Courses
                            </CtaButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
