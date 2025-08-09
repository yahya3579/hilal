import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import articleCover from "../../../assets/articles-cover.jpg";

// API calls
const fetchMagazines = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/magazines/`);
    return res.data.data;
};

const deleteMagazine = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/magazine/${id}/`);
};

const MagazineManagement = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: magazines, isLoading, error } = useQuery({
        queryKey: ["magazines"],
        queryFn: fetchMagazines,
    });

    const mutation = useMutation({
        mutationFn: deleteMagazine,
        onSuccess: () => {
            alert("Magazine deleted successfully!");
            queryClient.invalidateQueries(["magazines"]); // Refetch magazines data
        },
        onError: (error) => {
            alert(`Error deleting magazine: ${error.response?.data || error.message}`);
        },
    });

    if (isLoading) return <p>Loading magazines...</p>;
    if (error) return <p>Error fetching magazines</p>;

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="relative mb-6">
                <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-[#DF1600] text-center mx-auto w-fit">
                    Magazine Management
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
                {(!magazines || magazines.length === 0) ? (
                    <p className="text-center text-gray-500 font-poppins text-lg">No magazines found.</p>
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
                            {magazines.map((magazine, index) => (
                                <tr
                                    key={magazine.id}
                                    className="border-b-[0.5px] border-[#292D32] hover:bg-gray-50"
                                >
                                    <td className="py-4 px-4 text-gray-700">{index + 1}</td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <img
                                            src={magazine.cover_image || articleCover}
                                            alt="Magazine Cover"
                                            className="w-[120px] h-[47px] object-cover rounded"
                                        />
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{magazine.title}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{magazine.publish_date}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{magazine.language}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{magazine.direction}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <button className={`px-4 py-1 rounded text-[10.89px] font-bold ${magazine.status === "Active" ? "bg-[#31AB5A] text-white" : "bg-gray-400 text-white"}`}>
                                            {magazine.status}
                                        </button>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <select
                                            defaultValue=""

                                            className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins"
                                            onChange={(e) => {
                                                const action = e.target.value;
                                                if (action === "edit") {
                                                    navigate(`/admin/edit-magazine/${magazine.id}`);
                                                } else if (action === "delete") {
                                                    if (window.confirm("Are you sure you want to delete this magazine?")) {
                                                        mutation.mutate(magazine.id);
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
                <Link to="/admin/edit-magazine">
                    <button
                        onClick={() => console.log("Add new magazine")}
                        className="bg-[#DF0404] text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-bold text-[16.1px] leading-[100%] tracking-[-0.01em] font-poppins"
                    >
                        New Magazine
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MagazineManagement;