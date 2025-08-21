import React from 'react';
import advertisementImage from '../../assets/advertisment2.png';
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

const Advertisement2 = () => {
    const { data: billboard, isLoading, error } = useQuery({
        queryKey: ['billboard', 'location-3'],
        queryFn: () => fetchBillboardByLocation(3),
        retry: false, // Don't retry on failures
        refetchOnWindowFocus: false, // Don't refetch when window gains focus
    });

    return (
        <div className="border-t-[3px] mx-4 border-red-600 mt-10">
            <div className="">
                <h3 className="heading-text-primary">ADVERTISEMENT</h3>
            </div>
            <div className="relative mt-6">
                {billboard && billboard.image ? (
                    <img
                        src={billboard.image}
                        alt={billboard.title || "Advertisement"}
                        className="w-[300px] h-[250px] object-fill"
                    />
                ) : (
                    <div className="w-[300px] h-[250px] bg-black flex items-center justify-center rounded">
                        <p className="text-white font-medium">Ad Space</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Advertisement2;