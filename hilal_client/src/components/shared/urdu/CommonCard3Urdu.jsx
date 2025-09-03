import React from 'react'
import { Link } from 'react-router-dom'

const CommonCard3Urdu = ({ article }) => {
    return (
        <>

            <div key={article.id} className="overflow-hidden">
                <Link to={`/article/${article.id}`}>
                    <img
                        src={article.cover_image}
                        alt={article.title}
                        loading="lazy"
                        className="h-[120px] object-cover w-full"
                    />
                </Link>
                <div className="py-2">
                    <p className="text-xs line-clamp-1 text-gray-400 mb-1" dir='rtl'>{article.writer}</p>
                    <h4 className="text-xs  font-urdu-nastaliq-sm font-semibold  text-black leading-[1.8]" dir='rtl'>
                        {/* {article.title} */}
                        {article.title}
                    </h4>
                    <Link to={`/article/${article.id}`} className="text-xs font-urdu-nastaliq-sm text-red-600 font-bold hover:underline" dir='rtl'>
                        {/* Read More */}
                        مزید پڑھیں
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CommonCard3Urdu