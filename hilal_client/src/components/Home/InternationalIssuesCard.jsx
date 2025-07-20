export default function InternationIssuesCard() {
    return (
        <div className="mx-auto px-2 md:px-4">
            <div className="flex flex-col md:flex-row bg-white shadow-sm overflow-hidden">
                {/* Left side - Image with overlay text */}
                <div className="relative w-full md:w-[40%] h-[100%] font-poppins">
                    <img
                        src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop"
                        alt="Battle of Narratives and Diplomacy"
                        className="w-full h-[200px] md:h-[266px] object-cover"
                    />
                </div>

                {/* Right side - Article content */}
                <div className="flex-1 px-2 flex flex-col justify-between font-poppins">
                    <div>
                        {/* Main headline */}
                        <h1 className="text-[20px] md:text-[24px] font-medium leading-[auto] tracking-[-0.03em] text-black">
                            Battle Of Narratives And Diplomacy: The Truth Prevails
                        </h1>

                        {/* Article description */}
                        <p className="text-[16px] md:text-[18px] font-normal leading-[auto] tracking-[-0.03em] line-clamp-4 text-black">
                            Pakistan's Principled Response To India's Military Adventurism Reaffirmed its Role As A Responsible
                            Regional Actor. Loss Of Innocent Lives In The Indian Illegally Occupied Jammu And K ...
                        </p>
                        <span className="text-[14px] md:text-[16px] font-semibold leading-[auto] tracking-[-0.03em] text-black underline red-primary">READ MORE</span>
                    </div>

                    {/* Author byline */}
                    <div className="mt-2">
                        <p className="text-[14px] md:text-[16px] font-semibold leading-[auto] tracking-[-0.03em] text-black">
                            AMBASSADOR SHAHID MASROOR GUL KIANI (R)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
