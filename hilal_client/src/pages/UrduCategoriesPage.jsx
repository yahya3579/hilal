import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import InternationIssuesCard from '../components/Home/InternationalIssuesCard'
import Loader from '../components/Loader/loader'
import UrduCategoriesCard from '../components/urdu/UrduCategoriesCard'

const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}`)
    return res.data.data
}

const UrduCategoriesPage = () => {
    const { category } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['articles', category],
        queryFn: () => fetchArticlesByCategory(category),
        enabled: !!category,
    })

    if (isLoading) return <Loader />
    if (error && !data) return <p>Error fetching articles</p>

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}

            {(!data || data.length === 0) ? (
                <div className=" text-gray-500 font-poppins flex justify-center items-center text-lg"> <span className="font-bold">No articles found for {category.replace('-', ' ')}</span></div>
            ) : (

                <>
                    <div className="px-3 sm:px-6 pt-3 sm:pt-4">
                        this is urdu categories page
                        <h1 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#DF1600] font-poppins mt-1 sm:mt-2">
                            {category.replace('-', ' ')}
                        </h1>
                    </div>
                    <div className="px-3 sm:px-6 py-3 sm:py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {/* Red Line */}
                            <div className="col-span-full border-t-[3px] border-[#DF1600] mb-1 sm:mb-2" />
                            {data.map((article) => (
                                <UrduCategoriesCard key={article.id} article={article} />
                            ))}
                        </div>
                    </div>

                </>
            )}
        </div>

    )
}

export default UrduCategoriesPage