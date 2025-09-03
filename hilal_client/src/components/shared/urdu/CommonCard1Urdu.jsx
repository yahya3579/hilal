import React from 'react'
import { Link } from 'react-router-dom'

const CommonCard1Urdu = ({ article }) => {
    return (
        <>
            <div key={article.id} className="  transition-shadow cursor-pointer">
                {/* Image Section */}
                <Link to={`/article/${article.id}`}>
                    <div
                        className={`h-40 relative overflow-hidden`}
                        style={{
                            backgroundImage: `url(${article.cover_image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Category Badge */}
                        <Link to={`/category/${article.category}`} className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                            {article.category}
                        </Link>
                    </div>
                </Link>
                {/* Content Section */}
                <div className="p-4">
                    {/* Author and Date */}
                    <div className="text-xs text-gray-400 mb-1">
                        <span className="font-medium mr-2">{article.writer}</span>
                        <span>{new Date(article.publish_date).toLocaleDateString("en-GB")}</span>
                    </div>
                    {/* Title */}
                    <Link to={`/article/${article.id}`}>
                        <h3 className="text-xs font-urdu-nastaliq-sm font-semibold  text-black h-max " dir='rtl'>
                            {/* {article.title} */}
                            {article.title}
                        </h3>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CommonCard1Urdu