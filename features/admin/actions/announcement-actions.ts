"use server";

import { revalidatePath } from "next/cache";
import { ActionResponse } from "../types/admin-types";
import { AnnouncementsData } from "@/features/home/data/announcements";
import { saveAnnouncementsServer } from "@/features/home/data/announcements-server";

/**
 * Server action to update header announcements.
 */
export async function updateAnnouncementsAction(
    formData: FormData
): Promise<ActionResponse<AnnouncementsData>> {
    const leftText = formData.get("leftText")?.toString().trim();
    const leftDate = formData.get("leftDate")?.toString().trim();
    const leftLinkUrl = formData.get("leftLinkUrl")?.toString().trim();

    const rightText = formData.get("rightText")?.toString().trim();
    const rightDate = formData.get("rightDate")?.toString().trim();
    const rightLinkUrl = formData.get("rightLinkUrl")?.toString().trim();

    // Input Validation
    if (!leftText || !leftDate) {
        return {
            success: false,
            error: "Left announcement text and date are required.",
        };
    }

    if (!rightText || !rightDate) {
        return {
            success: false,
            error: "Right announcement text and date are required.",
        };
    }

    const updatedData: AnnouncementsData = {
        left: {
            text: leftText,
            date: leftDate,
            linkUrl: leftLinkUrl || "/",
        },
        right: {
            text: rightText,
            date: rightDate,
            linkUrl: rightLinkUrl || "/",
        },
    };

    const saved = saveAnnouncementsServer(updatedData);

    if (!saved) {
        return {
            success: false,
            error: "Failed to save announcements to storage.",
        };
    }

    // Revalidate public layouts and admin pages to immediately reflect updates
    revalidatePath("/", "layout");
    revalidatePath("/admin/announcements");

    return {
        success: true,
        data: updatedData,
        message: "Announcements updated successfully!",
    };
}
