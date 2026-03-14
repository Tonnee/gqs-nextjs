import Link from "next/link";
import { Container } from "./container";
import { Announcement, defaultLeft, defaultRight } from "@/data/announcements";
import { cn } from "@/lib/utils";

export interface HeaderProps {
    leftAnnouncement?: Announcement;
    rightAnnouncement?: Announcement;
}

function AnnouncementMessage({
    announcement,
    alignRight = false,
}: {
    announcement: Announcement;
    alignRight?: boolean;
}) {
    return (
        <div
            className={cn(
                "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base text-white font-raleway",
                alignRight ? "md:justify-end" : "md:justify-start"
            )}
        >
            <span>{announcement.text}</span>
            <span className="text-accent font-medium">{announcement.date}</span>
            {announcement.linkUrl && (
                <Link
                    href={announcement.linkUrl}
                    className="text-accent font-semibold transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`Learn more about ${announcement.text}`}
                >
                    (Learn More)
                </Link>
            )}
        </div>
    );
}

export function Header({
    leftAnnouncement = defaultLeft,
    rightAnnouncement = defaultRight,
}: HeaderProps) {
    return (
        <header 
            className="flex min-h-18 w-full items-center bg-primary py-3 md:py-0"
            role="region"
            aria-label="Announcements"
        >
            <Container>
                <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
                    <div className="flex-1 w-full">
                        {leftAnnouncement && (
                            <AnnouncementMessage announcement={leftAnnouncement} />
                        )}
                    </div>
                    <div className="flex-1 w-full">
                        {rightAnnouncement && (
                            <AnnouncementMessage 
                                announcement={rightAnnouncement} 
                                alignRight 
                            />
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
}
