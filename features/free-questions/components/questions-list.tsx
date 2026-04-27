"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/layout/container";
import QuestionCard from "./question-card";
import { freeQuestionsData } from "../data/free-questions-data";

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
        <section className="py-20 bg-background-subtle min-h-screen">
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
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-16 mb-8">
                            <button 
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="px-5 py-2.5 font-poppins text-primary font-medium rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                            >
                                Previous
                            </button>
                            
                            <div className="flex space-x-2">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`w-11 h-11 rounded-lg font-poppins font-medium transition-colors ${
                                            currentPage === i + 1 
                                            ? "bg-primary text-white" 
                                            : "bg-white border border-gray-200 text-primary hover:bg-gray-50"
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            
                            <button 
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="px-5 py-2.5 font-poppins text-primary font-medium rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
