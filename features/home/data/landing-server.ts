import fs from "fs";
import path from "path";
import { LandingData, defaultLandingData } from "./landing-types";

export type { LandingData };
export { defaultLandingData };

const DATA_FILE_PATH = path.join(process.cwd(), "data", "landing.json");

/**
 * Server-only helper to read dynamic landing page content from storage.
 */
export function getLandingDataServer(): LandingData {
    try {
        if (fs.existsSync(DATA_FILE_PATH)) {
            const rawData = fs.readFileSync(DATA_FILE_PATH, "utf-8");
            const parsed = JSON.parse(rawData) as LandingData;
            if (parsed && parsed.heroTitle) {
                return parsed;
            }
        }
    } catch {
        // Fallback to defaults
    }
    return defaultLandingData;
}

/**
 * Server-only helper to save dynamic landing page content to storage.
 */
export function saveLandingDataServer(data: LandingData): boolean {
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
