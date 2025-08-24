import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HilalKidsUrdu from "../../assets/hilalKidsUrdu.jpg"
import HilalUrdu from "../../assets/hilalUrdu.jpg"
import HilalHer from "../../assets/hilalHer.jpg"
import HilalKidsEnglish from "../../assets/hilalKidsEnglish.jpg"
import Loader from '../Loader/loader';
import CommonCard8Urdu from '../shared/urdu/CommonCard8Urdu';

const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}/`);
    return res.data.data;
};

const fetchBillboardByLocation = async (location) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/billboard/location/${location}/`);
    console.log("Billboard data:", res.data.data);
    return res.data.data;
};

const ArmedForcesNewsUrdu = () => {
    const { data: articles, isLoading: articlesLoading, error: articlesError } = useQuery({
        queryKey: ['articles', 'armed-forces-news-urdu'],
        queryFn: () => fetchArticlesByCategory('armed-forces-news-urdu'),
    });

    const { data: billboard, isLoading: billboardLoading, error: billboardError } = useQuery({
        queryKey: ['billboard', 'location-6'],
        queryFn: () => fetchBillboardByLocation(1),
        onError: () => { }, // Handle errors silently
    });

    if (articlesLoading) return <Loader />;
    if (articlesError) return <p>Error fetching articles</p>;

    return (
        <>
            <div className='px-4 pb-3'>
                <div className="flex max-md:flex-wrap gap-2 py-3 justify-center">

                    <Link to={`/hilal-kids`} className="relative group">
                        <img
                            src={HilalKidsEnglish}
                            alt={`hilal kids english`}
                            className="w-20 h-28 object-cover flex-shrink-0 transition-opacity duration-300 group-hover:opacity-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded">
                            <span className="text-white  text-xs urdu-text font-bold text-center px-1">ہلال کڈز انگلش</span>
                        </div>
                    </Link>
                    <Link to={`/hilal-her`} className="relative group">
                        <img
                            src={HilalHer}
                            alt={`hilal her`}
                            className="w-20 h-28 object-cover flex-shrink-0 transition-opacity duration-300 group-hover:opacity-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded">
                            <span className="text-white text-xs urdu-text font-bold text-center px-1">ہلال ہر</span>
                        </div>
                    </Link>
                    <Link to={`/hilal-urdu-kids/`} className="relative group">
                        <img
                            src={HilalKidsUrdu}
                            alt={`hilal kids urdu`}
                            className="w-20 h-28 object-cover flex-shrink-0 transition-opacity duration-300 group-hover:opacity-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded">
                            <span className="text-white text-xs urdu-text font-bold text-center px-1">ہلال کڈز اردو</span>
                        </div>
                    </Link>
                    <Link to={`/hilal-urdu/`} className="relative group">
                        <img
                            src={HilalUrdu}
                            alt={`hilal urdu`}
                            className="w-20 h-28 object-cover flex-shrink-0 transition-opacity duration-300 group-hover:opacity-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded">
                            <span className="text-white text-xs urdu-text font-bold text-center px-1">ہلال اردو</span>
                        </div>
                    </Link>

                </div>

                <div className="border-gray-200 relative py-6 outline-none">
                    {/* Header */}
                    <div className="text-center py-1 mb-2 outline-none">
                        <span className="bg-red-600  font-urdu-nastaliq-sm1 text-white px-13 py-1 font-bold text-sm outline-none">
                            مسلح افواج کی خبریں
                        </span>
                    </div>

                    <div className="pb-2 mt-5 outline-none">
                        {/* News Items */}
                        <div className="space-y-5 outline-none">
                            {articles.map((article) => (
                                <CommonCard8Urdu key={article.id} article={article} />
                            ))}
                        </div>

                        {/* Advertisement Banner */}
                        <div className="mt-6 relative outline-none">
                            {billboard && billboard.image ? (
                                <img
                                    src={billboard.image}
                                    alt={billboard.title || "Advertisement"}
                                    className="w-full h-[100px] object-fill rounded outline-none"
                                />
                            ) : (
                                <div className="w-full h-[100px] bg-black flex items-center justify-center rounded outline-none">
                                    <p className="text-white font-medium">Ad Space</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArmedForcesNewsUrdu;
