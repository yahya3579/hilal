import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";

const fetchAllArticles = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-articles/`);
    return res.data.data;
};

const TrendingHilalPublicationsUrdu = () => {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ["articles", "all"],
        queryFn: fetchAllArticles,
    });


    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching articles</p>;

    // Shuffle articles randomly
    const shuffledArticles = [...articles].sort(() => Math.random() - 0.5);

    return (
        <div className="py-2 px-4 font-poppins">
            {/* Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="bg-white py-2 mb-2">
                    <h2 className="heading-text-primary"> ہلال اردو</h2>
                </div>

                {/* Images Grid */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {shuffledArticles.slice(0, 6).map((article) => (
                        <div key={article.id} className="bg-white overflow-hidden transition-shadow cursor-pointer">
                            {/* Image Section */}
                            <Link to={`/article/${article.id}`}>
                                <div
                                    className={`h-40 relative overflow-hidden`}
                                    style={{
                                        backgroundImage: `url(${article.cover_image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    {/* Category Badge */}
                                    <Link to={`/category/${article.category}`} className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                                        {article.category}
                                    </Link>
                                </div>
                            </Link>
                            {/* Content Section */}
                            <div className="p-4">
                                {/* Author and Date */}
                                <div className="text-xs text-gray-400 mb-1">
                                    <span className="font-medium mr-2">{article.writer}</span>
                                    <span>{new Date(article.publish_date).toLocaleDateString("en-GB")}</span>
                                </div>
                                {/* Title */}
                                <Link to={`/article/${article.id}`}>
                                    <h3 className="text-xs font-semibold line-clamp-4 text-black leading-[1.8]">
                                        {/* {article.title} */}
                                        تاریخ کا سب سے سیاہ ہتھیار: جنگ میں بھوک اور قحط کو ہتھیار کے طور پر استعمال کرنا، رومی محاصروں سے لے کر جدید تنازعات تک…
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingHilalPublicationsUrdu;