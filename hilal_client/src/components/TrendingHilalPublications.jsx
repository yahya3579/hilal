import React from 'react'
import { Play, Clock, User } from "lucide-react"
const TrendingHilalPublications = () => {
    return (
        <>
            {/* Trending Section Header */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-red-600 border-b-2 border-red-600 pb-2 inline-block">
                    Trending Hilal Publications
                </h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured Article - Left Column */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="relative">
                            <img
                                src="/placeholder.svg?height=300&width=600"
                                alt="Cricket Match"
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">Cricket</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <User className="w-4 h-4 mr-1" />
                                <span className="mr-4">Craig Barber</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span>27 Dec 2019</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                Solskjaer dismisses Klopp comments on Man Utd penalty record
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* News List - Right Column */}
                <div className="space-y-4">
                    {/* News Item 1 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                        <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="News thumbnail"
                            className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-xs text-gray-500 mb-1">
                                <span className="text-red-600 font-medium mr-2">Craig Barber</span>
                                <span>27 Dec 2019</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                South Africa hammer injury-hit Sri Lanka Player
                            </h3>
                        </div>
                    </div>

                    {/* News Item 2 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                        <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="News thumbnail"
                            className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-xs text-gray-500 mb-1">
                                <span className="text-red-600 font-medium mr-2">Craig Barber</span>
                                <span>27 Dec 2019</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                Satellite lead New Zealand leave Pakistan on the ropes
                            </h3>
                        </div>
                    </div>

                    {/* News Item 3 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                        <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="News thumbnail"
                            className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-xs text-gray-500 mb-1">
                                <span className="text-red-600 font-medium mr-2">Craig Barber</span>
                                <span>27 Dec 2019</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                The only thing that overcomes hard luck is hard work
                            </h3>
                        </div>
                    </div>

                    {/* News Item 4 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                        <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="News thumbnail"
                            className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-xs text-gray-500 mb-1">
                                <span className="text-red-600 font-medium mr-2">Craig Barber</span>
                                <span>27 Dec 2019</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                Success is not a good teacher failure makes you humble
                            </h3>
                        </div>
                    </div>

                    {/* News Item 5 */}
                    <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                        <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="News thumbnail"
                            className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-xs text-gray-500 mb-1">
                                <span className="text-red-600 font-medium mr-2">Craig Barber</span>
                                <span>27 Dec 2019</span>
                            </div>
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                Rahane-led India levy ghosts of Adelaide at Melbourne
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingHilalPublications