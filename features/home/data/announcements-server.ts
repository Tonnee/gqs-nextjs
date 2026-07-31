import fs from "fs";
import path from "path";
import { AnnouncementsData } from "./announcements";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "announcements.json");

/**
 * Reads dynamic announcements directly from JSON storage.
 */
export function getAnnouncementsServer(): AnnouncementsData | null {
    try {
        if (fs.existsSync(DATA_FILE_PATH)) {
            const rawData = fs.readFileSync(DATA_FILE_PATH, "utf-8");
            return JSON.parse(rawData) as AnnouncementsData;
        }
    } catch {
        // Return null if file error
    }
    return null;
}

/**
 * Saves dynamic announcements to JSON storage.
 */
export function saveAnnouncementsServer(data: AnnouncementsData): boolean {
    try {
        const dirPath = path.dirname(DATA_FILE_PATH);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
        return true;
    } catch {
        return false;
    }
}
