"use client";

import { usePathname } from "next/navigation";
import { MdNotificationsNone, MdOutlineSearch } from "react-icons/md";

export function AdminHeader() {
    const pathname = usePathname();

    const getPageTitle = (path: string | null) => {
        if (!path || path === "/admin") return "Dashboard Overview";
        if (path.includes("/courses")) return "Manage Courses";
        if (path.includes("/kmf-questions")) return "Manage KMF Questions";
        if (path.includes("/reviews")) return "Student Reviews";
        if (path.includes("/students")) return "Enrolled Students";
        if (path.includes("/settings")) return "System Settings";
        return "Admin Portal";
    };

    return (
        <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-gray-100 bg-white/80 px-6 backdrop-blur-md font-poppins">
            {/* Page Title */}
            <div>
                <h1 className="text-xl font-bold text-foreground-heading tracking-tight">
                    {getPageTitle(pathname)}
                </h1>
                <p className="text-xs text-foreground-muted">
                    Welcome back, <span className="font-semibold text-primary">Admin</span>
                </p>
            </div>

            {/* Right Side: Search & Quick Controls */}
            <div className="flex items-center gap-4">
                {/* Search input */}
                <div className="hidden sm:flex relative items-center">
                    <MdOutlineSearch className="absolute left-3 text-foreground-muted text-xl pointer-events-none" />
                    <input
                        type="search"
                        placeholder="Search dashboard..."
                        className="w-60 rounded-xl border border-gray-200 bg-background-subtle pl-10 pr-4 py-2 text-xs text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                </div>

                {/* Notification Icon */}
                <button
                    type="button"
                    aria-label="View notifications"
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-secondary hover:bg-gray-50 hover:text-accent transition-colors"
                >
                    <MdNotificationsNone className="text-xl" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
                </button>

                {/* System status pill */}
                <div className="hidden md:flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 border border-green-200">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    System Active
                </div>
            </div>
        </header>
    );
}
