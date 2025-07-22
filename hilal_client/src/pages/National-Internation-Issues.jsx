import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import InternationIssuesCard from '../components/Home/InternationalIssuesCard'

const fetchArticlesByCategory = async (category) => {
    const res = await axios.get(`http://localhost:8000/api/articles/category/${category}`)
    return res.data.data
}

const NationalInternationIssues = () => {
    const { category } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['articles', category],
        queryFn: () => fetchArticlesByCategory(category),
        enabled: !!category,
    })

    if (isLoading) return <p>Loading articles...</p>
    if (error) return <p>Error fetching articles</p>

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="px-3 sm:px-6 pt-3 sm:pt-4">
                <h1 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#DF1600] font-poppins mt-1 sm:mt-2">
                    {category.replace('-', ' ')}
                </h1>
            </div>

            {/* Grid + Red Line */}
            <div className="px-3 sm:px-6 py-3 sm:py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {/* Red Line */}
                    <div className="col-span-full border-t-[3px] border-[#DF1600] mb-1 sm:mb-2" />
                    {data.map((article) => (
                        <InternationIssuesCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NationalInternationIssues