export type KmfSubQuestion = {
    difficulty: string;
    questionCount: number;
};

export type KmfSectionAccordion = {
    title: string;
    sectionCount: number;
    items?: KmfSubQuestion[];
};

export type KmfCourseSection = {
    heading: string;
    accordions: KmfSectionAccordion[];
};

export interface KmfQuestionPageData {
    slug: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
    sections?: KmfCourseSection[];
}

export const kmfQuestionsData: KmfQuestionPageData[] = [
    {
        slug: "kmf-verbal",
        title: "KMF Verbal\nQuestions",
        subtitle: "102 questions with Answers",
        backgroundImage: "/images/kmf-questions.png",
        sections: [
            {
                heading: "Reading and Logic",
                accordions: [
                    {
                        title: "Special Exercises for Logic Single Questions",
                        sectionCount: 2,
                        items: [
                            { difficulty: "Esay", questionCount: 12 },
                            { difficulty: "Medium", questionCount: 12 }
                        ]
                    },
                    {
                        title: "Special exercises for Chinese articles",
                        sectionCount: 3
                    },
                    {
                        title: "GRE reading 470 short articles special practice",
                        sectionCount: 3
                    }
                ]
            },
            {
                heading: "Fill in the Blanks and Equivalence",
                accordions: [
                    {
                        title: "Choose two special exercises from six",
                        sectionCount: 48
                    }
                ]
            },
            {
                heading: "GRE fill in the blanks 1700 questions",
                accordions: [
                    {
                        title: "Base Section",
                        sectionCount: 36
                    },
                    {
                        title: "Exclusive Section",
                        sectionCount: 4
                    },
                    {
                        title: "Medium Section",
                        sectionCount: 16
                    }
                ]
            }
        ]
    },
    {
        slug: "kmf-latest-1794",
        title: "KMF Latest 1794\nQuestions",
        subtitle: "1794 latest questions with Answers",
        backgroundImage: "/images/kmf-questions.png",
        sections: []
    },
    {
        slug: "kmf-1147",
        title: "KMF 1147\nQuestions",
        subtitle: "1147 questions with Answers",
        backgroundImage: "/images/kmf-questions.png",
        sections: []
    }
];
