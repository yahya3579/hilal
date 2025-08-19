import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";
import CommonCard4Urdu from "../shared/urdu/CommonCard4Urdu";
import CommonCard5Urdu from "../shared/urdu/CommonCard5Urdu";
import CommonCard6Urdu from "../shared/urdu/CommonCard6Urdu";

const fetchAllArticles = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-articles/`);
    return res.data.data;
};

const TrendingHilalSectionUrdu = () => {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ["articles", "all"],
        queryFn: fetchAllArticles,
    });

    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching articles</p>;

    // Shuffle articles randomly
    const shuffledArticles = [...articles].sort(() => Math.random() - 0.5);

    return (
        <div className="bg-white py-2 px-4 font-poppins">
            {/* Trending Publications Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="py-2">
                    <h2 className="heading-text-primary" dir='rtl'>قومی و بین الاقوامی</h2>
                </div>

                <div className="py-4 grid lg:grid-cols-2 gap-x-6">
                    <div className="flex flex-col gap-6 mb-6">
                        {/* Large Featured Article */}
                        {shuffledArticles.slice(0, 1).map((article) => (
                            <CommonCard4Urdu key={article.id} article={article} />
                        ))}

                        {/* Smaller Articles */}
                        <div className="grid grid-cols-2 gap-x-8">
                            {shuffledArticles.slice(1, 5).map((article) => (
                                <CommonCard5Urdu key={article.id} article={article} />
                            ))}
                        </div>
                    </div>

                    {/* Grid of smaller articles */}
                    <div className="flex flex-col gap-6">
                        {shuffledArticles.slice(5, 6).map((article) => (
                            <CommonCard4Urdu key={article.id} article={article} />
                        ))}

                        <div className="grid grid-cols-1 gap-4">
                            {shuffledArticles.slice(6, 11).map((article) => (
                                <CommonCard6Urdu key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingHilalSectionUrdu;
