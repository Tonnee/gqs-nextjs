export interface FreeQuestion {
    id: number;
    imageSrc: string;
    videoLink: string;
    answer: string;
    timeExpected?: string;
}

// Generate dummy data for 25 questions to test pagination
export const freeQuestionsData: FreeQuestion[] = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    imageSrc: "/questions/free-questions/1.png", // fallback dummy image
    videoLink: "https://youtube.com",
    answer: "A",
    timeExpected: "1:30"
}));
