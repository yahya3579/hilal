const PreviousMonthHilalUrdu = () => {
    const magazineCovers = [
        {
            src: "https://m.media-amazon.com/images/I/71cmgvLSnJL.jpg",
            alt: "Resolution Day Magazine Cover"
        },
        {
            src: "https://m.media-amazon.com/images/I/71cmgvLSnJL.jpg",
            alt: "1940 Historical Magazine Cover"
        },
        {
            src: "https://m.media-amazon.com/images/I/71cmgvLSnJL.jpg",
            alt: "Hilal Her Magazine Cover"
        }
    ];

    return (
        <div className="bg-white w-full font-poppins">
            <div className="border-t-[3px] border-red-600">
                <div className="py-2">
                    <h2 className="heading-text-primary" dir='rtl'>ہلال میگزین -گزشتہ ماہ کے شمارے</h2>
                </div>



                {/* Magazine Covers */}
                <div className="mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 max-lg: gap-y-4 gap-x-6">
                        {magazineCovers.map((magazine, index) => (
                            <div key={index} className="overflow-hidden w-full  shadow-md">
                                <img loading="lazy"
                                    src={magazine.src}
                                    alt={magazine.alt}
                                    className="w-full h-[373px] object-cover aspect-[3/4]"
                                />
                            </div>
                        ))}
                    </div>
                </div>




            </div>
        </div>
    );
};

export default PreviousMonthHilalUrdu;
