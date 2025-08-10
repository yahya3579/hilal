import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBillboardByLocation = async (location) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/billboard/location/${location}/`);
    return res.data.data;
};

const ReaderOpinionUrdu = () => {
    const { data: billboard1, isLoading: loading1, error: error1 } = useQuery({
        queryKey: ["billboard", "location-5"],
        queryFn: () => fetchBillboardByLocation(5),
        onError: () => { }, // Handle errors silently
    });

    const { data: billboard2, isLoading: loading2, error: error2 } = useQuery({
        queryKey: ["billboard", "location-6"],
        queryFn: () => fetchBillboardByLocation(6),
        onError: () => { }, // Handle errors silently
    });

    return (
        <>
            <div className="space-y-4 lg:col-span-3 font-poppins">
                {/* Advertisement Boxes */}
                <div className="space-y-2 max-lg:mt-2 justify-around flex mx-auto w-[90%] gap-x-6">
                    {/* Billboard 1 */}
                    {billboard1 && billboard1.image ? (
                        <img
                            src={billboard1.image}
                            alt="Reader Billboard 1"
                            className="w-[120px] h-[120px] object-fill"
                        />
                    ) : (
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                            alt="Default Reader Billboard 1"
                            className="w-[120px] h-[120px] object-cover"
                        />
                    )}

                    {/* Billboard 2 */}
                    {billboard2 && billboard2.image ? (
                        <img
                            src={billboard2.image}
                            alt="Reader Billboard 2"
                            className="w-[120px] h-[120px] object-fill"
                        />
                    ) : (
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                            alt="Default Reader Billboard 2"
                            className="w-[120px] h-[120px] object-cover"
                        />
                    )}
                </div>

                {/* Readers Opinion Section */}
                <div className="border-t-[3px] border-red-600 mt-6">
                    <div className="py-2 px-4">
                        <h2 className="heading-text-primary">
                            قارئین کی رائے
                        </h2>
                    </div>

                    <div className="bg-gray-50 p-3 space-y-3">
                        {[1, 2, 3].map((_, idx) => (
                            <div key={idx} className="flex gap-3 shadow-[6px_6px_10px_rgba(0,0,0,0.15)] py-3 px-2 items-start">
                                <div className="flex self-center">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                                        alt="Reader"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold line-clamp-2 text-black leading-[1.8]">
                                        &ldquo; Long established fact that a reader will be distracted
                                    </p>
                                    <div className="text-xs text-gray-400 mt-1">
                                        By <span className="">Nikunj2</span> - 16 April 2017
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReaderOpinionUrdu;