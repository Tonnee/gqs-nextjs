import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AdminStatsCardProps {
    title: string;
    value: string | number;
    changeText: string;
    isIncrease?: boolean;
    icon: ReactNode;
    iconBgColorClass?: string;
}

export function AdminStatsCard({
    title,
    value,
    changeText,
    isIncrease = true,
    icon,
    iconBgColorClass = "bg-primary-soft text-accent",
}: AdminStatsCardProps) {
    return (
        <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 font-poppins hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground-muted">{title}</span>
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-inner", iconBgColorClass)}>
                    {icon}
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-3xl font-bold text-foreground-heading tracking-tight">
                    {value}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold">
                    <span className={cn(isIncrease ? "text-green-600 bg-green-50" : "text-amber-600 bg-amber-50", "px-2 py-0.5 rounded-md")}>
                        {isIncrease ? "↑" : "↓"} {changeText}
                    </span>
                    <span className="text-foreground-muted font-normal">vs last month</span>
                </div>
            </div>
        </div>
    );
}
