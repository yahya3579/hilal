
const ReaderOpinion = () => {
    return (
        <>


            <div className="space-y-4 lg:col-span-3">
                {/* Advertisement Boxes */}
                <div className="space-y-2  justify-around flex mx-auto w-[90%] gap-x-6">
                    {[1, 2].map((_, idx) => (
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                            alt="Reader"
                            className="w-[150px] h-[150px]  object-cover"
                        />
                    ))}
                </div>

                {/* Readers Opinion Section */}
                <div className="border-t-2 border-red-600 mt-6">
                    <div className="text-[#DF1600] px-4 py-2">
                        <h2 className="font-[Poppins] font-medium text-[24px] leading-[100%] tracking-[-0.03em] uppercase">
                            READERS OPINION
                        </h2>
                    </div>

                    <div className="bg-gray-50 p-3 space-y-3">
                        {[1, 2, 3].map((_, idx) => (
                            <div key={idx} className="flex gap-3 shadow-sm py-3 px-2 items-start">
                                <div className="flex self-center">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                                        alt="Reader"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-black font-bold leading-relaxed">
                                        Long established fact that a reader will be distracted
                                    </p>
                                    <div className="text-xs text-gray-400 mt-1">
                                        By <span className="text-red-600">Nikunj2</span> - 16 April 2017
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReaderOpinion