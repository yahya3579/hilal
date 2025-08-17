import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../Loader/loader";

const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}/`);
    return res.data.data;
};

const TrendingHilalHerSection = () => {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ["articles", "trending1-her"],
        queryFn: () => fetchArticlesByCategory("trending1-her"),
    });

    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching articles</p>;


    return (
        <div className="bg-white py-2 px-4 font-poppins">
            {/* Trending Publications Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="py-2">
                    <h2 className="heading-text-primary">TRENDING - HILAL HER</h2>
                </div>

                <div className="py-4 grid lg:grid-cols-2 gap-x-6">
                    <div className="flex flex-col gap-6 mb-6">
                        {/* Large Featured Article */}
                        {articles.slice(0, 1).map((article) => (
                            <div key={article.id} className="relative h-[250px] overflow-hidden">
                                <Link to={`/article/${article.id}`}>
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                </Link>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-2 left-4 right-4 text-white">
                                    <p className="text-xs mb-2">{article.writer}</p>
                                    <h3 className="text-sm font-bold leading-tight mb-2">{article.title}</h3>
                                    <Link
                                        to={`/article/${article.id}`}
                                        className="text-xs text-red-600 font-bold hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* Smaller Articles */}
                        <div className="grid grid-cols-2 gap-x-8">
                            {articles.slice(1, 5).map((article) => (
                                <div key={article.id} className="bg-white overflow-hidden">
                                    <Link to={`/article/${article.id}`}>
                                        <img
                                            src={article.cover_image}
                                            alt={article.title}
                                            loading="lazy"
                                            className="h-[120px] object-cover "
                                        />
                                    </Link>
                                    <div className="py-3">
                                        <p className="text-xs text-gray-400 mb-1">{article.writer}</p>
                                        <h4 className="text-xs font-semibold line-clamp-2 text-black leading-[1.8]">
                                            {article.title}
                                        </h4>
                                        <Link
                                            to={`/article/${article.id}`}
                                            className="text-xs text-red-600 font-bold hover:underline"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Grid of smaller articles */}
                    <div className="flex flex-col gap-6">
                        {articles.slice(5, 6).map((article) => (
                            <div key={article.id} className="relative h-[250px] overflow-hidden">
                                <Link to={`/article/${article.id}`}>
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                </Link>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-2 left-4 right-4 text-white">
                                    <p className="text-xs mb-2">{article.writer}</p>
                                    <h3 className="text-sm font-bold leading-tight mb-2">{article.title}</h3>
                                    <Link
                                        to={`/article/${article.id}`}
                                        className="text-xs text-red-600 font-bold hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <div className="grid grid-cols-1 gap-4">
                            {articles.slice(6, 11).map((article) => (
                                <Link to={`/article/${article.id}`} key={article.id} className="bg-white flex gap-x-3 overflow-hidden">
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        loading="lazy"
                                        className="min-w-[150px] h-[60px] object-cover"
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">{article.writer}</p>
                                        <h4 className="text-xs font-semibold line-clamp-2 text-black leading-[1.8]">
                                            {article.title}
                                        </h4>
                                    </div>
                                </Link>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingHilalHerSection;
