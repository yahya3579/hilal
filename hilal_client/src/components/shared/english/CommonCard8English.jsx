import React from 'react'
import { Link } from 'react-router-dom'

const CommonCard8English = ({ article }) => {
    return (
        <>

            <Link to={`/article/${article.id}`} key={article.id} className='flex items-start gap-2 hover:bg-gray-50 rounded cursor-pointer outline-none'>
                <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-16 h-10 object-cover flex-shrink-0 outline-none"
                />
                <p className="text-black text-xs outline-none font-bold">
                    {article.title}
                </p>
            </Link>
        </>
    )
}

export default CommonCard8English