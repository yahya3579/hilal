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

const Advertisement1 = () => {
    const { data: billboard, isLoading, error } = useQuery({
        queryKey: ['billboard', 'location-2'],
        queryFn: () => fetchBillboardByLocation(2),
        retry: false, // Don't retry on failures
        refetchOnWindowFocus: false, // Don't refetch when window gains focus
    });

    return (
        <div className="relative mb-12 px-2">
            {billboard && billboard.image ? (
                <img
                    src={billboard.image}
                    alt={billboard.title || "Advertisement"}
                    className="w-[300px] h-[250px] object-fill"
                />
            ) : (
                <div className="relative mb-12 px-2">
                    <img
                        src={advertisementImage}
                        alt="Home interior advertisement"
                        className="w-[300px] h-[250px] object-cover"
                    />

                </div>
            )}
        </div>
    );
};

export default Advertisement1;