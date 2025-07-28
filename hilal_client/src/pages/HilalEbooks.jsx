
// const HilalEbooks = () => {
//     const ebookData = [
//         {
//             id: 1,
//             title: "Hilal Urdu July 2025",
//             date: "2025-07-04",
//             cover:
//                 "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
//         },
//         {
//             id: 2,
//             title: "Hilal Urdu June 2025",
//             date: "2025-06-04",
//             cover:
//                 "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
//         },
//         {
//             id: 3,
//             title: "Hilal Urdu May 2025",
//             date: "2025-05-01",
//             cover:
//                 "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
//         },
//         {
//             id: 4,
//             title: "Hilal Urdu April 2025",
//             date: "2025-04-07",
//             cover:
//                 "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
//         },
//         {
//             id: 5,
//             title: "Hilal Urdu February 2025",
//             date: "2025-02-04",
//             cover:
//                 "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
//         },
//         {
//             id: 6,
//             title: "Hilal Urdu March 2025",
//             date: "2025-03-05",
//             cover:
//                 "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop",
//         },
//         {
//             id: 7,
//             title: "Hilal Urdu February 2025",
//             date: "2025-02-04",
//             cover:
//                 "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
//         },
//         {
//             id: 8,
//             title: "Hilal Urdu January 2025",
//             date: "2025-01-07",
//             cover:
//                 "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
//         },
//     ];

//     return (
//         <div className="bg-white min-h-screen">
//             {/* Header */}
//             <div className="px-3 sm:px-6 pt-3 sm:pt-4">
//                 <h1 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#DF1600] font-[Poppins] mt-1 sm:mt-2">
//                     Ebooks
//                 </h1>
//             </div>

//             {/* Grid + Red Line */}
//             <div className="px-3 sm:px-6 py-3 sm:py-4">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
//                     {/* Red Line */}
//                     <div className="col-span-full border-t-[3px] border-[#DF1600] mb-1 sm:mb-2" />

//                     {/* Archive Items */}
//                     {ebookData.map((issue) => (
//                         <div
//                             key={issue.id}
//                             className="border border-gray-200 shadow-sm bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
//                         >
//                             <div className="relative">
//                                 <img
//                                     src={issue.cover}
//                                     alt={issue.title}
//                                     className="w-full aspect-[3/4] object-cover"
//                                 />
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HilalEbooks;


import React, { useState } from 'react';

const HilalEbooks = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ebookData = [
        {
            id: 1,
            title: "Hilal Urdu July 2025",
            date: "2025-07-04",
            cover: "/ebook/images/pdf 1.jpg",
            pdf: "/ebook/books/pdf 1.pdf"
        },
        {
            id: 2,
            title: "Hilal Urdu June 2025",
            date: "2025-06-04",
            cover: "/ebook/images/pdf 2.jpg",
            pdf: "/ebook/books/pdf 2.pdf"
        },
        {
            id: 3,
            title: "Hilal Urdu May 2025",
            date: "2025-05-01",
            cover: "/ebook/images/pdf 3.jpg",
            pdf: "/ebook/books/pdf 3.pdf"
        },
        {
            id: 4,
            title: "Hilal Urdu April 2025",
            date: "2025-04-07",
            cover: "/ebook/images/pdf 4.jpg",
            pdf: "/ebook/books/pdf 4.pdf"
        },
        {
            id: 5,
            title: "Hilal Urdu February 2025",
            date: "2025-02-04",
            cover: "/ebook/images/pdf 5.jpg",
            pdf: "/ebook/books/pdf 5.pdf"
        }
    ];

    const handleBookClick = (book) => {
        // Open PDF in browser's default PDF viewer instead of modal
        window.open(book.pdf, '_blank', 'noopener,noreferrer');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPdf(null);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="px-3 sm:px-6 pt-3 sm:pt-4">
                <h1 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#DF1600] font-[Poppins] mt-1 sm:mt-2">
                    Ebooks
                </h1>
            </div>

            {/* Grid + Red Line */}
            <div className="px-3 sm:px-6 py-3 sm:py-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                    {/* Red Line */}
                    <div className="col-span-full border-t-[3px] border-[#DF1600] mb-1 sm:mb-2" />

                    {/* Archive Items */}
                    {ebookData.map((issue) => (
                        <div
                            key={issue.id}
                            className="border border-gray-200 shadow-sm bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleBookClick(issue)}
                        >
                            <div className="relative">
                                <img
                                    src={issue.cover}
                                    alt={issue.title}
                                    className="w-full aspect-[3/4] object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PDF Modal */}
            {isModalOpen && selectedPdf && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            ✕
                        </button>
                        
                        {/* PDF Viewer */}
                        <iframe
                            src={selectedPdf}
                            className="w-full h-full"
                            title="PDF Viewer"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HilalEbooks;