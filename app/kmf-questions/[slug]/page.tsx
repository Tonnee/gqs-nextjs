import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { kmfQuestionsData } from "@/features/kmf-questions/data/kmf-questions-data";
import KmfQuestionsHero from "@/features/kmf-questions/components/kmf-questions-hero";
import KmfCourseContent from "@/features/kmf-questions/components/kmf-course-content";
import CourseHero from "@/features/courses/components/course-hero";
import { courseData } from "@/features/home/data/course-data";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export function generateStaticParams() {
    return kmfQuestionsData.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = kmfQuestionsData.find(p => p.slug === slug);
    
    if (!data) return {};
    
    return {
        title: `${data.title.replace('\n', ' ')} | GRE Quant School`,
        description: `Practice with sample ${data.title.replace('\n', ' ')} for free.`,
    };
}

export default async function KmfQuestionsSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = kmfQuestionsData.find(p => p.slug === slug);
    const course = courseData.find(c => c.slug === 'beat-kmf');

    if (!data || !course) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col">
            <KmfQuestionsHero data={data} />
            <KmfCourseContent data={data} />
            <CourseHero course={course} />
            <VisitSocial className="mt-28"/>
            <Contact/>
        </main>
    );
}
