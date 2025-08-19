import React from 'react'
import { Link } from 'react-router-dom'

export const CommonCard2Urdu = ({ data }) => {
    return (
        <>

            <Link to={`/article/${data[0].id}`}>
                <div className="bg-white overflow-hidden">
                    <img
                        src={data[0].cover_image}
                        alt={data[0].title}
                        className="w-full h-[300px] object-cover"
                    />
                    <div className="py-4">
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                            <span className="line-clamp-1 max-w-[70%]" dir='rtl'>{data[0].writer}</span>
                            <span>{new Date(data[0].publish_date).toLocaleDateString("en-GB")}</span>
                        </div>
                        {/* <h3 className="text-[20px] font-bold line-clamp-1 text-gray-500 mb-2">{data[0].title}</h3> */}
                        <h3 className="text-[20px] font-bold line-clamp-1 text-gray-500 mb-2" dir='rtl'>{data[0].title}</h3>
                        <p className="text-xs text-black leading-relaxed font-bold line-clamp-5 mb-2" dir='rtl'>
                            {/* {data[0].description} */}
                            {data[0].description}
                        </p>
                    </div>
                </div>
            </Link>

        </>
    )
}
