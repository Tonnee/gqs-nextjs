export interface StrategyVideoItem {
    id: string;
    title: string;
    topic: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
    duration?: string;
    highlight?: string;
}

export const mustKnowStrategiesData: StrategyVideoItem[] = [
    {
        id: "jE3MYPtOfdw",
        title: "Mental Math for GRE Quantitative Section",
        topic: "Speed & Mental Arithmetic",
        description: "Master quick calculation tricks, mental approximations, and smart arithmetic shortcuts to save critical time during the exam without relying on on-screen calculator.",
        videoUrl: "https://www.youtube.com/watch?v=jE3MYPtOfdw",
        thumbnail: "https://img.youtube.com/vi/jE3MYPtOfdw/maxresdefault.jpg",
        duration: "Essential Strategy",
        highlight: "High Impact"
    },
    {
        id: "6jzoNq2atI8",
        title: "All Essential Formulas for GRE Quantitative Section",
        topic: "Formulas & Cheat Sheet",
        description: "Complete formula roadmap covering Geometry, Algebra, Number Properties, Statistics, and Word Problems with practical applications for tricky GRE questions.",
        videoUrl: "https://www.youtube.com/watch?v=6jzoNq2atI8",
        thumbnail: "https://img.youtube.com/vi/6jzoNq2atI8/maxresdefault.jpg",
        duration: "Comprehensive",
        highlight: "Core Review"
    },
    {
        id: "IQcSRx2urNE",
        title: "Strategies for 165+ in GRE Quant",
        topic: "Top Score Blueprint",
        description: "Step-by-step actionable framework used by top scorers to break the 165+ barrier in Quantitative Reasoning, question prioritization, and pacing strategy.",
        videoUrl: "https://www.youtube.com/watch?v=IQcSRx2urNE",
        thumbnail: "https://img.youtube.com/vi/IQcSRx2urNE/maxresdefault.jpg",
        duration: "Proven Tactics",
        highlight: "165+ Goal"
    },
    {
        id: "V12vry7X1hw",
        title: "All High-Frequency Traps & Silly Mistakes in GRE Quant",
        topic: "Mistake Prevention",
        description: "Uncover the deceptive trap answer choices designed by ETS, common algebraic blind spots, and how to bulletproof your scratchpad work against silly mistakes.",
        videoUrl: "https://www.youtube.com/watch?v=V12vry7X1hw",
        thumbnail: "https://img.youtube.com/vi/V12vry7X1hw/maxresdefault.jpg",
        duration: "Error Proofing",
        highlight: "Must Watch"
    },
    {
        id: "yJm7w6hrqLE",
        title: "GRE Exam Day Strategies Do's and Don'ts",
        topic: "Test Day Execution",
        description: "Crucial exam day protocols, mindset control, time pacing per section, guessing strategy, and stress management for maximum test day performance.",
        videoUrl: "https://www.youtube.com/watch?v=yJm7w6hrqLE",
        thumbnail: "https://img.youtube.com/vi/yJm7w6hrqLE/maxresdefault.jpg",
        duration: "Exam Day Protocol",
        highlight: "Final Prep"
    }
];
