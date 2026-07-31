import type { Metadata } from "next";
import { getAnnouncementsServer } from "@/features/home/data/announcements-server";
import { AnnouncementsForm } from "@/features/admin/components/announcements-form";
import { AnnouncementsData } from "@/features/home/data/announcements";

export const metadata: Metadata = {
    title: "Header Announcements | Admin Panel",
    description: "Manage public top header announcement banner content.",
};

const emptyAnnouncements: AnnouncementsData = {
    left: { text: "", date: "", linkUrl: "" },
    right: { text: "", date: "", linkUrl: "" },
};

export default function AdminAnnouncementsPage() {
    const currentAnnouncements = getAnnouncementsServer() || emptyAnnouncements;

    return (
        <div className="space-y-6 font-poppins">
            <div>
                <h2 className="text-2xl font-bold text-foreground-heading tracking-tight">
                    Header Announcements
                </h2>
                <p className="text-sm text-foreground-muted">
                    Update the announcement texts, dates, and links shown on the top header banner across all public pages.
                </p>
            </div>

            <AnnouncementsForm initialData={currentAnnouncements} />
        </div>
    );
}
