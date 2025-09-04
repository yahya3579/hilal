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
    // Fetch articles from three different categories
    const { data: inFocusArticles, isLoading: inFocusLoading, error: inFocusError } = useQuery({
        queryKey: ["articles", "in-focus-urdu-kids"],
        queryFn: () => fetchArticlesByCategory("in-focus-urdu-kids"),
    });

    const { data: nationalNewsArticles, isLoading: nationalNewsLoading, error: nationalNewsError } = useQuery({
        queryKey: ["articles", "national-international-news-urdu-kids"],
        queryFn: () => fetchArticlesByCategory("national-international-news-urdu-kids"),
    });

    const { data: trendingUrduArticles, isLoading: trendingLoading, error: trendingError } = useQuery({
        queryKey: ["articles", "trending-urdu-kids"],
        queryFn: () => fetchArticlesByCategory("trending-urdu-kids"),
    });

    // Check if any of the queries are still loading
    if (inFocusLoading || nationalNewsLoading || trendingLoading) return <Loader />;

    // Check if any of the queries have errors
    if (inFocusError || nationalNewsError || trendingError) return <p>Error fetching articles</p>;

    // Shuffle articles from each category randomly
    const shuffledInFocus = [...(inFocusArticles || [])].sort(() => Math.random() - 0.5);
    const shuffledNationalNews = [...(nationalNewsArticles || [])].sort(() => Math.random() - 0.5);
    const shuffledTrending = [...(trendingUrduArticles || [])].sort(() => Math.random() - 0.5);

    return (
        <div className="py-2 px-4 font-poppins">
            {/* Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="bg-white py-2 mb-2">
                    <h2 className="heading-text-primary font-urdu-nastaliq-sm1" dir='rtl'> ہلال اردو</h2>
                </div>

                {/* Three Column Layout */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {/* Left Column - Misc Articles (Armed Forces) */}
                    <div className="flex flex-col gap-4">
                        {/* <div className="bg-blue-100 p-2 rounded">
                            <h3 className="text-blue-600 font-bold text-sm mb-2" dir="rtl">متفرقات</h3>
                        </div> */}
                        {shuffledNationalNews.length > 0 ? (
                            shuffledNationalNews.map((article) => (
                                <CommonCard1Urdu key={article.id} article={article} />
                            ))
                        ) : (
                            <div className="p-4 text-center text-gray-500 text-sm" dir="rtl">
                                کوئی متفرقات مضامین دستیاب نہیں ہیں
                            </div>
                        )}
                    </div>

                    {/* Middle Column - Trending Articles */}
                    <div className="flex flex-col gap-4">
                        {/* <div className="bg-red-100 p-2 rounded">
                            <h3 className="text-red-600 font-bold text-sm mb-2" dir="rtl">ٹرینڈنگ</h3>
                        </div> */}
                        {shuffledTrending.map((article) => (
                            <CommonCard1Urdu key={article.id} article={article} />
                        ))}
                    </div>

                    {/* Right Column - In-Focus Articles */}
                    <div className="flex flex-col gap-4">
                        {/* <div className="bg-green-100 p-2 rounded">
                            <h3 className="text-green-600 font-bold text-sm mb-2" dir="rtl">مرکزی موضوع</h3>
                        </div> */}
                        {shuffledInFocus.map((article) => (
                            <CommonCard1Urdu key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingHilalPublicationsKidsUrdu;