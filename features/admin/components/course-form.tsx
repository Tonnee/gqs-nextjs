"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    MdArrowBack,
    MdSave,
    MdCheckCircleOutline,
    MdErrorOutline,
    MdImage,
    MdBook,
    MdPayment,
    MdClass,
    MdInfoOutline,
} from "react-icons/md";
import { CourseInfo } from "@/features/home/data/course-data";
import { saveCourseAction } from "../actions/course-actions";
import { cn } from "@/lib/utils";

interface CourseFormProps {
    initialCourse?: CourseInfo | null;
}

export function CourseForm({ initialCourse }: CourseFormProps) {
    const router = useRouter();
    const isEdit = Boolean(initialCourse);

    const [isPending, startTransition] = useTransition();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    // Form states
    const [previewImage, setPreviewImage] = useState<string>(initialCourse?.imgSrc || "/images/upcoming-batches/1.png");
    const [showBooks, setShowBooks] = useState<boolean>(initialCourse?.showBooks !== false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData(event.currentTarget);
        formData.set("showBooks", showBooks ? "true" : "false");

        startTransition(async () => {
            const res = await saveCourseAction(formData);

            if (!res.success) {
                setErrorMessage(res.error || "Failed to save course.");
                return;
            }

            setSuccessMessage(res.message || "Course saved successfully!");
            
            setTimeout(() => {
                router.push("/admin/courses");
                router.refresh();
            }, 1000);
        });
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 font-poppins pb-16">
            {/* Header Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/courses"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-foreground-heading transition-colors hover:bg-primary hover:text-white"
                        title="Back to Courses List"
                    >
                        <MdArrowBack className="text-xl" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-foreground-heading">
                            {isEdit ? `Edit Course: ${initialCourse?.courseName}` : "Create New Course"}
                        </h1>
                        <p className="text-xs text-foreground-muted">
                            {isEdit
                                ? "Update course details, books block visibility, fees, and schedule."
                                : "Fill in details to add a new GRE Quant course to the catalog."}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/courses"
                        className="rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-semibold text-secondary hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        form="course-full-form"
                        disabled={isPending}
                        className="rounded-xl bg-accent px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-accent/90 transition-all flex items-center gap-2"
                    >
                        {isPending ? (
                            <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                <span>Saving...</span>
                            </>
                        ) : (
                            <>
                                <MdSave className="text-base" />
                                <span>{isEdit ? "Update Course" : "Save New Course"}</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Alert Messages */}
            {errorMessage && (
                <div
                    role="alert"
                    className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 border border-red-200 shadow-sm"
                >
                    <MdErrorOutline className="text-xl shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            {successMessage && (
                <div
                    role="status"
                    className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-700 border border-green-200 shadow-sm"
                >
                    <MdCheckCircleOutline className="text-xl shrink-0" />
                    <span>{successMessage}</span>
                </div>
            )}

            {/* Full Page Form */}
            <form id="course-full-form" onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="isEdit" value={isEdit ? "true" : "false"} />
                <input type="hidden" name="originalSlug" value={initialCourse?.slug || ""} />

                {/* Section 1: Basic Information */}
                <fieldset className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <legend className="text-sm font-bold text-primary flex items-center gap-2 px-2">
                        <MdInfoOutline className="text-accent text-lg" />
                        <span>Basic Course Information</span>
                    </legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        <div className="md:col-span-2">
                            <label htmlFor="courseName" className="block text-xs font-semibold text-secondary mb-1">
                                Course Name / Title *
                            </label>
                            <input
                                id="courseName"
                                name="courseName"
                                type="text"
                                required
                                defaultValue={initialCourse?.courseName || ""}
                                placeholder="e.g. Beat GRE Quant in 2 Months"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="slug" className="block text-xs font-semibold text-secondary mb-1">
                                URL Slug * (Unique identifier for /courses/[slug])
                            </label>
                            <input
                                id="slug"
                                name="slug"
                                type="text"
                                required
                                defaultValue={initialCourse?.slug || ""}
                                placeholder="e.g. beat-gre-quant"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="courseLevel" className="block text-xs font-semibold text-secondary mb-1">
                                Course Level
                            </label>
                            <input
                                id="courseLevel"
                                name="courseLevel"
                                type="text"
                                defaultValue={initialCourse?.courseLevel || "Basic to Advance"}
                                placeholder="Basic to Advance"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="startDate" className="block text-xs font-semibold text-secondary mb-1">
                                Start Date *
                            </label>
                            <input
                                id="startDate"
                                name="startDate"
                                type="text"
                                required
                                defaultValue={initialCourse?.startDate || ""}
                                placeholder="e.g. April 15, 2025"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="days" className="block text-xs font-semibold text-secondary mb-1">
                                Days / Weekly Schedule *
                            </label>
                            <input
                                id="days"
                                name="days"
                                type="text"
                                required
                                defaultValue={initialCourse?.days || ""}
                                placeholder="e.g. Monday - Friday"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="time" className="block text-xs font-semibold text-secondary mb-1">
                                Time *
                            </label>
                            <input
                                id="time"
                                name="time"
                                type="text"
                                required
                                defaultValue={initialCourse?.time || ""}
                                placeholder="e.g. 6:00 PM - 8:00 PM"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="fees" className="block text-xs font-semibold text-secondary mb-1">
                                Course Fee / Price
                            </label>
                            <input
                                id="fees"
                                name="fees"
                                type="text"
                                defaultValue={initialCourse?.fees || "3000 BDT"}
                                placeholder="3000 BDT"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="courseDuration" className="block text-xs font-semibold text-secondary mb-1">
                                Overall Course Duration
                            </label>
                            <input
                                id="courseDuration"
                                name="courseDuration"
                                type="text"
                                defaultValue={initialCourse?.courseDuration || "2 Months"}
                                placeholder="2 Months"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>
                    </div>
                </fieldset>

                {/* Section 2: Class Metrics */}
                <fieldset className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <legend className="text-sm font-bold text-primary flex items-center gap-2 px-2">
                        <MdClass className="text-accent text-lg" />
                        <span>Class Metrics & Practice Target</span>
                    </legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
                        <div>
                            <label htmlFor="totalClasses" className="block text-xs font-semibold text-secondary mb-1">
                                Total Live Classes
                            </label>
                            <input
                                id="totalClasses"
                                name="totalClasses"
                                type="text"
                                defaultValue={initialCourse?.totalClasses || "24"}
                                placeholder="24"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="classDuration" className="block text-xs font-semibold text-secondary mb-1">
                                Class Duration (Hours)
                            </label>
                            <input
                                id="classDuration"
                                name="classDuration"
                                type="text"
                                defaultValue={initialCourse?.classDuration || "2"}
                                placeholder="2"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="classFrequency" className="block text-xs font-semibold text-secondary mb-1">
                                Classes / Week
                            </label>
                            <input
                                id="classFrequency"
                                name="classFrequency"
                                type="text"
                                defaultValue={initialCourse?.classFrequency || "3"}
                                placeholder="3"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="solvingQues" className="block text-xs font-semibold text-secondary mb-1">
                                Practice Questions Count
                            </label>
                            <input
                                id="solvingQues"
                                name="solvingQues"
                                type="text"
                                defaultValue={initialCourse?.solvingQues || "2000+"}
                                placeholder="2000+"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>
                    </div>
                </fieldset>

                {/* Section 3: BOOKS Block Options (Optional) */}
                <fieldset className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <legend className="text-sm font-bold text-primary flex items-center gap-2 px-2">
                        <MdBook className="text-accent text-lg" />
                        <span>BOOKS Section / Course Materials (Optional Block)</span>
                    </legend>

                    <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 space-y-3">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="showBooks"
                                checked={showBooks}
                                onChange={(e) => setShowBooks(e.target.checked)}
                                className="h-5 w-5 rounded border-gray-300 text-accent focus:ring-accent transition-all cursor-pointer"
                            />
                            <label htmlFor="showBooks" className="text-sm font-bold text-foreground-heading cursor-pointer select-none">
                                Enable & Show BOOKS Section on Course Page
                            </label>
                        </div>
                        <p className="text-xs text-foreground-muted leading-relaxed pl-8">
                            When checked, the <strong>&quot;BOOKS - Materials to Cover&quot;</strong> section will be displayed on the public page for this course (<code className="text-accent">/courses/[slug]</code>). If unchecked, the BOOKS block will be completely hidden.
                        </p>
                    </div>

                    <div>
                        <label htmlFor="materials" className="block text-xs font-semibold text-secondary mb-1">
                            Materials Identifier / Tag
                        </label>
                        <input
                            id="materials"
                            name="materials"
                            type="text"
                            defaultValue={initialCourse?.materials || "bl-bgq"}
                            placeholder="bl-bgq"
                            className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                    </div>
                </fieldset>

                {/* Section 4: Payment & Policy Settings */}
                <fieldset className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <legend className="text-sm font-bold text-primary flex items-center gap-2 px-2">
                        <MdPayment className="text-accent text-lg" />
                        <span>Payment & Refund Policy Options</span>
                    </legend>

                    <div className="space-y-4 pt-2">
                        <div>
                            <label htmlFor="paymentInstructions" className="block text-xs font-semibold text-secondary mb-1">
                                Payment Instructions Text
                            </label>
                            <textarea
                                id="paymentInstructions"
                                name="paymentInstructions"
                                rows={2}
                                defaultValue={
                                    initialCourse?.paymentInstructions ||
                                    "(You need to pay the 1st Month's Payment to Confirm your Seat, then before starting the 2nd Month, another payment)"
                                }
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="paymentMethodsText" className="block text-xs font-semibold text-secondary mb-1">
                                Accepted Payment Methods Text
                            </label>
                            <input
                                id="paymentMethodsText"
                                name="paymentMethodsText"
                                type="text"
                                defaultValue={
                                    initialCourse?.paymentMethodsText ||
                                    "We accept Bkash, Rocket, Nagad, DBBL, IFIC, & Brac Bank"
                                }
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="refundPolicyText" className="block text-xs font-semibold text-secondary mb-1">
                                Refund Policy Guarantee Text
                            </label>
                            <textarea
                                id="refundPolicyText"
                                name="refundPolicyText"
                                rows={2}
                                defaultValue={
                                    initialCourse?.refundPolicyText ||
                                    "*** Our Amazing Policy, if you find this Course is not FIT for you within 3 Classes, you will get 100% REFUND of your FEE"
                                }
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>
                    </div>
                </fieldset>

                {/* Section 5: Cover Image */}
                <fieldset className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <legend className="text-sm font-bold text-primary flex items-center gap-2 px-2">
                        <MdImage className="text-accent text-lg" />
                        <span>Course Cover Image</span>
                    </legend>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-2">
                        <div className="relative h-44 w-full rounded-xl overflow-hidden bg-primary border border-gray-200">
                            <Image
                                src={previewImage}
                                alt="Course Cover Preview"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <span className="absolute bottom-2 left-2 rounded-lg bg-black/60 px-2 py-1 text-[10px] text-white">
                                Live Preview
                            </span>
                        </div>

                        <div className="md:col-span-2 space-y-4">
                            <div>
                                <label htmlFor="imageFile" className="block text-xs font-semibold text-secondary mb-1">
                                    Upload New Cover Image (Supabase Storage)
                                </label>
                                <input
                                    id="imageFile"
                                    name="imageFile"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) setPreviewImage(URL.createObjectURL(file));
                                    }}
                                    className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2 text-xs text-foreground-heading file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-soft transition-all cursor-pointer"
                                />
                            </div>

                            <div>
                                <label htmlFor="imgSrc" className="block text-xs font-semibold text-secondary mb-1">
                                    Or Image Path / Remote URL
                                </label>
                                <input
                                    id="imgSrc"
                                    name="imgSrc"
                                    type="text"
                                    defaultValue={initialCourse?.imgSrc || "/images/upcoming-batches/1.png"}
                                    onChange={(e) => setPreviewImage(e.target.value)}
                                    placeholder="/images/upcoming-batches/1.png"
                                    className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>

                {/* Bottom Action Footer */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link
                        href="/admin/courses"
                        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-secondary hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent/90 transition-all flex items-center gap-2"
                    >
                        {isPending ? (
                            <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                <span>Saving Changes...</span>
                            </>
                        ) : (
                            <>
                                <MdSave className="text-lg" />
                                <span>{isEdit ? "Update Course" : "Create New Course"}</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
