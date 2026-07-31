"use client";

import { useState, useTransition } from "react";
import { MdSave, MdCheckCircleOutline, MdErrorOutline, MdCampaign } from "react-icons/md";
import { AnnouncementsData } from "@/features/home/data/announcements";
import { updateAnnouncementsAction } from "../actions/announcement-actions";
import { cn } from "@/lib/utils";

interface AnnouncementsFormProps {
    initialData: AnnouncementsData;
}

export function AnnouncementsForm({ initialData }: AnnouncementsFormProps) {
    const [isPending, startTransition] = useTransition();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const [formDataState, setFormDataState] = useState<AnnouncementsData>(initialData);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const res = await updateAnnouncementsAction(formData);

            if (!res.success) {
                setErrorMessage(res.error);
                return;
            }

            setSuccessMessage(res.message || "Announcements updated successfully!");
            if (res.data) {
                setFormDataState(res.data);
            }
        });
    };

    return (
        <div className="space-y-8 font-poppins max-w-4xl">
            {/* Live Banner Preview Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <MdCampaign className="text-xl text-accent" />
                    <span>Live Header Announcement Banner Preview</span>
                </div>

                <div className="rounded-xl bg-primary p-4 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-sm">
                        {/* Left Preview */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
                            <span>{formDataState.left.text}</span>
                            <span className="text-accent font-medium">{formDataState.left.date}</span>
                            {formDataState.left.linkUrl && (
                                <span className="text-accent font-semibold underline">(Learn More)</span>
                            )}
                        </div>

                        {/* Right Preview */}
                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1">
                            <span>{formDataState.right.text}</span>
                            <span className="text-accent font-medium">{formDataState.right.date}</span>
                            {formDataState.right.linkUrl && (
                                <span className="text-accent font-semibold underline">(Learn More)</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Alert Messages */}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Announcement Section */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-4">
                        <div className="border-b border-gray-100 pb-3">
                            <h3 className="text-base font-bold text-foreground-heading">
                                Left Announcement Banner
                            </h3>
                            <p className="text-xs text-foreground-muted">
                                Displays on the left side of the top header
                            </p>
                        </div>

                        <div>
                            <label htmlFor="leftText" className="block text-xs font-semibold text-secondary mb-1">
                                Announcement Text
                            </label>
                            <input
                                id="leftText"
                                name="leftText"
                                type="text"
                                required
                                value={formDataState.left.text}
                                onChange={(e) =>
                                    setFormDataState({
                                        ...formDataState,
                                        left: { ...formDataState.left, text: e.target.value },
                                    })
                                }
                                placeholder="New Batch - Beat GRE Quant in 2 Months"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="leftDate" className="block text-xs font-semibold text-secondary mb-1">
                                Date / Badge Text
                            </label>
                            <input
                                id="leftDate"
                                name="leftDate"
                                type="text"
                                required
                                value={formDataState.left.date}
                                onChange={(e) =>
                                    setFormDataState({
                                        ...formDataState,
                                        left: { ...formDataState.left, date: e.target.value },
                                    })
                                }
                                placeholder="24 December"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="leftLinkUrl" className="block text-xs font-semibold text-secondary mb-1">
                                Link URL (Optional)
                            </label>
                            <input
                                id="leftLinkUrl"
                                name="leftLinkUrl"
                                type="text"
                                value={formDataState.left.linkUrl || ""}
                                onChange={(e) =>
                                    setFormDataState({
                                        ...formDataState,
                                        left: { ...formDataState.left, linkUrl: e.target.value },
                                    })
                                }
                                placeholder="/courses/beat-gre-quant"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>
                    </div>

                    {/* Right Announcement Section */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-4">
                        <div className="border-b border-gray-100 pb-3">
                            <h3 className="text-base font-bold text-foreground-heading">
                                Right Announcement Banner
                            </h3>
                            <p className="text-xs text-foreground-muted">
                                Displays on the right side of the top header
                            </p>
                        </div>

                        <div>
                            <label htmlFor="rightText" className="block text-xs font-semibold text-secondary mb-1">
                                Announcement Text
                            </label>
                            <input
                                id="rightText"
                                name="rightText"
                                type="text"
                                required
                                value={formDataState.right.text}
                                onChange={(e) =>
                                    setFormDataState({
                                        ...formDataState,
                                        right: { ...formDataState.right, text: e.target.value },
                                    })
                                }
                                placeholder="New Batch - Beat KMF's 1147 Quant Questions"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="rightDate" className="block text-xs font-semibold text-secondary mb-1">
                                Date / Badge Text
                            </label>
                            <input
                                id="rightDate"
                                name="rightDate"
                                type="text"
                                required
                                value={formDataState.right.date}
                                onChange={(e) =>
                                    setFormDataState({
                                        ...formDataState,
                                        right: { ...formDataState.right, date: e.target.value },
                                    })
                                }
                                placeholder="23 December"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="rightLinkUrl" className="block text-xs font-semibold text-secondary mb-1">
                                Link URL (Optional)
                            </label>
                            <input
                                id="rightLinkUrl"
                                name="rightLinkUrl"
                                type="text"
                                value={formDataState.right.linkUrl || ""}
                                onChange={(e) =>
                                    setFormDataState({
                                        ...formDataState,
                                        right: { ...formDataState.right, linkUrl: e.target.value },
                                    })
                                }
                                placeholder="/courses/beat-kmf"
                                className="w-full rounded-xl border border-gray-200 bg-background-subtle px-4 py-2.5 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Action */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isPending}
                        className={cn(
                            "rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.99] disabled:opacity-70 flex items-center gap-2"
                        )}
                    >
                        {isPending ? (
                            <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                <span>Saving Changes...</span>
                            </>
                        ) : (
                            <>
                                <MdSave className="text-lg" />
                                <span>Save Announcement Banner</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
