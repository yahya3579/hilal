import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../Loader/loader";
import CommonCard4Urdu from "../../shared/urdu/CommonCard4Urdu";
import CommonCard5Urdu from "../../shared/urdu/CommonCard5Urdu";
import CommonCard6Urdu from "../../shared/urdu/CommonCard6Urdu";


const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}/`);
    return res.data.data;
};

const TrendingHilalSectionKidsUrdu = () => {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ["articles", "national-international-news-urdu-kids"],
        queryFn: () => fetchArticlesByCategory("national-international-news-urdu-kids"),
    });

    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching articles</p>;

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
                        {articles.slice(0, 1).map((article) => (
                            <CommonCard4Urdu key={article.id} article={article} />
                        ))}

                        {/* Smaller Articles */}
                        <div className="grid grid-cols-2 gap-x-8">
                            {articles.slice(1, 5).map((article) => (
                                <CommonCard5Urdu key={article.id} article={article} />
                            ))}
                        </div>
                    </div>

                    {/* Grid of smaller articles */}
                    <div className="flex flex-col gap-6">
                        {articles.slice(5, 6).map((article) => (
                            <CommonCard4Urdu key={article.id} article={article} />
                        ))}

                        <div className="grid grid-cols-1 gap-4">
                            {articles.slice(6, 11).map((article) => (
                                <CommonCard6Urdu key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingHilalSectionKidsUrdu;
