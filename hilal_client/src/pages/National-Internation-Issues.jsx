import React from 'react'
import InternationIssuesCard from '../components/Home/InternationalIssuesCard'

const NationalInternationIssues = () => {
    return (
        <>


            <div className="bg-white min-h-screen">
                {/* Header */}
                <div className="px-3 sm:px-6 pt-3 sm:pt-4">
                    <h1 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#DF1600] font-poppins mt-1 sm:mt-2">
                        National international issues
                    </h1>
                </div>

                {/* Grid + Red Line */}
                <div className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-2 sm:gap-4">
                        {/* Red Line */}
                        <div className="col-span-full border-t-[3px] border-[#DF1600] mb-1 sm:mb-2" />
                        {
                            [1, 2, 3, 4, 5, 6].map((issue) => (
                                <InternationIssuesCard />

                            ))}

                    </div>
                </div>
            </div>


        </>

    )
}


export default NationalInternationIssues