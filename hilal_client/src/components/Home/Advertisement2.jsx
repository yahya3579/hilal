import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBillboardByLocation = async (location) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/billboard/location/${location}/`);
    return res.data.data;
};

const Advertisement2 = () => {
    const { data: billboard, isLoading, error } = useQuery({
        queryKey: ['billboard', 'location-3'],
        queryFn: () => fetchBillboardByLocation(3),
    });

    if (isLoading) return <p>Loading advertisement...</p>;
    if (error) return <p>Error fetching advertisement</p>;

    return (
        <div className="border-t-[3px] border-red-600 mt-10">
            <div className="">
                <h3 className="heading-text-primary">ADVERTISEMENT</h3>
            </div>
            <div className="relative mt-6">
                <img
                    src={billboard?.image || "https://via.placeholder.com/300x250?text=No+Advertisement"}
                    alt={billboard?.title || "Advertisement"}
                    className="w-[300px] h-[250px] object-fill"
                />
            </div>
        </div>
    );
};

export default Advertisement2;