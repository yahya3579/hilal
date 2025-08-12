import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../utils/store';
import { create } from 'zustand';
import Loader from '../../../components/Loader/loader';

// Table columns configuration
const columns = [
    { key: "image", label: "Image" },
    { key: "title", label: "Title" },
    { key: "created", label: "Created" },
    { key: "location", label: "Location" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
];

// API calls
const fetchBillboards = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-billboards/`);
    console.log("Fetched billboards:", res.data.data);
    return res.data.data;
};

const deleteBillboard = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/billboard/${id}/`);
};

const BillboardsManagement = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient(); // Initialize query client for refetching

    const { data, isLoading, error } = useQuery({
        queryKey: ['billboards'],
        queryFn: fetchBillboards,
    });

    const mutation = useMutation({
        mutationFn: deleteBillboard,
        onSuccess: () => {
            alert("Billboard deleted successfully!");
            queryClient.invalidateQueries(['billboards']); // Refetch billboards data
        },
        onError: (error) => {
            alert(`Error deleting billboard: ${error.response?.data || error.message}`);
        },
    });

    // Location mapping

    const locationMapping = {
        "1": "Armed Forces Section",
        "2": "Advertisement 1",
        "3": "Advertisement 2",
        "4": "Trending Publication Section",
        "5": "Reader's Opinion 1",
        "6": "Reader's Opinion 2",
    };

    if (isLoading) return <Loader />;
    if (error && !data) return <p className="p-4 text-red-500">Error fetching billboards</p>;

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="relative mb-6">
                <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-[#DF1600] text-center mx-auto w-fit">
                    Billboard Management
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
                    <p className="text-center text-gray-500 font-poppins text-lg">No billboards found.</p>
                ) : error ? (
                    <p className="text-center text-red-500 font-poppins text-lg">Error fetching billboards</p>
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
                                            src={item.image}
                                            alt="Billboard"
                                            className="w-[120px] h-[47px] object-cover"
                                        />
                                    </td>

                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{item.title}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{item.created}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">
                                            {locationMapping[item.location] || "Unknown"}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <button className="bg-[#31AB5A] text-white px-4 py-1 rounded text-[10.89px] font-bold">
                                            {item.status}
                                        </button>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">

                                        <select
                                            defaultValue=""
                                            className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins"
                                            onChange={(e) => {
                                                const action = e.target.value;

                                                if (action === "edit") {
                                                    navigate(`/admin/edit-billboard/${item.id}`);
                                                } else if (action === "preview") {
                                                    console.log("Preview Billboard:", item.id);
                                                } else if (action === "delete") {
                                                    if (window.confirm("Are you sure you want to delete this Billboard?")) {
                                                        mutation.mutate(item.id);
                                                    }
                                                }

                                                // Reset select so next selection always fires onChange
                                                e.target.value = "";
                                            }}
                                        >
                                            <option disabled value="">Action</option>
                                            {/* Uncomment if needed */}
                                            {/* <option value="preview">Preview</option> */}
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
                <Link to="/admin/edit-billboard">
                    <button
                        onClick={() => console.log("Add new billboard")}
                        className="bg-[#DF0404] text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-bold text-[16.1px] leading-[100%] tracking-[-0.01em] font-poppins"
                    >
                        New Billboard
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default BillboardsManagement;
