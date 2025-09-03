import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";
import CommonCard4English from "../shared/english/CommonCard4English";
import CommonCard5English from "../shared/english/CommonCard5English";
import CommonCard6English from "../shared/english/CommonCard6English";

const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}/`);
    return res.data.data;
};
const TrendingHilalSection = () => {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ["articles", "national-international-news"],
        queryFn: () => fetchArticlesByCategory("national-international-news"),
    });

    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching articles</p>;


    return (
        <div className="bg-white py-2 px-4 font-poppins">
            {/* Trending Publications Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="py-2">
                    <h2 className="heading-text-primary">National & International News</h2>
                </div>

                <div className="py-4 grid lg:grid-cols-2 gap-x-6">
                    {/* LEFT COLUMN - Articles 1-3 */}
                    <div className="flex flex-col gap-6 mb-6">
                        {/* Article 1 - Large Featured Article */}
                        {articles.slice(0, 1).map((article) => (
                            <CommonCard4English key={article.id} article={article} />
                        ))}

                        {/* Articles 2-3 - Smaller Articles */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                            {articles.slice(1, 3).map((article) => (
                                <CommonCard5English key={article.id} article={article} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Articles 4-7 */}
                    <div className="flex flex-col gap-6">
                        {/* Article 4 - Featured Article for Right Side */}
                        {articles.slice(3, 4).map((article) => (
                            <CommonCard4English key={article.id} article={article} />
                        ))}

                        {/* Articles 5-7 - List Articles on Right Side */}
                        <div className="grid grid-cols-1 gap-4">
                            {articles.slice(4, 7).map((article) => (
                                <CommonCard6English key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional articles below if there are more than 7 */}
                {articles.length > 7 && (
                    <div className="py-4 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.slice(7).map((article) => (
                                <CommonCard6English key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrendingHilalSection;
