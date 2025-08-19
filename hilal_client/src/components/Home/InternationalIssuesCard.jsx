import { Link } from "react-router-dom";

export default function InternationIssuesCard({ article, isUrdu }) {
    return (
        <div className="mx-auto px-2 md:px-4">
            <div className={`flex flex-col md:flex-row bg-white shadow-sm overflow-hidden ${isUrdu ? 'md:flex-row-reverse' : ''}`}>
                {/* Left side - Image with overlay text */}
                <div className="relative w-full md:w-[40%] h-[100%] font-poppins">
                    <Link to={`/article/${article.id}`}>
                        <img
                            src={article.cover_image}
                            alt={article.title}
                            className="w-full h-[200px] md:h-[266px] object-cover"
                        />
                    </Link>
                </div>

                {/* Right side - Article content */}
                <div className="flex-1 px-2 py-2 flex flex-col justify-between font-poppins">
                    <div>
                        {/* Main headline */}
                        <h1 className={`text-[20px] md:text-[24px] font-medium leading-[auto] tracking-[-0.03em] text-black ${isUrdu ? 'text-right' : 'text-left'}`}>
                            {article.title}
                        </h1>

                        {/* Article description */}
                        <p className={`text-[16px] md:text-[18px] font-normal leading-[auto] tracking-[-0.03em] line-clamp-4 text-black ${isUrdu ? 'text-right' : 'text-left'}`}>
                            {article.description}
                        </p>
                        <Link
                            to={`/article/${article.id}`}
                            className={`text-[14px] md:text-[16px] font-semibold leading-[auto] tracking-[-0.03em] text-black underline red-primary ${isUrdu ? 'text-right' : 'text-left'}`}
                        >
                            {isUrdu ? 'مزید پڑھیں' : 'READ MORE'}
                        </Link>
                    </div>

                    {/* Author byline */}
                    <div className="mt-2">
                        <p className={`text-[14px] md:text-[16px] font-semibold leading-[auto] tracking-[-0.03em] text-black ${isUrdu ? 'text-right' : 'text-left'}`}>
                            {article.writer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
