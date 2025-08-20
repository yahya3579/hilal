import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

import Loader from "../../Loader/loader";
import CommonCard1Urdu from "../../shared/urdu/CommonCard1Urdu";

const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}/`);
    return res.data.data;
};

const TrendingHilalPublicationsKidsUrdu = () => {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ["articles", "trending-urdu-kids"],
        queryFn: () => fetchArticlesByCategory("trending-urdu-kids"),
    });


    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching articles</p>;

    // Shuffle articles randomly


    return (
        <div className="py-2 px-4 font-poppins">
            {/* Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="bg-white py-2 mb-2">
                    <h2 className="heading-text-primary" dir='rtl'> ہلال اردو</h2>
                </div>

                {/* Images Grid */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {articles.slice(0, 6).map((article) => (
                        <CommonCard1Urdu key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingHilalPublicationsKidsUrdu;