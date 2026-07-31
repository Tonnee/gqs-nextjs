import type { Metadata } from "next";
import { getLandingDataServer } from "@/features/home/data/landing-server";
import { LandingForm } from "@/features/admin/components/landing-form";
import { getAdminSession } from "@/features/admin/actions/auth-actions";

export const metadata: Metadata = {
    title: "Landing Page Content | Admin Panel",
    description: "Manage public landing page hero banner copy, promo offers, and images.",
};

export default async function AdminLandingPage() {
    const session = await getAdminSession();
    const landingData = getLandingDataServer();

    return (
        <div className="space-y-6 font-poppins">
            <div>
                <h2 className="text-2xl font-bold text-foreground-heading tracking-tight">
                    Landing Page Content & Images
                </h2>
                <p className="text-sm text-foreground-muted">
                    Update the main landing page hero banner titles, promotional badge, trailer video link, and hero graphics.
                </p>
            </div>

            <LandingForm initialData={landingData} userRole={session?.role || "Admin"} />
        </div>
    );
}
