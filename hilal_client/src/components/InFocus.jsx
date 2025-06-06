// Reusable Main Article Card
const ArticleCard = ({ image, category, author, date, title, description }) => (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative">
            <img src={image} alt={title} className="w-full h-[264px] object-cover" />
            {category && (
                <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 text-sm rounded">{category}</span>
                </div>
            )}
        </div>
        <div className="py-6 px-0">
            <div className="flex items-center text-sm text-[#2D2D2D] text-[12px] font-normal mb-2">
                <span>{author || "Unknown Author"}</span>
                <span className="mx-1">-</span>
                <span className="text-gray-500">{date || "Unknown Date"}</span>
            </div>
            <h3 className="text-[24px] font-medium text-[#393939] oswald mb-3 leading-tight">{title}</h3>
            <p className="text-[#39393999] text-[14px] font-[250px] leading-relaxed">{description}</p>
        </div>
    </article>
);

// Reusable Small Article Card
const SmallArticleCard = ({ image, author, date, title }) => (
    <article className="bg-white shadow-sm overflow-hidden">
        <div className="flex gap-4">
            <img src={image} alt={title} className="w-24 h-20 object-cover flex-shrink-0" />
            <div className="flex-1">
                <div className="flex items-center text-sm text-[#2D2D2D] text-[10px] font-normal mb-2">
                    <span>{author || "Unknown Author"}</span>
                    <span className="mx-1">-</span>
                    <span className="text-gray-500">{date || "Unknown Date"}</span>
                </div>
                <h4 className="text-[24px] font-normal text-[#393939] oswald leading-tight">{title}</h4>
            </div>
        </div>
    </article>
);

// Main Component
export default function InFocusSection() {
    const commonImage =
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?fm=jpg&q=60&w=3000";

    // Pakistan related articles
    const mainArticles = [
        {
            title: "Pakistan Launches Nationwide Vaccination Drive to Combat Polio",
            description:
                "The government of Pakistan has intensified its polio vaccination campaign, aiming to eradicate the disease by 2025 with the support of local communities and international partners.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhzA21RY_vqrdfYJVbyttalAQn0RwVHWUaw&s",
            category: "Health",
            author: "Ayesha Khan",
            date: "10 May 2024",
        },
        {
            title: "Economic Growth in Pakistan Hits 4.5% Amid Global Challenges",
            description:
                "Pakistan’s economy shows resilience with a 4.5% growth rate this quarter, driven by exports and the agricultural sector, despite global economic pressures.",
            image: "https://profit.pakistantoday.com.pk/wp-content/uploads/2024/10/economic-growth-696x522.webp",
            category: "Economy",
            author: "Zain Malik",
            date: "28 April 2024",
        },
    ];

    const smallArticles = [
        {
            title: "Exploring the Cultural Heritage of Lahore’s Old City",
            image: "https://www.pakistantours.pk/wp-content/uploads/2022/10/Lahore-City-Tours.jpg",
            author: "Fatima Ali",
            date: "15 March 2024",
        },
        {
            title: "Tips for Sustainable Tourism in Northern Pakistan",
            image: "https://irverde.com.pk/wp-content/uploads/2023/10/lbxxiojcbe5gee9edkce.webp",
            author: "Hassan Raza",
            date: "22 February 2024",
        },
    ];

    return (
        <>
            <header className=" ">
                <div className="max-w-7xl mx-auto p-4">
                    <h1 className="text-2xl font-medium py-1 oswald pb-4 text-[#F65050]">In Focus</h1>
                    <div
                        className="h-[1px] w-[93%]"
                        style={{
                            backgroundSize: "100% 100%",
                            backgroundImage: "linear-gradient(to right, #dc2626 20%, black 20%)",
                        }}
                    />
                </div>
            </header>

            <div className="max-w-7xl  mx-auto px-4 py-2 mb-3  pb-8">
                {/* Main Articles */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-3">
                    {mainArticles.map(({ title, description, image, category, author, date }, idx) => (
                        <ArticleCard
                            key={idx}
                            title={title}
                            description={description}
                            image={image}
                            category={category}
                            author={author}
                            date={date}
                        />
                    ))}
                </div>

                {/* Smaller Articles */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {smallArticles.map(({ title, image, author, date }, idx) => (
                        <SmallArticleCard
                            key={idx}
                            title={title}
                            image={image}
                            author={author}
                            date={date}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
