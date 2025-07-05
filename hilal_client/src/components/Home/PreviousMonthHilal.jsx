const PreviousMonthHilal = () => {
    const magazineCovers = [
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3ik4PV-w8Tr42F8k--5P0DU1SAhRYQg608Xn1cjGayUXdlPNxjo1JVGWPsR1G2rAXwg&usqp=CAU",
            alt: "Resolution Day Magazine Cover"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTU0iDBEDglLCrUfCPdnkqmbSxoQuvvkfhw&s",
            alt: "1940 Historical Magazine Cover"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTU0iDBEDglLCrUfCPdnkqmbSxoQuvvkfhw&s",
            alt: "Hilal Her Magazine Cover"
        }
    ];

    return (
        <div className="bg-white w-full">
            <div className="border-t-2 border-red-600">
                <div className="text-[#DF1600] px-4 py-2">
                    <h2 className="font-[Poppins] font-medium text-[24px] leading-[100%] tracking-[-0.03em] uppercase">
                        PREVIOUS MONTH HILAL MAGAZINES
                    </h2>
                </div>



                {/* Magazine Covers */}
                <div className="mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                        {magazineCovers.map((magazine, index) => (
                            <div key={index} className="overflow-hidden w-full  shadow-md">
                                <img
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

export default PreviousMonthHilal;
