export interface ReadingSource {
    category: string;
    description: string;
    links: Array<{ name: string; url: string }>;
}

export interface WordListItem {
    id: number;
    title: string;
    source: string;
    url: string;
    isFeatured?: boolean;
}

export interface VerbalBookMaterial {
    id: number;
    title: string;
    imageSrc: string;
    link?: string;
    type?: string;
}

export const readingSourcesData: ReadingSource[] = [
    {
        category: "Scientific & Medical Journals",
        description: "Develop familiarity with dense scientific prose, hypothesis evaluation, and technical terminology.",
        links: [
            { name: "Nature", url: "https://www.nature.com/" },
            { name: "Science Magazine", url: "https://www.sciencemag.org/" },
            { name: "The New England Journal of Medicine", url: "https://www.nejm.org/" },
            { name: "Cell", url: "https://www.cell.com/" },
            { name: "The Lancet", url: "https://www.thelancet.com/" },
            { name: "PNAS (National Academy of Sciences)", url: "https://www.pnas.org/" },
        ]
    },
    {
        category: "News, Policy & Global Commentary",
        description: "Analyze editorial arguments, subtle tone shifts, author bias, and complex sentence structures.",
        links: [
            { name: "The Economist", url: "https://www.economist.com/" },
            { name: "The New York Times", url: "https://www.nytimes.com/" },
            { name: "The Wall Street Journal", url: "https://www.wsj.com/" },
            { name: "The Guardian", url: "https://www.theguardian.com/" },
            { name: "The Washington Post", url: "https://www.washingtonpost.com/" },
            { name: "Reuters", url: "https://www.reuters.com/" },
        ]
    },
    {
        category: "Economics, Business & Social Sciences",
        description: "Read peer-reviewed social science perspectives, economic modeling, and organizational behavior.",
        links: [
            { name: "Harvard Business Review", url: "https://hbr.org/" },
            { name: "The Journal of Psychology", url: "https://www.tandfonline.com/toc/hjop20/current" },
            { name: "The Journal of Finance", url: "https://onlinelibrary.wiley.com/journal/15406261" },
            { name: "The Journal of Political Economy", url: "https://www.journals.uchicago.edu/toc/jpe/current" },
            { name: "The American Economic Review", url: "https://www.aeaweb.org/journals/aer" },
        ]
    },
    {
        category: "Arts, Philosophy & Essays",
        description: "Engage with thought-provoking essays, philosophical discourse, cultural critiques, and literature.",
        links: [
            { name: "Arts & Letters Daily (ALDaily)", url: "https://www.aldaily.com/" },
            { name: "Aeon Essays", url: "https://aeon.co/" },
            { name: "The Conversation", url: "https://theconversation.com/" },
            { name: "ReadTheory Practice", url: "https://readtheory.org/" },
        ]
    }
];

export const wordListsData: WordListItem[] = [
    {
        id: 1,
        title: "GregMat’s 900 Wordlist (Synonyms)",
        source: "GregMat High-Yield",
        url: "https://drive.google.com/file/d/10weKAETlqHq60pH_tYfIiThvILlMVfLI/view?usp=share_link",
        isFeatured: true
    },
    {
        id: 2,
        title: "GregMat’s 900 Wordlist",
        source: "GregMat Core",
        url: "https://drive.google.com/file/d/1pmxkceIBSwKSxCZrO_Ay_RIL6bQj2_Tl/view?usp=share_link",
        isFeatured: true
    },
    {
        id: 3,
        title: "GregMat’s 27 Groups (Image Flashcards)",
        source: "GregMat Visual",
        url: "https://drive.google.com/file/d/1kMYmKiTOEY2nny2UqajQTH4idqPrmgyb/view?usp=share_link"
    },
    {
        id: 4,
        title: "Magoosh 1000 High Frequency GRE Words",
        source: "Magoosh",
        url: "https://drive.google.com/file/d/1JU4Q1D72XYXZQD4DchbtrMnJWEVCp4n8/view?usp=share_link",
        isFeatured: true
    },
    {
        id: 5,
        title: "Barron’s 333 High Frequency GRE Words",
        source: "Barron's Essential",
        url: "https://drive.google.com/file/d/1DwuRtygJ-mi2PPDsbdR7rOjca9_s6MHk/view?usp=share_link"
    },
    {
        id: 6,
        title: "Barron’s 800 High Frequency GRE Words",
        source: "Barron's Complete",
        url: "https://drive.google.com/file/d/11nzXdciZPTQz60YqCA3PDV9RzIuFO5-K/view?usp=share_link"
    },
    {
        id: 7,
        title: "CrunchPrep Top 101 GRE Words",
        source: "CrunchPrep Quick",
        url: "https://drive.google.com/file/d/1L6p-yc6PVN9sj5vjQEwEK__6RhV96HpA/view?usp=share_link"
    },
    {
        id: 8,
        title: "PrepScholar 357 GRE Words",
        source: "PrepScholar",
        url: "https://drive.google.com/file/d/1vKjVLyNuOS3roq1ESCNSMQs-8VUwYN9A/view?usp=share_link"
    }
];

export const textCompletionMaterials: VerbalBookMaterial[] = [
    {
        id: 1,
        title: "Official GRE Verbal Reasoning Practice Questions",
        imageSrc: "/images/books/Official GRE Verbal Reasoning.jpg",
        type: "ETS Official"
    },
    {
        id: 2,
        title: "ETS Official Guide to GRE",
        imageSrc: "/images/books/ETS Official Guide to GRE.jpg",
        type: "ETS Official"
    },
    {
        id: 3,
        title: "ETS Paper-Based Revised GRE Practice Book",
        imageSrc: "/images/books/ETS Paper-based revised GRE practice book -2.png",
        type: "ETS Official"
    },
    {
        id: 4,
        title: "GRE Big Book (27 Full Tests)",
        imageSrc: "/images/books/GRE Big Book.jpg",
        type: "ETS Classic"
    },
    {
        id: 5,
        title: "GRE Verbal Grail",
        imageSrc: "/images/books/GRE Verbal Grail.jpg",
        type: "Aristotle Prep"
    },
    {
        id: 6,
        title: "Princeton Review 1,027 Questions",
        imageSrc: "/images/books/Prinston 1027.jpg",
        type: "Princeton Review"
    },
    {
        id: 7,
        title: "KMF 1300 Questions",
        imageSrc: "/images/books/KMF Questions.jpg",
        link: "https://drive.google.com/file/d/1ipuh4b_3pus20Op2jMFJN-PRAp3p9SUb/view?usp=share_link",
        type: "KMF Question Bank"
    },
    {
        id: 8,
        title: "KMF 1300 Answers & Explanations",
        imageSrc: "/images/books/KMF Answers.jpg",
        link: "https://drive.google.com/file/d/1p5NJLPIaSfJrSPm9g4boJUdDyFiCAOX9/view?usp=share_link",
        type: "KMF Answer Keys"
    }
];

export const sentenceEquivalenceMaterials: VerbalBookMaterial[] = [
    {
        id: 1,
        title: "Official GRE Verbal Reasoning Practice Questions",
        imageSrc: "/images/books/Official GRE Verbal Reasoning.jpg",
        type: "ETS Official"
    },
    {
        id: 2,
        title: "ETS Official Guide to GRE",
        imageSrc: "/images/books/ETS Official Guide to GRE.jpg",
        type: "ETS Official"
    },
    {
        id: 3,
        title: "ETS Paper-Based Revised GRE Practice Book",
        imageSrc: "/images/books/ETS Paper-based revised GRE practice book -2.png",
        type: "ETS Official"
    },
    {
        id: 4,
        title: "GRE Verbal Grail",
        imageSrc: "/images/books/GRE Verbal Grail.jpg",
        type: "Aristotle Prep"
    },
    {
        id: 5,
        title: "Princeton Review 1,027 Questions",
        imageSrc: "/images/books/Prinston 1027.jpg",
        type: "Princeton Review"
    },
    {
        id: 6,
        title: "KMF Sentence Equivalence Practice",
        imageSrc: "/images/books/KMF Sentance.jpg",
        link: "https://gre.kmf.com/practise/tc/151",
        type: "KMF Online Practice"
    }
];

export const readingComprehensionMaterials: VerbalBookMaterial[] = [
    {
        id: 1,
        title: "Official GRE Verbal Reasoning Practice Questions",
        imageSrc: "/images/books/Official GRE Verbal Reasoning.jpg",
        type: "ETS Official"
    },
    {
        id: 2,
        title: "ETS Official Guide to GRE",
        imageSrc: "/images/books/ETS Official Guide to GRE.jpg",
        type: "ETS Official"
    },
    {
        id: 3,
        title: "ETS Paper-Based Revised GRE Practice Book",
        imageSrc: "/images/books/ETS Paper-based revised GRE practice book -2.png",
        type: "ETS Official"
    },
    {
        id: 4,
        title: "GRE Big Book (27 Full Tests)",
        imageSrc: "/images/books/GRE Big Book.jpg",
        type: "ETS Classic"
    },
    {
        id: 5,
        title: "KMF Reading Comprehension Practice",
        imageSrc: "/images/books/kmf RC.jpg",
        link: "https://gre.kmf.com/practise/rc",
        type: "KMF Online Practice"
    },
    {
        id: 6,
        title: "GMAT Official Guide (RC Passages)",
        imageSrc: "/images/books/gmat.jpg",
        type: "GMAT Official"
    }
];
