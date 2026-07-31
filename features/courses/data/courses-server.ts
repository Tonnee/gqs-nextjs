import fs from "fs";
import path from "path";
import { CourseInfo, courseData } from "@/features/home/data/course-data";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "courses.json");

/**
 * Reads dynamic courses list from JSON storage.
 */
export function getCoursesServer(): CourseInfo[] {
    try {
        if (fs.existsSync(DATA_FILE_PATH)) {
            const rawData = fs.readFileSync(DATA_FILE_PATH, "utf-8");
            const parsed = JSON.parse(rawData) as CourseInfo[];
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch {
        // Fallback to initial static data
    }
    return courseData;
}

/**
 * Saves dynamic courses list to JSON storage.
 */
export function saveCoursesServer(courses: CourseInfo[]): boolean {
    try {
        const dirPath = path.dirname(DATA_FILE_PATH);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(courses, null, 2), "utf-8");
        return true;
    } catch {
        return false;
    }
}
