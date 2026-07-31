import Link from "next/link";
import { MdBook, MdQuestionAnswer, MdPeople, MdRateReview, MdAdd, MdOutlineArrowForward } from "react-icons/md";
import { AdminStatsCard } from "@/features/admin/components/admin-stats-card";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8 font-poppins">
            {/* Welcome Banner */}
            <div className="rounded-3xl bg-primary p-6 md:p-10 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                    <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent mb-3 border border-accent/30">
                        Admin Overview
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                        Welcome to GRE Quant School Admin
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-white/80 leading-relaxed">
                        Manage your live courses, practice question banks, student enrollments, and reviews all from one central dashboard.
                    </p>
                </div>
                {/* Decorative background shape */}
                <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <AdminStatsCard
                    title="Active Courses"
                    value="3"
                    changeText="+1 new batch"
                    isIncrease={true}
                    icon={<MdBook />}
                    iconBgColorClass="bg-primary-soft text-accent"
                />
                <AdminStatsCard
                    title="KMF Question Bank"
                    value="1,794"
                    changeText="+45 added"
                    isIncrease={true}
                    icon={<MdQuestionAnswer />}
                    iconBgColorClass="bg-blue-50 text-blue-600"
                />
                <AdminStatsCard
                    title="Enrolled Students"
                    value="1,240+"
                    changeText="+18% growth"
                    isIncrease={true}
                    icon={<MdPeople />}
                    iconBgColorClass="bg-emerald-50 text-emerald-600"
                />
                <AdminStatsCard
                    title="Student Reviews"
                    value="480"
                    changeText="98% positive"
                    isIncrease={true}
                    icon={<MdRateReview />}
                    iconBgColorClass="bg-amber-50 text-amber-600"
                />
            </div>

            {/* Quick Actions & Recent Activity Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Quick Actions Panel */}
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-lg font-bold text-foreground-heading">
                        Quick Management Actions
                    </h3>
                    <div className="space-y-3">
                        <Link
                            href="/admin/courses"
                            className="flex items-center justify-between rounded-xl bg-background-subtle p-4 text-sm font-medium text-foreground-heading hover:bg-gray-100 transition-colors border border-gray-200/60"
                        >
                            <span className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
                                    <MdAdd />
                                </span>
                                Add New Batch / Course
                            </span>
                            <MdOutlineArrowForward className="text-lg text-foreground-muted" />
                        </Link>

                        <Link
                            href="/admin/kmf-questions"
                            className="flex items-center justify-between rounded-xl bg-background-subtle p-4 text-sm font-medium text-foreground-heading hover:bg-gray-100 transition-colors border border-gray-200/60"
                        >
                            <span className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                                    <MdQuestionAnswer />
                                </span>
                                Upload KMF Questions
                            </span>
                            <MdOutlineArrowForward className="text-lg text-foreground-muted" />
                        </Link>

                        <Link
                            href="/admin/reviews"
                            className="flex items-center justify-between rounded-xl bg-background-subtle p-4 text-sm font-medium text-foreground-heading hover:bg-gray-100 transition-colors border border-gray-200/60"
                        >
                            <span className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-white">
                                    <MdRateReview />
                                </span>
                                Moderate Reviews
                            </span>
                            <MdOutlineArrowForward className="text-lg text-foreground-muted" />
                        </Link>
                    </div>
                </div>

                {/* Recent Activity List */}
                <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-foreground-heading">
                            Recent Platform Activity
                        </h3>
                        <span className="text-xs font-medium text-accent">Live Updates</span>
                    </div>

                    <div className="space-y-4 divide-y divide-gray-100">
                        <div className="pt-2 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-foreground-heading">
                                    New Student Enrolled in Beat GRE Quant
                                </p>
                                <p className="text-xs text-foreground-muted">
                                    Student ID #8492 • Batch starting 15 August 2026
                                </p>
                            </div>
                            <span className="text-xs text-foreground-muted">10 mins ago</span>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-foreground-heading">
                                    Updated KMF Question Bank (1794 Questions)
                                </p>
                                <p className="text-xs text-foreground-muted">
                                    Added 15 Advanced Quantitative Comparison questions
                                </p>
                            </div>
                            <span className="text-xs text-foreground-muted">2 hours ago</span>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-foreground-heading">
                                    5-Star Student Review Received
                                </p>
                                <p className="text-xs text-foreground-muted">
                                    Score: 168 in GRE Quant • Verified Student
                                </p>
                            </div>
                            <span className="text-xs text-foreground-muted">1 day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
