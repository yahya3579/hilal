import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import articleCover from "../../../assets/articles-cover.jpg";

// API calls
const fetchEbooks = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/ebooks/`);
    return res.data.data;
};

const deleteEbook = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/ebook/${id}/`);
};

const EbookManagement = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: ebooks, isLoading, error } = useQuery({
        queryKey: ["ebooks"],
        queryFn: fetchEbooks,
    });

    const mutation = useMutation({
        mutationFn: deleteEbook,
        onSuccess: () => {
            alert("Ebook deleted successfully!");
            queryClient.invalidateQueries(["ebooks"]); // Refetch ebooks data
        },
        onError: (error) => {
            alert(`Error deleting ebook: ${error.response?.data || error.message}`);
        },
    });

    if (isLoading) return <p>Loading ebooks...</p>;
    if (error) return <p>Error fetching ebooks</p>;

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="relative mb-6">
                <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-[#DF1600] text-center mx-auto w-fit">
                    Ebook Management
                </h1>

                {/* Filter section aligned to the right */}
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
                {(!ebooks || ebooks.length === 0) ? (
                    <p className="text-center text-gray-500 font-poppins text-lg">No ebooks found.</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">No</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Image</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Title</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Publish Date</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Language</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Direction</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Status</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ebooks.map((ebook, index) => (
                                <tr
                                    key={ebook.id}
                                    className="border-b-[0.5px] border-[#292D32] hover:bg-gray-50"
                                >
                                    <td className="py-4 px-4 text-gray-700">{index + 1}</td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <img
                                            src={ebook.cover_image || articleCover}
                                            alt="Ebook Cover"
                                            className="w-[120px] h-[47px] object-cover rounded"
                                        />
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{ebook.title}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{ebook.publish_date}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{ebook.language}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{ebook.direction}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <button className={`px-4 py-1 rounded text-[10.89px] font-bold ${ebook.status === "Active" ? "bg-[#31AB5A] text-white" : "bg-gray-400 text-white"}`}>
                                            {ebook.status}
                                        </button>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <select
                                            defaultValue=""

                                            className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins"
                                            onChange={(e) => {
                                                const action = e.target.value;
                                                if (action === "edit") {
                                                    navigate(`/admin/edit-ebook/${ebook.id}`);
                                                } else if (action === "delete") {
                                                    if (window.confirm("Are you sure you want to delete this ebook?")) {
                                                        mutation.mutate(ebook.id);
                                                    }
                                                }
                                            }}
                                        >
                                            <option disabled value="">Action</option>
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
            <div className="flex justify-center mt-8">
                <Link to="/admin/edit-ebook">
                    <button
                        onClick={() => console.log("Add new ebook")}

                        className="bg-[#DF0404] text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-bold text-[16.1px] leading-[100%] tracking-[-0.01em] font-poppins"
                    >
                        New Ebook
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EbookManagement;