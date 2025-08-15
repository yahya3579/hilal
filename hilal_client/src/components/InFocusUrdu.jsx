import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader/loader";

const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}/`);
    return res.data.data;
};

const InFocusSectionUrdu = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["articles", "in-focus"],
        queryFn: () => fetchArticlesByCategory("in-focus"),
    });

    if (isLoading) return <Loader />;
    if (error) return <p className="p-4 text-red-500">Error fetching articles</p>;

    return (
        <div className="bg-white font-poppins px-4 py-2">
            {/* In Focus Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="py-2">
                    <h2 className="heading-text-primary">مرکزی موضوع</h2>
                </div>

                <div className="py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Large Featured Article */}
                        {data.length > 0 && (
                            <Link to={`/article/${data[0].id}`}>
                                <div className="bg-white overflow-hidden">
                                    <img
                                        src={data[0].cover_image}
                                        alt={data[0].title}
                                        className="w-full h-[300px] object-cover"
                                    />
                                    <div className="py-4">
                                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                            <span className="line-clamp-1 max-w-[70%]">{data[0].writer}</span>
                                            <span>{new Date(data[0].publish_date).toLocaleDateString("en-GB")}</span>
                                        </div>
                                        {/* <h3 className="text-[20px] font-bold line-clamp-1 text-gray-500 mb-2">{data[0].title}</h3> */}
                                        <h3 className="text-[20px] font-bold line-clamp-1 text-gray-500 mb-2">علمی معیشت کی طویل راہ</h3>
                                        <p className="text-xs text-black leading-relaxed font-bold line-clamp-5 mb-2">
                                            {/* {data[0].description} */}
                                            چاہے اچھا ہو یا برا، مصنوعی ذہانت (AI) دنیا کو تیز رفتاری سے بدل رہی ہے۔ زبردست تبدیلیاں ہر شعبے میں محسوس کی جا رہی ہیں — خدمات اور مینوفیکچرنگ سے لے کر تجارت اور کاروبار تک۔ ترقی یافتہ دنیا نئے، متحرک مواقع پیدا کر رہی ہے، لیکن اس کے بدلے میں پرانے اور قائم نظام متاثر ہو رہے ہیں۔ انتخاب بالکل واضح ہے: یا تو مختصر مدت میں تبدیلی اور موافقت اختیار کریں یا پیچھے رہ جائیں اور ہار جائیں۔
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Smaller Articles */}
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                            {data.slice(1, 5).map((article) => (
                                <div key={article.id} className="overflow-hidden">
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        loading="lazy"
                                        className="h-[120px] object-cover w-full"
                                    />
                                    <div className="py-2">
                                        <p className="text-xs line-clamp-1 text-gray-400 mb-1">{article.writer}</p>
                                        <h4 className="text-xs  font-semibold line-clamp-2 text-black leading-[1.8]">
                                            {/* {article.title} */}
                                            یومِ پاکستان 2025: نوجوانوں میں ایثار کا جذبہ عملی مثال کے ذریعے بیدار کرنا۔
                                        </h4>
                                        <Link to={`/article/${article.id}`} className="text-xs text-red-600 font-bold hover:underline">
                                            {/* Read More */}
                                            مزید پڑھیں..
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InFocusSectionUrdu;
