import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
    imgSrc: string;
    imgAlt: string;
    score: string;
    name: string;
    className?: string;
}

export default function ReviewCard({ imgSrc, imgAlt, score, name, className }: ReviewCardProps) {
    return (
        <article 
            className={cn(
                "relative w-full h-[400px] md:h-[577px] md:rounded-full rounded-2xl overflow-hidden shrink-0 group", 
                className
            )}
        >
            <Image
                src={imgSrc}
                alt={imgAlt || "Student review"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-top md:object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent review-gradient w-full h-full md:rounded-full rounded-2xl">
                <div className="absolute bottom-11 left-1/2 -translate-x-1/2 text-center w-full px-4 text-base capitalize">
                    <p className="text-white/65 mb-1.5 font-normal">
                        Score:{" "}
                        <span className="text-accent">{score}</span>
                    </p>
                    <p className="text-white font-normal">{name}</p>
                </div>
            </div>
        </article>
    );
}

