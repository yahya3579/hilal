import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../utils/store';


// Table columns configuration
const columns = [
    { key: "cover_image", label: "Article Cover" },
    { key: "title", label: "Article Title" },
    { key: "publish_date", label: "Publish Date" },
    { key: "writer", label: "Author" },
    { key: "visits", label: "Article Visits" },
    { key: "issue_new", label: "Issue News" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
];

// API calls
const fetchArticles = async (userRole, userId) => {
    if (userRole === "admin") {
        const res = await axios.get('http://localhost:8000/api/get-articles/');
        return res.data.data;
    } else if (userRole === "author") {
        const res = await axios.get(`http://localhost:8000/api/articles/user/${userId}/`);
        return res.data.data;
    }
};

const deleteArticle = async (id) => {
    await axios.delete(`http://localhost:8000/api/article/${id}/`);
};

const ArticleManagement = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient(); // Initialize query client for refetching
    const userRole = useAuthStore((state) => state.userRole);
    const userId = useAuthStore((state) => state.userId);

    const { data, isLoading, error } = useQuery({
        queryKey: ['articles', userRole, userId],
        queryFn: () => fetchArticles(userRole, userId),
    });

    const mutation = useMutation({
        mutationFn: deleteArticle,
        onSuccess: () => {
            alert("Article deleted successfully!");
            queryClient.invalidateQueries(['articles']); // Refetch articles data
        },
        onError: (error) => {
            alert(`Error deleting article: ${error.response?.data || error.message}`);
        },
    });

    if (isLoading) return <p className="p-4">Loading articles...</p>;
    if (error && !data) return <p className="p-4 text-red-500">Error fetching articles</p>;

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="relative mb-6">
                <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-[#DF1600] text-center mx-auto w-fit">
                    Article Management
                </h1>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-sm text-[#1E1E1E] font-medium leading-[100%] tracking-[-0.01em] font-poppins">
                        Content filter
                    </span>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                        <option value="">Select filter</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                {(!data || data.length === 0) && !error ? (
                    <p className="text-center text-gray-500 font-poppins text-lg">No articles found.</p>
                ) : error ? (
                    <p className="text-center text-red-500 font-poppins text-lg">Error fetching articles</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">No</th>
                                {columns.map((col, idx) => (
                                    <th
                                        key={idx}
                                        className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins"
                                    >
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b-[0.5px] border-[#292D32] hover:bg-gray-50"
                                >
                                    <td className="py-4 px-4 text-gray-700">{index + 1}</td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <img
                                            src={item.cover_image}
                                            alt="Article"
                                            className="w-[120px] h-[47px] object-cover"
                                        />
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{item.title}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">
                                            {new Date(item.publish_date).toLocaleDateString("en-GB")}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">
                                            {item.writer || "Unknown"}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">
                                            {item.visits}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <button className="bg-black text-white px-3 py-1 text-[10.89px] font-bold rounded">
                                            {item.issue_new}
                                        </button>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <button className="bg-[#31AB5A] text-white px-4 py-1 rounded text-[10.89px] font-bold">
                                            {item.status}
                                        </button>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <select
                                            className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins"
                                            onChange={(e) => {
                                                const action = e.target.value;
                                                if (action === "edit") {
                                                    navigate(`/admin/new-article/${item.id}`);
                                                } else if (action === "preview") {
                                                    console.log("Preview article:", item.id);
                                                } else if (action === "delete") {
                                                    if (window.confirm("Are you sure you want to delete this article?")) {
                                                        mutation.mutate(item.id);
                                                    }
                                                }
                                            }}
                                        >
                                            <option disabled value="">Action</option>
                                            <option value="preview">Preview</option>
                                            <option value="edit">Edit</option>
                                            <option value="delete">Delete</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* New Item Button */}
            {userRole == "admin" && <div className="flex justify-center mt-8">
                <Link to="/admin/new-article">
                    <button
                        onClick={() => console.log("Add new article")}
                        className="bg-[#DF0404] text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-bold text-[16.1px] leading-[100%] tracking-[-0.01em] font-poppins"
                    >
                        New Article
                    </button>
                </Link>
            </div>}
        </div>
    );
};

export default ArticleManagement;
