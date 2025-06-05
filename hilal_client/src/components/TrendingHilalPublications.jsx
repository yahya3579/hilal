import React from 'react';
import { Clock, User } from "lucide-react";

const newsItems = [
    {
        title: "Pakistan cricket team gears up for ICC T20 World Cup 2025",
        author: "Ayesha Khan",
        date: "2 Jun 2025",
        img: "https://www.zapcricket.com/cdn/shop/articles/348074.3.webp?v=1715982579"
    },
    {
        title: "Pakistan Army successfully tests new drone technology",
        author: "Maj. Ali Raza",
        date: "30 May 2025",
        img: "https://quwa.org/wp-content/uploads/2023/01/13012023-FR-scaled.webp"
    },
    {
        title: "Women athletes shine at National Games in Islamabad",
        author: "Sara Malik",
        date: "28 May 2025",
        img: "https://www.brandsynario.com/wp-content/uploads/Naseem-Hameed.jpg"
    },
    {
        title: "Pakistan Navy expands maritime security operations in Arabian Sea",
        author: "Commodore Imran Shah",
        date: "25 May 2025",
        img: "https://i.brecorder.com/primary/2024/06/07150554a50445a.jpg"
    },
    {
        title: "Pakistani squash legend discusses upcoming international championships",
        author: "Zahid Hussain",
        date: "22 May 2025",
        img: "https://www.thenews.com.pk/assets/uploads/tns/2024-10-20/1241807_739471_tns-51_tns.jpg"
    },
];

const NewsItem = ({ title, author, date, img }) => (
    <div className="bg-white rounded-lg px-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow duration-300 cursor-pointer">
        <img
            src={img}
            alt="News thumbnail"
            className="w-full sm:w-[95px] h-[74px] object-cover rounded flex-shrink-0"
        />
        <div className="flex-1">
            <div className="flex items-center text-xs text-gray-500 mb-1">
                <span className="text-[#2D2D2D] font-normal text-[10px] mr-1">{author}</span>
                <span className="mx-1">-</span>
                <span className="text-gray-500 font-normal text-[10px]">{date}</span>
            </div>
            <h3 className="text-[15px] font-normal oswald text-[#393939] line-clamp-2">{title}</h3>
        </div>
    </div>
);

const TrendingHilalPublications = () => {
    return (
        <>
            <header className="bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-2xl font-medium py-1 pb-4 oswald text-[#F65050]">Trending Hilal Publications</h1>
                    <div
                        className="h-[1px] w-[93%]"
                        style={{
                            backgroundSize: '100% 100%',
                            backgroundImage: 'linear-gradient(to right, #dc2626 20%, black 20%)',
                        }}
                    ></div>
                </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-8 pt-6 px-4">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg overflow-hidden w-full lg:w-[420px]">
                        <div className="relative">
                            <img
                                src="https://www.pcb.com.pk/timthumb.php?src=images/news_images/featured_images/825c322cd10e.jpg&a=c&w=295&h=190"
                                alt="Pakistan Cricket Team"
                                className="w-full h-[264px] object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-green-700 text-white px-2 py-1 text-xs rounded">Sports</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-[#2D2D2D] text-[12px] font-normal mb-2">
                                <span className="">Ayesha Khan</span>
                                <span className='mx-1'>-</span>
                                <span className='text-gray-500'>2 Jun 2025</span>
                            </div>
                            <h2 className="text-[18px] oswald font-medium text-[#393939] mb-3">
                                Pakistan Cricket Board announces squad for ICC T20 World Cup
                            </h2>
                            <p className="text-[#39393999] font-[250px] text-[14px] leading-normal line-clamp-3">
                                The Pakistan Cricket Board has revealed the final squad to compete in the ICC T20 World Cup 2025,
                                highlighting a mix of young talent and experienced players ready to bring glory to the nation.
                                Preparations are underway with rigorous training camps scheduled across the country.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - News List */}
                <div className="space-y-4">
                    {newsItems.map((item, index) => (
                        <NewsItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TrendingHilalPublications;
