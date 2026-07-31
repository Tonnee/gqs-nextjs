"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    MdDashboard,
    MdCampaign,
    MdWeb,
    MdBook,
    MdQuestionAnswer,
    MdRateReview,
    MdLogout,
    MdChevronLeft,
    MdChevronRight,
    MdExpandMore,
    MdExpandLess,
    MdAdd,
    MdList,
} from "react-icons/md";
import { logoutAdminAction } from "../actions/auth-actions";
import { CourseInfo } from "@/features/home/data/course-data";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
    className?: string;
    courses?: CourseInfo[];
}

const NAV_ITEMS = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: MdDashboard,
    },
    {
        title: "Announcement",
        href: "/admin/announcements",
        icon: MdCampaign,
    },
    {
        title: "Landing Page",
        href: "/admin/landing",
        icon: MdWeb,
    },
    {
        title: "Courses",
        href: "/admin/courses",
        icon: MdBook,
        hasDropdown: true,
    },
    {
        title: "KMF Questions",
        href: "/admin/kmf-questions",
        icon: MdQuestionAnswer,
    },
    {
        title: "Reviews",
        href: "/admin/reviews",
        icon: MdRateReview,
    },
];

export function AdminSidebar({ className, courses = [] }: AdminSidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isCoursesRoute = pathname?.startsWith("/admin/courses");
    const [isCoursesOpen, setIsCoursesOpen] = useState(isCoursesRoute);

    useEffect(() => {
        if (isCoursesRoute) {
            setIsCoursesOpen(true);
        }
    }, [pathname, isCoursesRoute]);

    const handleLogout = async () => {
        const res = await logoutAdminAction();
        if (res.success) {
            window.location.href = "/admin/login";
        }
    };

    return (
        <aside
            className={cn(
                "sticky top-0 z-40 flex h-screen flex-col justify-between bg-primary text-white transition-all duration-300 select-none font-poppins border-r border-white/10",
                isCollapsed ? "w-20" : "w-64",
                className
            )}
            aria-label="Admin Sidebar Navigation"
        >
            {/* Top Section: Title & Toggle Button */}
            <div>
                <div className="flex h-20 items-center justify-between px-4 border-b border-white/10">
                    <Link
                        href="/admin"
                        className={cn(
                            "flex items-center gap-2.5 overflow-hidden transition-all focus-visible:outline-2 focus-visible:outline-accent",
                            isCollapsed ? "w-10 justify-center" : "w-auto"
                        )}
                        aria-label="GRE Quant School Admin Dashboard"
                    >
                        {!isCollapsed ? (
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-lg text-white tracking-wider">Admin Panel</span>
                                <span className="text-[10px] text-accent font-semibold tracking-widest uppercase">GRE QUANT SCHOOL</span>
                            </div>
                        ) : (
                            <span className="font-bold text-base text-accent tracking-wider">GQS</span>
                        )}
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
                    >
                        {isCollapsed ? (
                            <MdChevronRight className="text-xl" />
                        ) : (
                            <MdChevronLeft className="text-xl" />
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="p-3 space-y-1.5 mt-4 overflow-y-auto max-h-[calc(100vh-180px)]">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;

                        if (item.hasDropdown) {
                            const isCoursesActive = isCoursesRoute;

                            return (
                                <div key={item.href} className="space-y-1">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (isCollapsed) {
                                                router.push(item.href);
                                            } else {
                                                setIsCoursesOpen(!isCoursesOpen);
                                            }
                                        }}
                                        title={isCollapsed ? item.title : undefined}
                                        className={cn(
                                            "flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-accent",
                                            isCoursesActive
                                                ? "bg-accent text-white font-semibold shadow-md shadow-accent/20"
                                                : "text-white/70 hover:bg-white/10 hover:text-white",
                                            isCollapsed && "justify-center px-0"
                                        )}
                                    >
                                        <div className="flex items-center gap-3.5 min-w-0">
                                            <Icon className={cn("text-xl shrink-0", isCoursesActive ? "text-white" : "text-white/80")} />
                                            {!isCollapsed && (
                                                <span className="truncate">{item.title}</span>
                                            )}
                                        </div>
                                        {!isCollapsed && (
                                            <span className="shrink-0 text-lg">
                                                {isCoursesOpen ? <MdExpandLess /> : <MdExpandMore />}
                                            </span>
                                        )}
                                    </button>

                                    {/* Courses Submenu Dropdown */}
                                    {isCoursesOpen && !isCollapsed && (
                                        <div className="ml-4 pl-3 border-l border-white/15 space-y-1 py-1">
                                            <Link
                                                href="/admin/courses"
                                                className={cn(
                                                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                                                    pathname === "/admin/courses"
                                                        ? "bg-white/20 text-white font-semibold"
                                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                                )}
                                            >
                                                <MdList className="text-sm shrink-0 text-accent" />
                                                <span className="truncate">All Courses</span>
                                            </Link>

                                            <Link
                                                href="/admin/courses/new"
                                                className={cn(
                                                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                                                    pathname === "/admin/courses/new"
                                                        ? "bg-white/20 text-white font-semibold"
                                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                                )}
                                            >
                                                <MdAdd className="text-sm shrink-0 text-accent" />
                                                <span className="truncate">Add New Course</span>
                                            </Link>

                                            {courses.length > 0 && (
                                                <div className="pt-1.5 pb-0.5 px-3 text-[10px] uppercase font-bold text-accent/80 tracking-wider">
                                                    Courses Catalog
                                                </div>
                                            )}

                                            {courses.map((course) => {
                                                const editHref = `/admin/courses/${course.slug}/edit`;
                                                const isEditActive = pathname === editHref;

                                                return (
                                                    <Link
                                                        key={course.slug}
                                                        href={editHref}
                                                        className={cn(
                                                            "flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs transition-colors",
                                                            isEditActive
                                                                ? "bg-white/20 text-white font-semibold"
                                                                : "text-white/70 hover:bg-white/10 hover:text-white"
                                                        )}
                                                        title={`Edit ${course.courseName}`}
                                                    >
                                                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                                        <span className="truncate">{course.courseName}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        const isActive =
                            pathname === item.href ||
                            (item.href !== "/admin" && pathname?.startsWith(item.href));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                title={isCollapsed ? item.title : undefined}
                                className={cn(
                                    "flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-accent",
                                    isActive
                                        ? "bg-accent text-white font-semibold shadow-md shadow-accent/20"
                                        : "text-white/70 hover:bg-white/10 hover:text-white",
                                    isCollapsed && "justify-center px-0"
                                )}
                            >
                                <Icon className={cn("text-xl shrink-0", isActive ? "text-white" : "text-white/80")} />
                                {!isCollapsed && (
                                    <span className="truncate">{item.title}</span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section: Profile & Logout */}
            <div className="border-t border-white/10 p-3 space-y-3 bg-primary-soft/50">
                {/* Admin Profile Info */}
                <div className={cn("flex items-center gap-3 px-2 py-1.5", isCollapsed && "justify-center px-0")}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold text-sm shadow-md">
                        AD
                    </div>
                    {!isCollapsed && (
                        <div className="flex flex-col min-w-0 flex-1">
                            <span className="text-sm font-semibold text-white truncate leading-tight">
                                Admin User
                            </span>
                            <span className="text-xs text-white/60 truncate">
                                admin@quantschool.com
                            </span>
                        </div>
                    )}
                </div>

                {/* Logout Button */}
                <button
                    type="button"
                    onClick={handleLogout}
                    title={isCollapsed ? "Logout" : undefined}
                    className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-red-300 transition-all hover:bg-red-500/20 hover:text-red-100 focus-visible:outline-2 focus-visible:outline-accent",
                        isCollapsed && "justify-center px-0"
                    )}
                >
                    <MdLogout className="text-xl shrink-0 text-red-400" />
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
        </aside>
    );
}
