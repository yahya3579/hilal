const InFocusSection = () => {
    return (
        <div className="bg-white font-poppins px-4 py-2 ">
            {/* In Focus Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="py-2">
                    <h2 className="heading-text-primary">IN - FOCUS</h2>
                </div>

                <div className=" py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Large Featured Article */}
                        <div className="bg-white overflow-hidden">


                            <img
                                src="https://i.natgeofe.com/n/9ad480f8-ca3a-46b2-842d-889d93afc43e/deosai-national-park-pakistan.jpg"
                                alt="Knowledge economy"
                                className="w-full h-[320px] object-cover"
                            />


                            <div className="py-4">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                    <span>Amir Zia</span>

                                    <span>April 25</span>
                                </div>
                                <h3 className="text-[20px] font-bold text-gray-500 mb-2">The Long Road to a Knowledge Economy.</h3>
                                <p className="text-xs text-black leading-relaxed font-bold  line-clamp-5 mb-2">
                                    For better or worse, artificial intelligence (AI) is changing the world at a breakneck speed. Tectonic
                                    shifts are being felt in every sector—from services and manufacturing to trade and business. The
                                    developed world is creating new, dynamic opportunities, but at the cost of the old and established.
                                    The choices are stark: either countries adapt within a compressed timeframe or fall behind and lose...
                                </p>
                                <a href="#" className="text-xs font-bold text-red-600 hover:underline">
                                    Read More
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2  gap-x-4 ">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div className="bg-white  overflow-hidden">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4gn1_pFyGPz7r_gZa5YAY1AnxDvRXP0Deg&s" alt=""
                                        loading="lazy" className="h-[150px] object-cover w-full" />
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
                </div>
            </div>
        </div>
    )
}

export default InFocusSection
