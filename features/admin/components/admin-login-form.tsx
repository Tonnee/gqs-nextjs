"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdMail, MdLock, MdVisibility, MdVisibilityOff, MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";
import { loginAdminAction } from "../actions/auth-actions";
import { cn } from "@/lib/utils";

export function AdminLoginForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const res = await loginAdminAction(formData);

            if (!res.success) {
                setErrorMessage(res.error);
                return;
            }

            setSuccessMessage(res.message || "Login successful!");
            setTimeout(() => {
                window.location.href = res.data.redirectUrl;
            }, 300);
        });
    };

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 font-poppins">
            {/* Logo & Header */}
            <div className="flex flex-col items-center text-center mb-8">
                <Link href="/" className="relative h-12 w-48 mb-4 inline-block focus-visible:outline-2 focus-visible:outline-accent">
                    <Image
                        src="/images/gre-quant-school-logo.png"
                        alt="GRE Quant School Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>
                <h1 className="text-2xl font-bold text-foreground-heading tracking-tight">
                    Admin Portal
                </h1>
                <p className="text-sm text-foreground-muted mt-1">
                    Sign in to manage your GRE Quant School dashboard
                </p>
            </div>

            {/* Error Alert */}
            {errorMessage && (
                <div
                    role="alert"
                    className="mb-6 flex items-center gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700 border border-red-200"
                >
                    <MdErrorOutline className="text-xl shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            {/* Success Alert */}
            {successMessage && (
                <div
                    role="status"
                    className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-sm text-green-700 border border-green-200"
                >
                    <MdCheckCircleOutline className="text-xl shrink-0" />
                    <span>{successMessage}</span>
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Email Input */}
                <div>
                    <label htmlFor="admin-email" className="block text-sm font-medium text-secondary mb-2">
                        Email Address
                    </label>
                    <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-foreground-muted text-xl pointer-events-none">
                            <MdMail />
                        </div>
                        <input
                            id="admin-email"
                            name="email"
                            type="email"
                            required
                            placeholder="admin@quantschool.com"
                            className="w-full rounded-xl border border-gray-200 bg-background-subtle pl-11 pr-4 py-3 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label htmlFor="admin-password" className="block text-sm font-medium text-secondary">
                            Password
                        </label>
                        <span className="text-xs text-foreground-muted">
                            Demo: admin123
                        </span>
                    </div>
                    <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-foreground-muted text-xl pointer-events-none">
                            <MdLock />
                        </div>
                        <input
                            id="admin-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-gray-200 bg-background-subtle pl-11 pr-11 py-3 text-sm text-foreground-heading placeholder:text-foreground-muted focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="absolute right-3.5 text-foreground-muted hover:text-secondary text-xl focus:outline-none"
                        >
                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isPending}
                    className={cn(
                        "w-full rounded-xl bg-accent px-4 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                    )}
                >
                    {isPending ? (
                        <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>Signing In...</span>
                        </>
                    ) : (
                        <span>Sign In to Admin Panel</span>
                    )}
                </button>
            </form>

            <div className="mt-8 text-center text-xs text-foreground-muted border-t border-gray-100 pt-6">
                Back to <Link href="/" className="text-accent font-semibold hover:underline">GRE Quant School Homepage</Link>
            </div>
        </div>
    );
}
