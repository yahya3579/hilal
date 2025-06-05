import React from 'react';
import { Clock, User } from "lucide-react";

const newsItems = [
    {
        title: "South Africa hammer injury-hit Sri Lanka Player",
        author: "Craig Barber",
        date: "27 Dec 2019",
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Satellite lead New Zealand leave Pakistan on the ropes",
        author: "Craig Barber",
        date: "27 Dec 2019",
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "The only thing that overcomes hard luck is hard work",
        author: "Craig Barber",
        date: "27 Dec 2019",
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Success is not a good teacher failure makes you humble",
        author: "Craig Barber",
        date: "27 Dec 2019",
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Rahane-led India levy ghosts of Adelaide at Melbourne",
        author: "Craig Barber",
        date: "27 Dec 2019",
        img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D"
    },
];

const NewsItem = ({ title, author, date, img }) => (
    <div className="bg-white rounded-lg shadow-sm px-4 flex gap-4">
        <img
            src={img}
            alt="News thumbnail"
            className="w-20 h-20 object-cover rounded flex-shrink-0"
        />
        <div className="flex-1">
            <div className="flex items-center text-xs text-gray-500 mb-1">
                <span className="text-red-600 font-medium mr-2">{author}</span>
                <span>{date}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{title}</h3>
        </div>
    </div>
);

const TrendingHilalPublications = () => {
    return (
        <>
            <header className="bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-2xl font-medium py-1 pb-4 text-[#F65050]">Trending Hilal Publications</h1>
                    <div
                        className="h-[1px] w-[93%]"
                        style={{
                            backgroundSize: '100% 100%',
                            backgroundImage: 'linear-gradient(to right, #dc2626 20%, black 20%)',
                        }}
                    ></div>
                </div>
            </header>

            <div className="flex gap-8 pt-6 px-4">
                {/* Left Column */}
                <div className=" lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-[420px]">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D"
                                alt="Cricket Match"
                                className="w-full h-[264px] object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">Cricket</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-[#2D2D2D] text-[12px] font-normal mb-2">
                                <span className="">Craig Barber </span>
                                <span className='mx-1'>-</span>
                                <span className='text-gray-500'>27 Dec 2019</span>
                            </div>
                            <h2 className="text-[18px] font-medium text-[#393939] mb-3">
                                Solskjaer dismisses Klopp comments on Man Utd penalty record
                            </h2>
                            <p className="text-[#39393999] font-[250px] text-[14px] leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
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
