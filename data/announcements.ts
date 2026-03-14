export interface Announcement {
    text: string;
    date: string;
    linkUrl?: string;
}

export const defaultLeft: Announcement = {
    text: "New Batch - Beat GRE Quant in 2 Months",
    date: "24 December",
    linkUrl: "/",
};

export const defaultRight: Announcement = {
    text: "New Batch - Beat KMF's 1147 Quant Questions",
    date: "23 December",
    linkUrl: "/",
};
