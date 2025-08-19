import React from 'react'
import { Link } from 'react-router-dom'

const CommonCard5English = ({ article }) => {
    return (
        <>
            <div key={article.id} className="bg-white overflow-hidden">
                <Link to={`/article/${article.id}`}>
                    <img
                        src={article.cover_image}
                        alt={article.title}
                        loading="lazy"
                        className="h-[120px] object-cover "
                    />
                </Link>
                <div className="py-3">
                    <p className="text-xs text-gray-400 mb-1">{article.writer}</p>
                    <h4 className="text-xs font-semibold line-clamp-2 text-black leading-[1.8]">
                        {article.title}
                    </h4>
                    <Link
                        to={`/article/${article.id}`}
                        className="text-xs text-red-600 font-bold hover:underline"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CommonCard5English