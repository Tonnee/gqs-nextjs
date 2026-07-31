import type { Metadata } from "next";
import { CourseForm } from "@/features/admin/components/course-form";

export const metadata: Metadata = {
    title: "Create New Course | Admin Panel",
    description: "Add a new course to GRE Quant School catalog.",
};

export default function CreateCoursePage() {
    return <CourseForm />;
}
