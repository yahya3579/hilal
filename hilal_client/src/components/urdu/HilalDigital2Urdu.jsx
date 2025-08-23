const HilalDigital2Urdu = () => {
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
        <div className="bg-white font-poppins px-4 py-2 font-poppins ">
            {/* In Focus Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="py-2 mb-2">
                    <h2 className="heading-text-primary" dir='rtl'>ہلال ڈیجیٹل</h2>
                </div>



                {/* Main Content */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 max-lg:gap-y-3 lg:gap-x-8" dir='ltr'>


                    {/* Sidebar */}
                    <div className="space-y-4">
                        {newsItems.map((item, index) => (
                            <div key={index} className="bg-white">
                                <div className="flex gap-3" dir='rtl'>
                                    <div className="w-20 h-16 bg-gray-200  flex-shrink-0 overflow-hidden">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                                            alt="News thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span>{item.views}</span>
                                            <span>{item.time}</span>
                                        </div>
                                        <h3 className="text-xs font-semibold line-clamp-2 text-black leading-[1.8] ">
                                            {/* {item.title} */}
                                            ہم نے پاکستان کی معیشت کو کاروباری صلاحیت اور تخلیقی سوچ کے ذریعے مضبوط کیا ہے
                                        </h3>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Main Video Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white overflow-hidden">
                            <div className="aspect-video h-[350px] bg-gray-900 relative">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/vpl1FyToXck"
                                    title="Gwadar's First Flight: A Gateway to Balochistan's Prosperity Through..."
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default HilalDigital2Urdu;
