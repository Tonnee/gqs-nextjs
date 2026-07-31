"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { MdSave, MdCheckCircleOutline, MdErrorOutline, MdImage, MdLock, MdPlayCircleOutline } from "react-icons/md";
import { LandingData } from "@/features/home/data/landing-types";
import { updateLandingPageAction } from "../actions/landing-actions";
import { cn } from "@/lib/utils";

interface LandingFormProps {
    initialData: LandingData;
    userRole?: string;
}

export function LandingForm({ initialData, userRole = "Admin" }: LandingFormProps) {
    const isSuperAdmin = userRole === "Super Admin";
    const [isPending, startTransition] = useTransition();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const [formDataState, setFormDataState] = useState<LandingData>(initialData);
    const [previewImage, setPreviewImage] = useState<string>(initialData.heroImageUrl);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreviewImage(objectUrl);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isSuperAdmin) {
            setErrorMessage("Permission Denied: Only Super Admin can update banner information.");
            return;
        }
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const res = await updateLandingPageAction(formData);

            if (!res.success) {
                setErrorMessage(res.error);
                return;
            }

            setSuccessMessage(res.message || "Landing page updated successfully!");
            if (res.data) {
                setFormDataState(res.data);
                setPreviewImage(res.data.heroImageUrl);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 font-poppins max-w-4xl" noValidate>
            {/* Role Access Restriction Alert */}
            {!isSuperAdmin && (
                <div
                    role="alert"
                    className="flex items-center gap-3 rounded-2xl bg-amber-50 p-5 text-sm text-amber-800 border border-amber-200 shadow-sm"
                >
                    <MdLock className="text-2xl shrink-0 text-amber-600" />
                    <div>
                        <p className="font-bold text-amber-900">Read-Only View: Super Admin Authorization Required</p>
                        <p className="text-xs text-amber-700 mt-0.5">
                            You are logged in as standard <strong>{userRole}</strong>. Landing page banner information, hero copy, and trailer video link can only be updated by a <strong>Super Admin</strong> (`superadmin@quantschool.com`).
                        </p>
                    </div>
                </div>
            )}

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

            {/* Section 1: Hero Banner Image & Video Trailer */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-6">
                <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <MdImage className="text-xl text-accent" />
                        <h3 className="text-base font-bold text-foreground-heading">
                            Hero Banner Image & Video Trailer Modal Link
                        </h3>
                    </div>
                    {!isSuperAdmin && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                            <MdLock /> Read Only
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Image Preview */}
                    <div className="md:col-span-1">
                        <label className="block text-xs font-semibold text-secondary mb-2">
                            Current Image Preview
                        </label>
                        <div className="relative h-48 w-full rounded-xl overflow-hidden bg-primary p-2 border border-gray-200 shadow-inner flex items-center justify-center">
                            {previewImage ? (
                                <Image
                                    src={previewImage}
                                    alt="Hero Banner Preview"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-xs text-white/50">No Image Selected</span>
                            )}
                        </div>
                    </div>

                    {/* Image & Video Inputs */}
                    <div className="md:col-span-2 space-y-4">
                        <div>
                            <label htmlFor="heroImageFile" className="block text-xs font-semibold text-secondary mb-1">
                                Upload New Hero Image (Cloud Storage)
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    id="heroImageFile"
                                    name="heroImageFile"
                                    type="file"
                                    accept="image/*"
                                    disabled={!isSuperAdmin}
                                    onChange={handleFileChange}
                                    className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-xs text-foreground-heading file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-soft transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="heroImageUrl" className="block text-xs font-semibold text-secondary mb-1">
                                Image URL (Direct Path or Storage Link)
                            </label>
                            <input
                                id="heroImageUrl"
                                name="heroImageUrl"
                                type="text"
                                disabled={!isSuperAdmin}
                                value={formDataState.heroImageUrl}
                                onChange={(e) => {
                                    setFormDataState({ ...formDataState, heroImageUrl: e.target.value });
                                    setPreviewImage(e.target.value);
                                }}
                                placeholder="/images/banner.png"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Trailer Video Link Option */}
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label htmlFor="videoUrl" className="block text-xs font-semibold text-secondary">
                                    Video Trailer Link (Modal Embed URL)
                                </label>
                                {formDataState.videoUrl && (
                                    <a
                                        href={formDataState.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-accent font-semibold hover:underline flex items-center gap-1"
                                    >
                                        <MdPlayCircleOutline className="text-base" /> Preview Video Link
                                    </a>
                                )}
                            </div>
                            <input
                                id="videoUrl"
                                name="videoUrl"
                                type="text"
                                disabled={!isSuperAdmin}
                                value={formDataState.videoUrl || ""}
                                onChange={(e) =>
                                    setFormDataState({ ...formDataState, videoUrl: e.target.value })
                                }
                                placeholder="https://www.youtube.com/embed/shsVQvHUTxw"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            />
                            <p className="text-[11px] text-foreground-muted mt-1">
                                Accepts YouTube embed links (e.g. <code>https://www.youtube.com/embed/shsVQvHUTxw</code>) or standard watch links.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Main Copy Content */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-4">
                <div className="border-b border-gray-100 pb-3">
                    <h3 className="text-base font-bold text-foreground-heading">
                        Hero Banner Headings & Copy
                    </h3>
                </div>

                <div>
                    <label htmlFor="heroSubtitle" className="block text-xs font-semibold text-secondary mb-1">
                        Hero Subtitle / Tagline
                    </label>
                    <input
                        id="heroSubtitle"
                        name="heroSubtitle"
                        type="text"
                        required
                        disabled={!isSuperAdmin}
                        value={formDataState.heroSubtitle}
                        onChange={(e) =>
                            setFormDataState({ ...formDataState, heroSubtitle: e.target.value })
                        }
                        placeholder="GRE Quant School"
                        className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                </div>

                <div>
                    <label htmlFor="heroTitle" className="block text-xs font-semibold text-secondary mb-1">
                        Main Heading H1
                    </label>
                    <input
                        id="heroTitle"
                        name="heroTitle"
                        type="text"
                        required
                        disabled={!isSuperAdmin}
                        value={formDataState.heroTitle}
                        onChange={(e) =>
                            setFormDataState({ ...formDataState, heroTitle: e.target.value })
                        }
                        placeholder="Master GRE Quant with Precision and Confidence"
                        className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm font-semibold text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                </div>

                <div>
                    <label htmlFor="heroDescription" className="block text-xs font-semibold text-secondary mb-1">
                        Main Description Paragraph
                    </label>
                    <textarea
                        id="heroDescription"
                        name="heroDescription"
                        rows={3}
                        required
                        disabled={!isSuperAdmin}
                        value={formDataState.heroDescription}
                        onChange={(e) =>
                            setFormDataState({ ...formDataState, heroDescription: e.target.value })
                        }
                        placeholder="Learn smarter strategies, solve faster..."
                        className="w-full rounded-xl border border-gray-200 bg-background-subtle p-4 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                </div>
            </div>

            {/* Section 3: Promotional Badge & CTA Button */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-4">
                <div className="border-b border-gray-100 pb-3">
                    <h3 className="text-base font-bold text-foreground-heading">
                        Promotional Badge & Call To Action (CTA)
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="offerBadgeText" className="block text-xs font-semibold text-secondary mb-1">
                            Promo Badge Text
                        </label>
                        <input
                            id="offerBadgeText"
                            name="offerBadgeText"
                            type="text"
                            disabled={!isSuperAdmin}
                            value={formDataState.offerBadgeText}
                            onChange={(e) =>
                                setFormDataState({ ...formDataState, offerBadgeText: e.target.value })
                            }
                            placeholder="Get 50% discount on course fee"
                            className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label htmlFor="offerCtaText" className="block text-xs font-semibold text-secondary mb-1">
                            CTA Button Text
                        </label>
                        <input
                            id="offerCtaText"
                            name="offerCtaText"
                            type="text"
                            disabled={!isSuperAdmin}
                            value={formDataState.offerCtaText}
                            onChange={(e) =>
                                setFormDataState({ ...formDataState, offerCtaText: e.target.value })
                            }
                            placeholder="Join Today"
                            className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label htmlFor="offerCtaLink" className="block text-xs font-semibold text-secondary mb-1">
                            CTA Link URL
                        </label>
                        <input
                            id="offerCtaLink"
                            name="offerCtaLink"
                            type="text"
                            disabled={!isSuperAdmin}
                            value={formDataState.offerCtaLink}
                            onChange={(e) =>
                                setFormDataState({ ...formDataState, offerCtaLink: e.target.value })
                            }
                            placeholder="https://wa.me/..."
                            className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>

            {/* Save Action */}
            {isSuperAdmin && (
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isPending}
                        className={cn(
                            "rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.99] disabled:opacity-70 flex items-center gap-2"
                        )}
                    >
                        {isPending ? (
                            <>
                                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                <span>Updating Landing Page...</span>
                            </>
                        ) : (
                            <>
                                <MdSave className="text-xl" />
                                <span>Save Landing Page Changes</span>
                            </>
                        )}
                    </button>
                </div>
            )}
        </form>
    );
}
