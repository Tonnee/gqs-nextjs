"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdRefresh } from "react-icons/md";
import DualText from "@/components/ui/dual-text";
import { FreeQuestion } from "../data/free-questions-data";

interface QuestionCardProps {
    question: FreeQuestion;
    elapsedTime: number;
    isActive: boolean;
    onPlay: () => void;
    onPause: () => void;
    onReset: () => void;
    onTimeUpdate: (time: number) => void;
}

export default function QuestionCard({
    question,
    elapsedTime,
    isActive,
    onPlay,
    onPause,
    onReset,
    onTimeUpdate
}: QuestionCardProps) {
    const [showAnswer, setShowAnswer] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    // Intersection Observer for pausing when out of view
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    // Pause if not intersecting
    useEffect(() => {
        if (!isIntersecting && isActive) {
            onPause();
        }
    }, [isIntersecting, isActive, onPause]);

    // Timer interval
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && isIntersecting) {
            interval = setInterval(() => {
                onTimeUpdate(elapsedTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, isIntersecting, elapsedTime, onTimeUpdate]);

    // Format time
    const mins = Math.floor(elapsedTime / 60);
    const secs = elapsedTime % 60;
    const timeText = `${mins}:${secs.toString().padStart(2, "0")}`;

    // Parse standard time to compare
    const parseTime = (timeStr: string) => {
        if (timeStr.includes(':')) {
            const [m, s] = timeStr.split(':');
            return parseInt(m) * 60 + parseInt(s);
        }
        return parseInt(timeStr.replace(/\D/g, '')) || 40;
    }
    const stdTime = parseTime(question.timeExpected || "40 Sec");
    const isOverTime = elapsedTime > stdTime;

    return (
        <div ref={cardRef} className="bg-white p-6 md:p-8 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                {/* First 3 columns: Question info & Stopwatch */}
                <div className="col-span-1 md:col-span-2 h-full pt-2">

                    <div className="flex flex-col mb-8">
                        <h3 className="text-[24px] font-poppins font-normal text-primary-deep mb-6">
                            Question {question.id}
                        </h3>

                        <div>
                            <DualText lightText="Difficulty Level: " boldText={question.difficulty || "3"} fontClass="text-base" distanceBottom="mb-2" />
                            <DualText lightText="Standard Time: " boldText={question.timeExpected || "40 Sec"} fontClass="text-base" distanceBottom="mb-0" />
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="flex items-center mr-10">
                            <FiClock className="text-accent text-[28px] mr-2" />
                            <span className={`font-poppins text-xl font-semibold ${isOverTime ? 'text-accent' : 'text-primary'}`}>
                                {timeText}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            {isActive ? (
                                <FaPause className="text-primary hover:text-accent cursor-pointer text-[22px] transition-colors" onClick={() => onPause()} />
                            ) : (
                                <FaPlay className="text-primary hover:text-accent cursor-pointer text-[20px] transition-colors" onClick={() => onPlay()} />
                            )}
                            <MdRefresh className="text-primary hover:text-accent cursor-pointer text-[24px] transition-colors" onClick={() => onReset()} />
                        </div>
                    </div>
                </div>

                {/* Middle 6 columns: Question Image */}
                <div className="col-span-1 md:col-span-7 relative w-full rounded-xl overflow-hidden flex items-center justify-center">
                    <Image
                        src={question.imageSrc}
                        alt={`Question ${question.id}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="object-contain"
                    />
                </div>

                {/* Last 3 columns: Video & Answer */}
                <div className="col-span-1 md:col-span-3 flex flex-row items-start justify-end h-full gap-4">
                    {question.videoLink && (
                        <Link
                            href={question.videoLink}
                            target="_blank"
                            className="flex items-center font-poppins text-foreground-heading hover:text-accent transition-colors font-medium text-lg whitespace-nowrap mt-3"
                        >
                            <svg className="w-8 h-8 mr-3 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            Video Explanation
                        </Link>
                    )}

                    <button
                        onClick={() => setShowAnswer(prev => !prev)}
                        className={`py-3.5 px-6 rounded-full font-poppins font-semibold text-base transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${showAnswer
                            ? "bg-primary-soft text-white border-2 border-transparent shadow-inner"
                            : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                            }`}
                    >
                        {showAnswer ? `Answer: ${question.answer}` : "Answer"}
                    </button>
                </div>
            </div>
        </div>
    );
}
