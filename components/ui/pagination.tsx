import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    infoText?: React.ReactNode;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    infoText
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages - 1, totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, 2, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-16 mb-8 gap-4 select-none">
            <div className="flex items-center space-x-2">
                <button 
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-subtle text-foreground-heading hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-background-subtle transition-colors cursor-pointer"
                >
                    <FiChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                    {getPageNumbers().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' ? onPageChange(page) : null}
                            disabled={page === '...'}
                            className={`w-10 h-10 rounded-lg font-poppins font-medium transition-colors flex items-center justify-center cursor-pointer ${
                                page === '...' 
                                ? "bg-background-subtle text-foreground-heading cursor-default" 
                                : currentPage === page 
                                    ? "bg-primary text-white" 
                                    : "bg-background-subtle text-foreground-heading hover:bg-gray-200"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                
                <button 
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-subtle text-foreground-heading hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-background-subtle transition-colors cursor-pointer"
                >
                    <FiChevronRight className="w-5 h-5" />
                </button>
            </div>
            
            {infoText && (
                <div className="font-poppins text-primary-deep font-medium">
                    {infoText}
                </div>
            )}
        </div>
    );
}
