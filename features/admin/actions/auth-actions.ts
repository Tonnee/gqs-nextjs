"use server";

import { cookies } from "next/headers";
import { ActionResponse, AdminUser } from "../types/admin-types";

const SESSION_COOKIE_NAME = "admin_session";

/**
 * Helper to retrieve current authenticated admin session from server cookies.
 */
export async function getAdminSession(): Promise<AdminUser | null> {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
        if (!sessionCookie?.value) return null;
        return JSON.parse(sessionCookie.value) as AdminUser;
    } catch {
        return null;
    }
}

/**
 * Server action to process admin login with role assignment (Super Admin vs Admin).
 */
export async function loginAdminAction(
    formData: FormData
): Promise<ActionResponse<{ user: AdminUser; redirectUrl: string }>> {
    const email = formData.get("email")?.toString().trim().toLowerCase();
    const password = formData.get("password")?.toString();

    // 1. Server-side Input Validation
    if (!email || !password) {
        return {
            success: false,
            error: "Both email and password are required.",
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            success: false,
            error: "Please enter a valid email address.",
        };
    }

    if (password.length < 6) {
        return {
            success: false,
            error: "Password must be at least 6 characters long.",
        };
    }

    // 2. Role Determination & Authentication Check
    const isSuperAdmin = email === "superadmin@quantschool.com" || email.includes("super");
    const isAdmin = email === "admin@quantschool.com";

    // Validate demo credentials if standard emails are used
    if (email === "superadmin@quantschool.com" && password !== "super123") {
        return {
            success: false,
            error: "Invalid Super Admin credentials.",
        };
    }

    if (email === "admin@quantschool.com" && password !== "admin123") {
        return {
            success: false,
            error: "Invalid Admin credentials.",
        };
    }

    const role = isSuperAdmin ? "Super Admin" : "Admin";
    const name = isSuperAdmin ? "Super Admin" : "Admin User";

    const adminUser: AdminUser = {
        id: isSuperAdmin ? "usr_super_01" : "usr_admin_01",
        name: name,
        email: email,
        role: role,
        avatarUrl: "/images/gre-quant-school-logo.png",
    };

    // 3. Set secure HTTP-only session cookie
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, JSON.stringify(adminUser), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days session
    });

    return {
        success: true,
        data: {
            user: adminUser,
            redirectUrl: "/admin",
        },
        message: `Logged in successfully as ${role}.`,
    };
}

/**
 * Server action to process admin logout.
 */
export async function logoutAdminAction(): Promise<ActionResponse<null>> {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);

    return {
        success: true,
        data: null,
        message: "Successfully logged out.",
    };
}
