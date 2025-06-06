import React from 'react'

const ReadersOpinion = () => {
    return (
        <>
            {/* Right Sidebar - Takes up 1/3 of the width */}
            <div className="space-y-6 pl-3   ">
                {/* Ad Spaces */}
                <div className="flex gap-2">
                    <div className=" w-full bg-black h-[143px] text-white text-center">
                        <p className="text-sm font-medium">Ad space</p>
                    </div>
                    <div className="w-full bg-black h-[143px] text-white text-center">
                        <p className="text-sm font-medium">Ad space</p>
                    </div>
                </div>

                {/* Readers Opinion */}
                <div>


                    <header className="bg-white">
                        <div className="max-w-7xl mx-auto px-2">
                            <h1 className="text-2xl font-medium py-1 pb-2 text-[#F65050] oswald">Readers Opinion</h1>
                            <div
                                className="h-[1px] w-[93%]"
                                style={{
                                    backgroundSize: "100% 100%",
                                    backgroundImage: "linear-gradient(to right, #dc2626 20%, black 20%)",
                                }}
                            ></div>
                        </div>
                    </header>

                    <div className="space-y-4 mt-5">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gray-100 shadow-[0px_4px_4px_0px_#00000040]  px-2 py-1">
                                <div className="flex items-start gap-3">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLbIv5mGpP5NrFbIPD0P-pK2YR8oAh1QAZQ&s"
                                        alt="Reader profile"
                                        className="w-[57px] h-[57px] rounded-full object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-800 mb-2">
                                            Long established fact that a reader will be distracted
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            by <span className="text-gray-700">Nimra18</span> - 16 April 2017
                                        </p>
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

export default ReadersOpinion