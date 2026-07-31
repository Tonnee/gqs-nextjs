export interface LandingData {
    heroSubtitle: string;
    heroTitle: string;
    heroDescription: string;
    offerBadgeText: string;
    offerCtaText: string;
    offerCtaLink: string;
    heroImageUrl: string;
    videoUrl?: string;
}

export const defaultLandingData: LandingData = {
    heroSubtitle: "GRE Quant School",
    heroTitle: "Master GRE Quant with Precision and Confidence",
    heroDescription: "Learn smarter strategies, solve faster, and score higher with ease. Join thousands who have aced GRE Quant with our help!",
    offerBadgeText: "Get 50% discount on course fee",
    offerCtaText: "Join Today",
    offerCtaLink: "https://wa.me/+8801833455635",
    heroImageUrl: "/images/banner.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};
