import React from 'react';
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
    });

    if (isLoading) return <p>Loading advertisement...</p>;
    if (error) return <p>Error fetching advertisement</p>;

    return (
        <div className="w-[80%] mx-auto my-6">
            <img
                src={billboard?.image || "https://via.placeholder.com/728x90?text=No+Advertisement"}
                alt={billboard?.title || "Advertisement"}
                className="mx-auto w-full h-[90px] object-fill"
            />
        </div>
    );
};

export default Advertisement4;
