"use server";

import { revalidatePath } from "next/cache";
import { ActionResponse } from "../types/admin-types";
import { CourseInfo } from "@/features/home/data/course-data";
import { getCoursesServer, saveCoursesServer } from "@/features/courses/data/courses-server";
import { uploadImage } from "@/lib/supabase/storage";
import { getAdminSession } from "./auth-actions";

/**
 * Server action to create or update a course.
 */
export async function saveCourseAction(
    formData: FormData
): Promise<ActionResponse<CourseInfo[]>> {
    const session = await getAdminSession();
    if (!session) {
        return {
            success: false,
            error: "Authentication required to perform this action.",
        };
    }

    const isEdit = formData.get("isEdit")?.toString() === "true";
    const originalSlug = formData.get("originalSlug")?.toString().trim();
    const slug = formData.get("slug")?.toString().trim().toLowerCase();
    const courseName = formData.get("courseName")?.toString().trim();
    const courseLevel = formData.get("courseLevel")?.toString().trim();
    const startDate = formData.get("startDate")?.toString().trim();
    const days = formData.get("days")?.toString().trim();
    const time = formData.get("time")?.toString().trim();
    const fees = formData.get("fees")?.toString().trim();
    const courseDuration = formData.get("courseDuration")?.toString().trim();
    const solvingQues = formData.get("solvingQues")?.toString().trim();
    const classDuration = formData.get("classDuration")?.toString().trim();
    const classFrequency = formData.get("classFrequency")?.toString().trim();
    const totalClasses = formData.get("totalClasses")?.toString().trim();
    const materials = formData.get("materials")?.toString().trim();

    // BOOKS block optional toggle
    const showBooks = formData.get("showBooks") === "true" || formData.get("showBooks") === "on";
    const booksJson = formData.get("booksJson")?.toString().trim();
    let books: Array<{ src: string; alt: string; title?: string }> | undefined;
    if (booksJson) {
        try {
            books = JSON.parse(booksJson);
        } catch {
            books = undefined;
        }
    }

    // Outline
    const courseOutlineJson = formData.get("courseOutlineJson")?.toString().trim();
    let courseOutline: CourseInfo["courseOutline"];
    if (courseOutlineJson) {
        try {
            courseOutline = JSON.parse(courseOutlineJson);
        } catch {
            courseOutline = undefined;
        }
    }

    // Text details
    const paymentInstructions = formData.get("paymentInstructions")?.toString().trim();
    const paymentMethodsText = formData.get("paymentMethodsText")?.toString().trim();
    const refundPolicyText = formData.get("refundPolicyText")?.toString().trim();
    const resourcesText = formData.get("resourcesText")?.toString().trim();

    let imgSrc = formData.get("imgSrc")?.toString().trim() || "/images/upcoming-batches/1.png";

    // Handle Cover Image Upload
    const imageFile = formData.get("imageFile") as File | null;
    if (imageFile && imageFile.size > 0 && imageFile.name !== "undefined") {
        const uploadResult = await uploadImage(imageFile, "courses");
        if (uploadResult.success && uploadResult.url) {
            imgSrc = uploadResult.url;
        }
    }

    // Input Validation
    if (!slug || !courseName || !startDate || !days || !time) {
        return {
            success: false,
            error: "Slug, Course Name, Start Date, Days, and Time are required.",
        };
    }

    const currentCourses = getCoursesServer();

    // Check slug duplication if creating new
    if (!isEdit && currentCourses.some((c) => c.slug === slug)) {
        return {
            success: false,
            error: `A course with slug '${slug}' already exists. Please choose a unique slug.`,
        };
    }

    const targetSlug = isEdit && originalSlug ? originalSlug : slug;
    const existingCourse = currentCourses.find((c) => c.slug === targetSlug);

    const updatedCourseItem: CourseInfo = {
        ...(existingCourse || {}),
        slug,
        imgSrc,
        imgAlt: courseName,
        courseName,
        courseLevel: courseLevel || "Basic to Advance",
        startDate,
        days,
        time,
        courseLink: `/courses/${slug}`,
        fees: fees || "Free",
        courseDuration: courseDuration || "2 Months",
        solvingQues: solvingQues || "1000+",
        classDuration: classDuration || existingCourse?.classDuration || "2",
        classFrequency: classFrequency || existingCourse?.classFrequency || "3",
        totalClasses: totalClasses || existingCourse?.totalClasses || "24",
        materials: materials || existingCourse?.materials || "bl-bgq",
        showBooks,
        books: books ?? existingCourse?.books,
        courseOutline: courseOutline ?? existingCourse?.courseOutline,
        paymentInstructions: paymentInstructions || existingCourse?.paymentInstructions,
        paymentMethodsText: paymentMethodsText || existingCourse?.paymentMethodsText,
        refundPolicyText: refundPolicyText || existingCourse?.refundPolicyText,
        resourcesText: resourcesText || existingCourse?.resourcesText,
    };

    let updatedCourses: CourseInfo[];

    if (isEdit) {
        updatedCourses = currentCourses.map((c) =>
            c.slug === targetSlug ? updatedCourseItem : c
        );
    } else {
        updatedCourses = [updatedCourseItem, ...currentCourses];
    }

    const saved = saveCoursesServer(updatedCourses);

    if (!saved) {
        return {
            success: false,
            error: "Failed to save course changes to storage.",
        };
    }

    revalidatePath("/", "layout");
    revalidatePath("/courses");
    revalidatePath(`/courses/${slug}`);
    revalidatePath("/admin/courses");

    return {
        success: true,
        data: updatedCourses,
        message: isEdit ? "Course updated successfully!" : "New course created successfully!",
    };

    return {
        success: true,
        data: updatedCourses,
        message: isEdit ? "Course updated successfully!" : "New course created successfully!",
    };
}

/**
 * Server action to delete a course.
 */
export async function deleteCourseAction(
    slug: string
): Promise<ActionResponse<CourseInfo[]>> {
    const session = await getAdminSession();
    if (!session) {
        return {
            success: false,
            error: "Authentication required to delete a course.",
        };
    }

    const currentCourses = getCoursesServer();
    const updatedCourses = currentCourses.filter((c) => c.slug !== slug);

    const saved = saveCoursesServer(updatedCourses);

    if (!saved) {
        return {
            success: false,
            error: "Failed to delete course from storage.",
        };
    }

    revalidatePath("/", "layout");
    revalidatePath("/courses");
    revalidatePath("/admin/courses");

    return {
        success: true,
        data: updatedCourses,
        message: "Course deleted successfully!",
    };
}
