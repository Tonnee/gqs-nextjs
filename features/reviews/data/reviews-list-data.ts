export interface ReviewData {
    id: number;
    name: string;
    profession?: string;
    batch?: string;
    imageSrc: string;
    tagline: string;
    review: string;
}

export const reviewsListData: ReviewData[] = Array.from({ length: 1000 }).map((_, i) => ({
    id: i + 1,
    name: "Maria Joye",
    profession: "Officer",
    batch: "32 Batch",
    imageSrc: "/images/review/1.png", // Fallback to an existing image
    tagline: '"Best quant course ever..."',
    review: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."'
}));
