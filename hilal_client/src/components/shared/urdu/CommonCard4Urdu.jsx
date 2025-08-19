import React from 'react'
import { Link } from 'react-router-dom'

const CommonCard4Urdu = ({ article }) => {
    return (
        <>

            <Link to={`/article/${article.id}`}>
                <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-60"
                />
            </Link>
        </>
    )
}

export default CommonCard4Urdu