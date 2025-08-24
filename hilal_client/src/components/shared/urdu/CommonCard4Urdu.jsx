// import React from 'react'
// import { Link } from 'react-router-dom'

// const CommonCard4Urdu = ({ article }) => {
//     return (
//         <>

//             <Link to={`/article/${article.id}`}>
//                 <img
//                     src={article.cover_image}
//                     alt={article.title}
//                     className="w-full h-full object-cover opacity-60"
//                 />
//             </Link>
//         </>
//     )
// }

// export default CommonCard4Urdu

import React from 'react'
import { Link } from 'react-router-dom'

const CommonCard4Urdu = ({ article }) => {
    return (
        <>
            <div key={article.id} className="relative h-[250px] overflow-hidden">
                <Link to={`/article/${article.id}`}>
                    <img
                        src={article.cover_image}
                        alt={article.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-2 left-4 right-4 text-white">
                    <p className="text-xs mb-2">{article.writer}</p>
                    <h3 className="text-sm font-bold leading-tight mb-2">{article.title}</h3>
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

export default CommonCard4Urdu