import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader/loader";

const fetchArchivedMagazines = async () => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/magazines/archived/`
        );
        return res.data || [];
    } catch (error) {
        console.error("Error fetching archived magazines:", error);
        return [];
    }
};

const PreviousMonthHilal = () => {
    const { data: archiveData = [], isLoading, error } = useQuery({
        queryKey: ["archivedMagazines"],
        queryFn: fetchArchivedMagazines,
    });

    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching archives</p>;

    return (
        <div className="bg-white w-full font-poppins">
            <div className="border-t-[3px] border-red-600">
                <div className="py-2">
                    <h2 className="heading-text-primary">Previous month hilal magazines</h2>
                </div>

                {/* Magazine Covers */}
                <div className="mt-5">
                    {archiveData.length === 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 max-lg: gap-y-4 gap-x-6">
                            {[1, 2, 3].map((index) => (
                                <div key={index} className="overflow-hidden w-full shadow-md bg-gray-100">
                                    <div className="w-full h-[373px] bg-gray-200 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-500 text-sm font-medium">No Magazine</p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-white">
                                        <h3 className="text-sm font-medium text-gray-400 text-center leading-tight">
                                            No magazine available
                                        </h3>
                                        <p className="text-xs text-gray-300 text-center mt-1">
                                            (No data)
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 max-lg: gap-y-4 gap-x-6">
                            {archiveData.slice(0, 3).map((magazine) => (
                                <a
                                    key={magazine.id}
                                    href={magazine.doc_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="overflow-hidden w-full shadow-md transform transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <img
                                        loading="lazy"
                                        src={magazine.cover_image}
                                        alt={magazine.title}
                                        className="w-full h-[373px] object-cover aspect-[3/4]"
                                    />
                                    <div className="p-2 bg-white">
                                        <h3 className="text-sm font-medium text-gray-800 text-center leading-tight">
                                            {magazine.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 text-center mt-1">
                                            ({magazine.publish_date})
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PreviousMonthHilal;
