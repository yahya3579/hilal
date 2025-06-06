export default function PreviousMonthHilal() {
    return (
        <>
            {/* Previous Month Hilal Magazines - Takes up 2/3 of the width */}
            <div className=" px-4 py-2 mb-3  border-black pb-4 ">
                <div className="mb-6 pt-4">

                    <header className="">
                        <div className=" ">
                            <h1 className="text-2xl font-medium py-1 pb-4 text-[#F65050] oswald">Previous Month Hilal Magzines</h1>
                            <div
                                className="h-[1px] w-[93%]"
                                style={{
                                    backgroundSize: "100% 100%",
                                    backgroundImage: "linear-gradient(to right, #dc2626 20%, black 20%)",
                                }}
                            ></div>
                        </div>
                    </header>
                </div>

                <div className="flex  gap-4">
                    {/* Magazine 1 - Resolution Day */}
                    <div className="bg-white rounded-lg shadow-sm ">
                        <img
                            src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2019/09/28/1774146-1751985535.jpeg?itok=gNtZFxiy"
                            alt="Hilal Pakistan Resolution Day Magazine"
                            className="w-[302px] h-[392px] object-cover"
                        />
                    </div>

                    {/* Magazine 2 - Monument/Tower */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLbIv5mGpP5NrFbIPD0P-pK2YR8oAh1QAZQ&s"
                            alt="Hilal Magazine with Monument"
                            className="w-[302px] h-[392px] object-cover"
                        />
                    </div>

                    {/* Magazine 3 - Empowered Women */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <img
                            src="https://quwa.org/wp-content/uploads/2024/06/Pakistan-Day-Parade.jpg"
                            alt="Hilal Her Empowered Women Magazine"
                            className="w-[302px] h-[392px] object-cover"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}
