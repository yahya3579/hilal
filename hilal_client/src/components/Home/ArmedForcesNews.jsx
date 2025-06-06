export default function ArmedForcesNews() {
    const publications = [
        {
            id: 1,
            img: "https://quwa.org/wp-content/uploads/2024/06/Pakistan-Day-Parade.jpg",
            alt: "Pakistan Flag",
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLbIv5mGpP5NrFbIPD0P-pK2YR8oAh1QAZQ&s",
            alt: "Pakistan Army Logo",
        },
        {
            id: 3,
            img: "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2019/09/28/1774146-1751985535.jpeg?itok=gNtZFxiy",
            alt: "Pakistan Air Force Logo",
        },
        {
            id: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudTYm5knUm7g-p0Bt92OPJ0XCJ8nHK-beCA&s",
            alt: "Pakistan Navy Logo",
        },
    ];

    const news = [
        {
            id: 1,
            title: "Pakistan Army conducts large-scale military exercises to boost readiness",
            author: "ISPR",
            date: "3 Jun 2025",
            img: "https://img.dunyanews.tv/news/2022/January/01-05-22/news_big_images/635676_99319353.jpg",
        },
        {
            id: 2,
            title: "Pakistan Air Force showcases new fighter jets at Islamabad Airshow",
            author: "Defense News",
            date: "29 May 2025",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAuboBDi0kpG_qBivV8gCgSuQJLYJuWnshA&s",
        },
        {
            id: 3,
            title: "Pakistan Navy completes joint exercises with allied forces in Arabian Sea",
            author: "Navy Times",
            date: "15 May 2025",
            img: "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2019/09/28/1774146-1751985535.jpeg?itok=gNtZFxiy",
        },
        {
            id: 4,
            title: "Pakistan’s defense budget increased to modernize armed forces capabilities",
            author: "The News International",
            date: "1 Jun 2025",
            img: "https://quwa.org/wp-content/uploads/2024/06/Pakistan-Day-Parade.jpg",
        },
        {
            id: 5,
            title: "ISPR releases footage of counterterrorism operations in North Waziristan",
            author: "ISPR",
            date: "28 May 2025",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLbIv5mGpP5NrFbIPD0P-pK2YR8oAh1QAZQ&s",
        },
        {
            id: 6,
            title: "Pakistan honors armed forces personnel on Defence Day celebrations",
            author: "Pak Army News",
            date: "6 Sep 2024",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudTYm5knUm7g-p0Bt92OPJ0XCJ8nHK-beCA&s",
        },
    ];

    return (
        <div className="pl-3">
            {/* Publications Showcase */}
            <div className="mb-2">
                <div className="flex gap-2 flex-wrap">
                    {publications.map(({ id, img, alt }) => (
                        <div
                            key={id}
                            className="bg-white shadow-sm overflow-hidden rounded w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.5rem)]"
                        >
                            <img
                                src={img}
                                alt={alt}
                                loading="lazy"
                                className="w-full h-[105px] object-cover bg-white p-2"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Armed Forces News Section */}
            <header className="bg-white">
                <div className="max-w-7xl mx-auto px-2">
                    <h1 className="text-2xl font-medium py-1 pb-2 text-[#F65050] oswald">Armed Forces News</h1>
                    <div
                        className="h-[1px] w-[93%]"
                        style={{
                            backgroundSize: "100% 100%",
                            backgroundImage: "linear-gradient(to right, #dc2626 20%, black 20%)",
                        }}
                    ></div>
                </div>
            </header>

            {/* News List */}
            <div className="space-y-4 pt-2">
                {news.map(({ id, title, author, date, img }) => (
                    <article
                        key={id}
                        className="bg-white rounded-lg p-1 border border-gray-100 transition-shadow shadow-[0px_4px_4px_0px_#00000040] flex flex-col sm:flex-row gap-4"
                    >
                        <img
                            src={img}
                            alt="News thumbnail"
                            loading="lazy"
                            className="w-full sm:w-[93px] h-[73px] object-cover flex-shrink-0 rounded"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-sm text-[#2D2D2D] text-[10px] font-normal mb-2">
                                <span>{author}</span>
                                <span className="mx-1">-</span>
                                <span className="text-gray-500">{date}</span>
                            </div>
                            <h3 className="text-[15px] font-normal oswald text-[#393939] leading-tight hover:text-blue-600 cursor-pointer">
                                {title}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
