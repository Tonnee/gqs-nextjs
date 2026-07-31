import type { Metadata } from "next";
import { getCoursesServer } from "@/features/courses/data/courses-server";
import { CoursesManager } from "@/features/admin/components/courses-manager";

export const metadata: Metadata = {
    title: "Course Management | Admin Panel",
    description: "Manage GRE Quant School course catalog, pricing, schedules, and details.",
};

export default function AdminCoursesPage() {
    const courses = getCoursesServer();

    return (
        <div className="space-y-6 font-poppins">
            <div>
                <h2 className="text-2xl font-bold text-foreground-heading tracking-tight">
                    Courses Management
                </h2>
                <p className="text-sm text-foreground-muted">
                    Create, edit, and update active courses, batch schedules, fees, and cover images across the platform.
                </p>
            </div>

            <CoursesManager initialCourses={courses} />
        </div>
    );
}
