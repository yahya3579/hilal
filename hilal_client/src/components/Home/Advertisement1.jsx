import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBillboardByLocation = async (location) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/billboard/location/${location}/`);
    return res.data.data;
};

const Advertisement1 = () => {
    const { data: billboard, isLoading, error } = useQuery({
        queryKey: ['billboard', 'location-2'],
        queryFn: () => fetchBillboardByLocation(2),
    });

    if (isLoading) return <p>Loading advertisement...</p>;
    if (error) return <p>Error fetching advertisement</p>;

    return (
        <div className="relative mb-12 px-2">
            <img
                src={billboard?.image || "https://via.placeholder.com/300x250?text=No+Advertisement"}
                alt={billboard?.title || "Advertisement"}
                className="w-[300px] h-[250px] object-fill"
            />
        </div>
    );
};

export default Advertisement1;