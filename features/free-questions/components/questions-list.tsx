"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/layout/container";
import QuestionCard from "./question-card";
import { freeQuestionsData } from "../data/free-questions-data";
import Pagination from "@/components/ui/pagination";

export default function QuestionsList() {
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 10;
    
    // Timer states
    const [timers, setTimers] = useState<Record<number, number>>({});
    const [activeTimerId, setActiveTimerId] = useState<number | null>(null);

    const handleTimeUpdate = useCallback((id: number, time: number) => {
        setTimers(prev => ({ ...prev, [id]: time }));
    }, []);

    const handlePlay = useCallback((id: number) => {
        setActiveTimerId(id);
    }, []);

    const handlePause = useCallback((id: number) => {
        setActiveTimerId(prev => (prev === id ? null : prev));
    }, []);

    const handleReset = useCallback((id: number) => {
        setTimers(prev => ({ ...prev, [id]: 0 }));
        setActiveTimerId(prev => (prev === id ? null : prev));
    }, []);

    // Pagination logic
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = freeQuestionsData.slice(indexOfFirstQuestion, indexOfLastQuestion);
    
    const totalPages = Math.ceil(freeQuestionsData.length / questionsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    return (
        <section className="py-20 min-h-screen">
            <Container>
                <div className="mx-auto">
                    {/* Questions Wrapper */}
                    <div className="space-y-6">
                        {currentQuestions.map(question => (
                            <QuestionCard 
                                key={question.id} 
                                question={question}
                                elapsedTime={timers[question.id] || 0}
                                isActive={activeTimerId === question.id}
                                onPlay={() => handlePlay(question.id)}
                                onPause={() => handlePause(question.id)}
                                onReset={() => handleReset(question.id)}
                                onTimeUpdate={(time) => handleTimeUpdate(question.id, time)}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        infoText={`Question ${indexOfFirstQuestion + 1} of ${freeQuestionsData.length}`}
                    />
                </div>
            </Container>
        </section>
    );
}
