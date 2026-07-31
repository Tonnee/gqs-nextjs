import { redirect } from "next/navigation";
import { getAdminSession } from "@/features/admin/actions/auth-actions";
import { getCoursesServer } from "@/features/courses/data/courses-server";
import { AdminSidebar } from "@/features/admin/components/admin-sidebar";
import { AdminHeader } from "@/features/admin/components/admin-header";

export default async function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getAdminSession();

    if (!session) {
        redirect("/admin/login");
    }

    const courses = getCoursesServer();

    return (
        <div className="flex min-h-screen bg-background-subtle">
            <AdminSidebar courses={courses} />
            <div className="flex flex-1 flex-col min-w-0">
                <AdminHeader />
                <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
