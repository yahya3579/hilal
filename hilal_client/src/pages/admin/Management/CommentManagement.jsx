import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader/loader";

const fetchComments = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-comments/`);
    return response.data.data;
};

const deleteComment = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/comment/${id}/`);
};

const CommentManagement = () => {
    const queryClient = useQueryClient();

    const { data: comments, isLoading, isError } = useQuery({
        queryKey: ["comments"],
        queryFn: fetchComments,
    });

    const mutation = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            alert("Comment deleted successfully!");
            queryClient.invalidateQueries(["comments"]); // Refetch comments data
        },
        onError: (error) => {
            alert(`Error deleting comment: ${error.response?.data || error.message}`);
        },
    });

    if (isLoading) return <Loader />;

    if (isError) {
        return <div>Error fetching comments.</div>;
    }

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="relative mb-6">
                <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-[#DF1600] text-center mx-auto w-fit">
                    Comment management
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
                {(!comments || comments.length === 0) ? (
                    <p className="text-center text-gray-500 font-poppins text-lg">No comments found.</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">No</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Author Name</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Article Title</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Comment</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="border-b-[0.5px] border-[#292D32] hover:bg-gray-50"
                                >
                                    <td className="py-4 px-4 text-gray-700">{index + 1}</td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">
                                            {item.user_first_name} {item.user_last_name}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{item.article_title}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{item.comment}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <select
                                            defaultValue="" className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins"
                                            onChange={(e) => {
                                                const action = e.target.value;
                                                if (action === "delete") {
                                                    if (window.confirm("Are you sure you want to delete this comment?")) {
                                                        mutation.mutate(item.id); // Ensure correct ID is passed
                                                    }
                                                }
                                                e.target.value = ""; // Reset the dropdown
                                            }}
                                        >
                                            <option disabled value="">Action</option>
                                            <option value="delete">Delete</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default CommentManagement;