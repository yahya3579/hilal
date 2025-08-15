import React from 'react';
import advertisementImage from '../../assets/advertisment4.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBillboardByLocation = async (location) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/billboard/location/${location}/`);
    return res.data.data;
};

const Advertisement4 = () => {
    const { data: billboard, isLoading, error } = useQuery({
        queryKey: ['billboard', 'location-4'],
        queryFn: () => fetchBillboardByLocation(4),
        onError: () => { }, // Handle errors silently
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
                    <img
                        src={advertisementImage}
                        alt="Default Advertisement"
                        className="mx-auto w-full h-[90px] object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default Advertisement4;
