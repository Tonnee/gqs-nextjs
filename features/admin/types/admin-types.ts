import { ReactNode } from "react";

export interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

export interface NavItem {
    title: string;
    href: string;
    iconName: "dashboard" | "courses" | "questions" | "reviews" | "students" | "settings";
    badge?: string;
}

export interface DashboardStat {
    id: string;
    label: string;
    value: string;
    changeText: string;
    isIncrease: boolean;
    type: "courses" | "questions" | "students" | "reviews";
}

export type ActionResponse<T = unknown> =
    | { success: true; data: T; message?: string }
    | { success: false; error: string; errors?: Record<string, string[]> };
