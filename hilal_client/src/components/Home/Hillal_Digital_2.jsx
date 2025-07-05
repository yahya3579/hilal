const HilalDigital2 = () => {
    const newsItems = [
        {
            title: "Eid For From Mama: A Tribute to Pakistan's Brave Ghazis",
            views: "1.4K views",
            time: "3 days ago"
        },
        {
            title: "Pakistan: China Brother/Road: KKH Workers Remembered in Solemn Ceremony",
            views: "2.1K views",
            time: "4 days ago"
        },
        {
            title: "Standing Guard for Pakistan: A Heartfelt New Year Message from Our Soldiers",
            views: "3.2K views",
            time: "1 month ago"
        },
        {
            title: "Northern Light Infantry's 2024 BMT Batch Passes Out in Grand Ceremony at Banij",
            views: "1.8K views",
            time: "1 month ago"
        }
    ];

    return (
        <div className="border-t-2 border-red-600 bg-gray-50">
            {/* Header */}

            <header className="text-[#DF1600]  px-4 py-2">
                <h2 className="font-[Poppins] font-medium text-[24px] leading-[100%] tracking-[-0.03em] uppercase">
                    HILAL DIGITAL
                </h2>
            </header>


            {/* Main Content */}
            <div className=" px-4 py-6 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Main Video Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="aspect-video h-[380px] bg-gray-900 relative">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Gwadar's First Flight: A Gateway to Balochistan's Prosperity Through..."
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4">
                        {newsItems.map((item, index) => (
                            <div key={index} className="bg-white  border-b border-gray-200 pb-3">
                                <div className="flex gap-3">
                                    <div className="w-20 h-16 bg-gray-200  flex-shrink-0 overflow-hidden">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                                            alt="News thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-gray-900 leading-tight mb-1">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span>{item.views}</span>
                                            <span>•</span>
                                            <span>{item.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HilalDigital2;
