import React from 'react';
import advertisementImage from '../../assets/advertisment4.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBillboardByLocation = async (location) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/billboard/location/${location}/`);
        return res.data.data;
    } catch (error) {
        // Return null for 404s and other errors to show default content
        return null;
    }
};

const Advertisement4 = () => {
    const { data: billboard, isLoading, error } = useQuery({
        queryKey: ['billboard', 'location-4'],
        queryFn: () => fetchBillboardByLocation(4),
        retry: false, // Don't retry on failures
        refetchOnWindowFocus: false, // Don't refetch when window gains focus
    });

    return (
        <div className="w-[80%] mx-auto my-6">
            {billboard && billboard.image ? (
                <img
                    src={billboard.image}
                    alt={billboard.title || "Advertisement"}
                    className="mx-auto w-full h-[90px] object-fill"
                />
            ) : (
                <div className="w-[80%] mx-auto my-6">
                    <div className="mx-auto w-full h-[90px] bg-black flex items-center justify-center rounded">
                        <p className="text-white font-medium">Ad Space</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Advertisement4;
