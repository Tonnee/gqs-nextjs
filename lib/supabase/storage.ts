import { createClient } from "./client";

const DEFAULT_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET || "gqs-images";

/**
 * Returns the public CDN URL for an image path in Supabase Storage.
 */
export function getPublicImageUrl(path: string, bucket: string = DEFAULT_BUCKET): string {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }
    const supabase = createClient();
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
}

/**
 * Uploads an image file to Supabase Storage and returns its public CDN URL.
 */
export async function uploadImage(
    file: File,
    folderPath: string = "questions",
    bucket: string = DEFAULT_BUCKET
): Promise<{ success: boolean; url?: string; error?: string }> {
    try {
        const supabase = createClient();
        const fileExt = file.name.split(".").pop();
        const fileName = `${folderPath}/${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;

        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(fileName, file, {
                cacheControl: "3600",
                upsert: false,
            });

        if (error) {
            return { success: false, error: error.message };
        }

        const publicUrl = getPublicImageUrl(data.path, bucket);
        return { success: true, url: publicUrl };
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to upload image";
        return { success: false, error: message };
    }
}

/**
 * Deletes an image file from Supabase Storage.
 */
export async function deleteImage(
    path: string,
    bucket: string = DEFAULT_BUCKET
): Promise<{ success: boolean; error?: string }> {
    try {
        const supabase = createClient();
        const { error } = await supabase.storage.from(bucket).remove([path]);
        if (error) {
            return { success: false, error: error.message };
        }
        return { success: true };
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to delete image";
        return { success: false, error: message };
    }
}
