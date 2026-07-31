import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/features/admin/actions/auth-actions";
import { AdminLoginForm } from "@/features/admin/components/admin-login-form";

export const metadata: Metadata = {
    title: "Admin Login | GRE Quant School",
    description: "Sign in to access the GRE Quant School Admin Dashboard.",
};

export default async function AdminLoginPage() {
    const session = await getAdminSession();

    if (session) {
        redirect("/admin");
    }

    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-primary-deep px-4 py-12">
            <AdminLoginForm />
        </main>
    );
}
