import rawQuestions from "./awa-questions.json";

export interface AwaQuestion {
    id: number;
    prompt: string;
    response: string;
}

export interface AwaResourceCard {
    id: number;
    title: string;
    badge: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
    imageAlt: string;
    isExternal?: boolean;
    isVideo?: boolean;
}

export const awaResourcesData: AwaResourceCard[] = [
    {
        id: 1,
        title: "Pool of Official Issue Topics",
        badge: "ETS Official Prompts",
        description: "Access the complete collection of official ETS GRE Issue essay prompts in an organized, searchable PDF document.",
        buttonText: "Download PDF",
        buttonLink: "https://drive.google.com/file/d/1n3H15IhfhmKkApml-5-GzhfjlDK3dDEC/view?usp=share_link",
        imageSrc: "/images/issue.png",
        imageAlt: "Pool of Issue Topics - GRE Quant School",
        isExternal: true
    },
    {
        id: 2,
        title: "Analyze an Issue Task Guidelines",
        badge: "Scoring Criteria",
        description: "Official ETS scoring rubric, instructions, and performance expectations to achieve a top-tier 5.0+ score on the Issue Task.",
        buttonText: "View ETS Guidelines",
        buttonLink: "https://www.ets.org/gre/test-takers/general-test/prepare/content/analytical-writing/issue.html",
        imageSrc: "/images/analyze-issue.png",
        imageAlt: "Analyze an Issue Task - GRE Quant School",
        isExternal: true
    },
    {
        id: 3,
        title: "GregMat Issue Essay Walkthrough",
        badge: "Video Strategy",
        description: "Step-by-step video guide covering essay templates, introduction crafting, thesis generation, and paragraph structuring.",
        buttonText: "Watch Video Lesson",
        buttonLink: "https://www.youtube.com/watch?v=mhzlaHXHaK4",
        imageSrc: "/images/reading.png",
        imageAlt: "AWA Video Lesson - GRE Quant School",
        isVideo: true,
        isExternal: true
    },
    {
        id: 4,
        title: "GRE AWA The Essay App",
        badge: "Offline Practice Tool",
        description: "Download the mobile companion app featuring 100+ sample essays, topic brainstorming frameworks, and offline reading.",
        buttonText: "Download Mobile App",
        buttonLink: "https://apkpure.com/gre-awa-the-essay-app/hrm.burntcar.com.greawa/download",
        imageSrc: "/images/apps.webp",
        imageAlt: "GRE AWA Essay Mobile App",
        isExternal: true
    }
];

export const awaQuestionsData: AwaQuestion[] = rawQuestions as AwaQuestion[];
