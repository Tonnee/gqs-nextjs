export interface Announcement {
    text: string;
    date: string;
    linkUrl?: string;
}

export interface AnnouncementsData {
    left: Announcement;
    right: Announcement;
}
