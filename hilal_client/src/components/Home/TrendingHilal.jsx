const TrendingHilalSection = () => {
    return (
        <div className="bg-white py-2 px-4 font-poppins">
            {/* Trending Publications Header */}
            <div className="border-t-[3px] border-red-600">
                <div className=" py-2">
                    <h2 className="heading-text-primary">TRENDING - HILAL PUBLICATIONS</h2>
                </div>

                <div className="py-4 grid lg:grid-cols-2 gap-x-6">
                    <div className="flex flex-col gap-6 mb-6">
                        {/* Large Featured Article 1 */}

                        <div className="relative h-[250px]  overflow-hidden">
                            <img
                                src="https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/cropped-shutterstock_1089818699.jpg"
                                alt="Refugees background"
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-2 left-4 right-4 text-white">
                                <p className="text-xs mb-2">Ambassador Naghmana A. Hashmi (R)</p>
                                <h3 className="text-sm font-bold leading-tight mb-2">
                                    DEPORTING THE AFGHAN REFUGEES: CHALLENGES AND POLICY OPTIONS
                                </h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-2  gap-x-8 ">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div className="bg-white  overflow-hidden">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4gn1_pFyGPz7r_gZa5YAY1AnxDvRXP0Deg&s" alt=""
                                        loading="lazy" className="h-[120px] object-cover w-full" />
                                    <div className="py-3">
                                        <p className="text-xs text-gray-400 mb-1">Tahir Jahangir</p>
                                        <h4 className="text-xs font-semibold line-clamp-2 text-black leading-[1.8] ">
                                            What Have We Given to Pakistan Strengthening the Economy
                                        </h4>
                                        <a href="#" className="text-xs text-red-600 font-bold  hover:underline">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Grid of smaller articles */}
                    <div className="flex flex-col gap-6">

                        <div className="relative h-[250px]  overflow-hidden">
                            <img
                                src="https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/cropped-shutterstock_1089818699.jpg"
                                alt="Refugees background"
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-2 left-4 right-4 text-white">
                                <p className="text-xs mb-2">Ambassador Naghmana A. Hashmi (R)</p>
                                <h3 className="text-sm font-bold leading-tight mb-2">
                                    DEPORTING THE AFGHAN REFUGEES: CHALLENGES AND POLICY OPTIONS
                                </h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1   gap-4 ">
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <div className="bg-white flex gap-x-3  overflow-hidden">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4gn1_pFyGPz7r_gZa5YAY1AnxDvRXP0Deg&s" alt=""
                                        loading="lazy" className=" w-[200px] h-[60px] object-cover " />
                                    <div className="">
                                        <p className="text-xs text-gray-400 mb-1">Tahir Jahangir</p>
                                        <h4 className="text-xs font-semibold line-clamp-2 text-black leading-[1.8]">
                                            What Have We Given to Pakistan Strengthening the Economy  What Have We Given to Pakistan Strengthening the Economy
                                        </h4>

                                    </div>
                                </div>
                            ))}
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingHilalSection
