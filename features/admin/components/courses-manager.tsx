"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MdAdd,
    MdEdit,
    MdDelete,
    MdCheckCircleOutline,
    MdErrorOutline,
    MdImage,
    MdClose,
    MdOpenInNew,
    MdBook,
} from "react-icons/md";
import { CourseInfo } from "@/features/home/data/course-data";
import { saveCourseAction, deleteCourseAction } from "../actions/course-actions";
import { cn } from "@/lib/utils";

interface CoursesManagerProps {
    initialCourses: CourseInfo[];
}

export function CoursesManager({ initialCourses }: CoursesManagerProps) {
    const [courses, setCourses] = useState<CourseInfo[]>(initialCourses);
    const [isPending, startTransition] = useTransition();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleDelete = (slug: string, name: string) => {
        if (!confirm(`Are you sure you want to delete the course "${name}"?`)) return;

        setErrorMessage(null);
        setSuccessMessage(null);

        startTransition(async () => {
            const res = await deleteCourseAction(slug);

            if (!res.success) {
                setErrorMessage(res.error);
                return;
            }

            setSuccessMessage(res.message || "Course deleted successfully!");
            if (res.data) {
                setCourses(res.data);
            }
        });
    };

    return (
        <div className="space-y-8 font-poppins">
            {/* Top Action Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h3 className="text-lg font-bold text-foreground-heading">
                        Course Catalog ({courses.length})
                    </h3>
                    <p className="text-xs text-foreground-muted">
                        Manage active GRE Quant courses, pricing, schedules, and details.
                    </p>
                </div>

                <Link
                    href="/admin/courses/new"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.99]"
                >
                    <MdAdd className="text-xl" />
                    <span>Create New Course</span>
                </Link>
            </div>

            {/* Feedback Alerts */}
            {errorMessage && (
                <div
                    role="alert"
                    className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 border border-red-200"
                >
                    <MdErrorOutline className="text-xl shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            {successMessage && (
                <div
                    role="status"
                    className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-700 border border-green-200"
                >
                    <MdCheckCircleOutline className="text-xl shrink-0" />
                    <span>{successMessage}</span>
                </div>
            )}

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <article
                        key={course.slug}
                        className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                        <div>
                            {/* Course Image Thumbnail */}
                            <div className="relative h-44 w-full rounded-xl overflow-hidden bg-primary mb-4">
                                <Image
                                    src={course.imgSrc}
                                    alt={course.imgAlt || course.courseName}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wider">
                                    {course.courseLevel}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <Link
                                    href={course.courseLink}
                                    target="_blank"
                                    className="text-base font-bold text-foreground-heading hover:text-accent transition-colors line-clamp-2"
                                >
                                    {course.courseName}
                                </Link>

                                <div className="text-xs text-foreground-muted space-y-1 pt-2 border-t border-gray-100">
                                    <p><strong>Starts:</strong> {course.startDate}</p>
                                    <p><strong>Schedule:</strong> {course.days}</p>
                                    <p><strong>Time:</strong> {course.time}</p>
                                    <p><strong>Fee:</strong> <span className="text-accent font-semibold">{course.fees || "Contact"}</span></p>
                                    <p><strong>BOOKS Section:</strong> {course.showBooks !== false ? <span className="text-green-600 font-semibold">Enabled</span> : <span className="text-gray-400 font-medium">Disabled</span>}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card Actions */}
                        <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-gray-100">
                            <Link
                                href={course.courseLink}
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
                            >
                                <span>View Page</span>
                                <MdOpenInNew className="text-sm" />
                            </Link>

                            <div className="flex items-center gap-2">
                                <Link
                                    href={`/admin/courses/${course.slug}/edit`}
                                    className="rounded-lg bg-gray-100 p-2 text-foreground-heading hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
                                    title="Edit Course (Full Page)"
                                >
                                    <MdEdit className="text-base" />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(course.slug, course.courseName)}
                                    className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center"
                                    title="Delete Course"
                                >
                                    <MdDelete className="text-base" />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
