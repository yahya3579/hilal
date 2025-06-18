import { useState } from 'react';
import { Search } from 'lucide-react';

const Articles = () => {
    const [articles] = useState([
        { id: 1, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 2, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 3, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 4, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 5, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 6, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 7, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 8, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 9, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
        { id: 10, name: 'What have we given to.....', date: '10-03-2025', category: 'In-Focus' },
    ]);

    return (
        <div className="min-h-screen bg-white p-6">
            {/* Header */}
            <div className="text-center mb-8 relative">
                <h1 className="text-red-600 text-2xl font-bold tracking-wide">ADMIN DASHBOARD</h1>
                <div
                    className="absolute left-11 mt-2"
                    style={{
                        width: '1357px',
                        borderTop: '3px solid #DF1600'
                    }}
                ></div>
            </div>

            {/* Hilal Publications - positioned right under the red line */}
            <div className="ml-11 mb-6">
                <h2 className="text-red-600 text-sm font-bold">HILAL PUBLICATIONS</h2>
            </div>

            {/* Main Content */}
            <div className="bg-white  border-gray-200 ">
                <div className="p-6">
                    {/* Controls Section */}
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-black text-lg font-semibold">All Articles</h3>
                        <div className="flex items-center gap-6">
                            {/* Search Box */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-48 pl-10 pr-4 py-2 border border-gray-300 rounded text-sm bg-gray-50"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            </div>
                            {/* Sort Dropdown */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">Sort by:</span>
                                <select className="border border-gray-300 rounded px-3 py-2 text-sm w-24 bg-white">
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                                    <th className="pb-3 font-medium">Article Name</th>
                                    <th className="pb-3 font-medium">Date</th>
                                    <th className="pb-3 font-medium">Category</th>
                                    <th className="pb-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article) => (
                                    <tr key={article.id} className="border-b border-gray-100">
                                        <td className="py-4 text-sm text-gray-900 font-medium">{article.name}</td>
                                        <td className="py-4 text-sm text-gray-900 font-medium">{article.date}</td>
                                        <td className="py-4">
                                            <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">
                                                {article.category}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex gap-2">
                                                <button className="px-4 py-1 border border-black rounded text-sm text-gray-700 bg-white hover:bg-gray-50">
                                                    Edit
                                                </button>
                                                <button className="px-4 py-1 bg-red-100 text-red-600 border border-red-200 rounded text-sm hover:bg-red-200">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Section - showing data on left and page numbers on right */}
                    <div className="mt-6 flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                            Showing data 1 to 8 of 256K entries
                        </div>

                        <div className="flex items-center gap-1">
                            <button className="w-8 h-8 text-gray-400 hover:text-gray-600">&lt;</button>
                            <button className="w-8 h-8 bg-gray-800 text-white rounded text-sm">1</button>
                            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm">2</button>
                            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm">3</button>
                            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm">4</button>
                            <span className="px-2 text-gray-400">...</span>
                            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm">40</button>
                            <button className="w-8 h-8 text-gray-400 hover:text-gray-600">&gt;</button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="px-6 py-2 border border-red-600 text-red-600 rounded font-medium hover:bg-red-50">
                            Manage Ads
                        </button>
                        <button className="px-6 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700">
                            New Article
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;