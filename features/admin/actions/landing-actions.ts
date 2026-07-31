"use server";

import { revalidatePath } from "next/cache";
import { ActionResponse } from "../types/admin-types";
import { saveLandingDataServer, LandingData } from "@/features/home/data/landing-server";
import { uploadImage } from "@/lib/supabase/storage";
import { getAdminSession } from "./auth-actions";

/**
 * Server action to update landing page content and image.
 * Protected: Only users with 'Super Admin' role are authorized.
 */
export async function updateLandingPageAction(
    formData: FormData
): Promise<ActionResponse<LandingData>> {
    // 1. RBAC Authorization Check
    const session = await getAdminSession();
    if (!session || session.role !== "Super Admin") {
        return {
            success: false,
            error: "Access Denied: Landing page banner information can only be updated by a Super Admin.",
        };
    }

    const heroSubtitle = formData.get("heroSubtitle")?.toString().trim();
    const heroTitle = formData.get("heroTitle")?.toString().trim();
    const heroDescription = formData.get("heroDescription")?.toString().trim();
    const offerBadgeText = formData.get("offerBadgeText")?.toString().trim();
    const offerCtaText = formData.get("offerCtaText")?.toString().trim();
    const offerCtaLink = formData.get("offerCtaLink")?.toString().trim();
    const videoUrl = formData.get("videoUrl")?.toString().trim();
    let heroImageUrl = formData.get("heroImageUrl")?.toString().trim() || "/images/banner.png";

    // Handle File Upload if provided
    const imageFile = formData.get("heroImageFile") as File | null;
    if (imageFile && imageFile.size > 0 && imageFile.name !== "undefined") {
        const uploadResult = await uploadImage(imageFile, "landing");
        if (uploadResult.success && uploadResult.url) {
            heroImageUrl = uploadResult.url;
        }
    }

    // Input Validation
    if (!heroTitle || !heroSubtitle || !heroDescription) {
        return {
            success: false,
            error: "Hero subtitle, heading, and description are required.",
        };
    }

    const updatedData: LandingData = {
        heroSubtitle,
        heroTitle,
        heroDescription,
        offerBadgeText: offerBadgeText || "Get 50% discount on course fee",
        offerCtaText: offerCtaText || "Join Today",
        offerCtaLink: offerCtaLink || "/",
        heroImageUrl,
        videoUrl: videoUrl || "",
    };

    const saved = saveLandingDataServer(updatedData);

    if (!saved) {
        return {
            success: false,
            error: "Failed to save landing page data to storage.",
        };
    }

    // Revalidate public landing page cache
    revalidatePath("/", "layout");
    revalidatePath("/admin/landing");

    return {
        success: true,
        data: updatedData,
        message: "Landing page banner information and video link updated successfully!",
    };
}
