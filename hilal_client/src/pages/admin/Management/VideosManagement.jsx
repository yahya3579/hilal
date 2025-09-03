import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../../context/ToastContext';
import Loader from '../../../components/Loader/loader';

// API calls
const fetchVideos = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos/management/`);
    return res.data.data;
};

const deleteVideo = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/video/${id}/`);
};

const VideosManagement = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    const [deleteModal, setDeleteModal] = useState({ show: false, videoId: null });
    const [languageFilter, setLanguageFilter] = useState('');

    const { data: videos, isLoading, error } = useQuery({
        queryKey: ['videos-management'],
        queryFn: fetchVideos,
    });

    const mutation = useMutation({
        mutationFn: deleteVideo,
        onSuccess: () => {
            showToast("Video deleted successfully!", "success");
            queryClient.invalidateQueries(['videos-management']);
            setDeleteModal({ show: false, videoId: null });
        },
        onError: (error) => {
            showToast(`Error deleting video: ${error.response?.data || error.message}`, "error");
        },
    });

    const handleDelete = (videoId) => {
        setDeleteModal({ show: true, videoId });
    };

    const confirmDelete = () => {
        if (deleteModal.videoId) {
            mutation.mutate(deleteModal.videoId);
        }
    };

    if (isLoading) return <Loader />;
    if (error) return <p className="p-4 text-red-500">Error fetching videos</p>;

    // Filter videos based on language filter
    const filteredVideos = languageFilter 
        ? videos.filter(video => video.language === languageFilter)
        : videos;

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="relative mb-6">
                <h1 className="font-medium text-[32.21px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-[#DF1600] text-center mx-auto w-fit">
                    Videos Management
                </h1>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-sm text-[#1E1E1E] font-medium leading-[100%] tracking-[-0.01em] font-poppins">
                        Language filter
                    </span>
                    <select 
                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                        value={languageFilter}
                        onChange={(e) => setLanguageFilter(e.target.value)}
                    >
                        <option value="">All Languages</option>
                        <option value="English">English</option>
                        <option value="Urdu">Urdu</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                {(!filteredVideos || filteredVideos.length === 0) ? (
                    <p className="text-center text-gray-500 font-poppins text-lg">No videos found.</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">No</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Thumbnail</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Title</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Description</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Language</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Order</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Status</th>
                                <th className="text-left py-3 px-4 text-[#DF1600] font-medium text-[15px] capitalize font-poppins">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVideos.map((video, index) => (
                                <tr
                                    key={video.id}
                                    className="border-b-[0.5px] border-[#292D32] hover:bg-gray-50 cursor-pointer"
                                >
                                    <td className="py-4 px-4 text-gray-700">{index + 1}</td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <img
                                            src={video.thumbnail_url}
                                            alt="Video Thumbnail"
                                            className="w-[120px] h-[47px] object-cover"
                                        />
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{video.title}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">
                                            {video.description ? (video.description.length > 50 ? `${video.description.substring(0, 50)}...` : video.description) : 'No description'}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className={`px-2 py-1 rounded text-[10.89px] font-bold ${
                                            video.language === 'Urdu' 
                                                ? 'bg-[#DF1600] text-white' 
                                                : 'bg-blue-500 text-white'
                                        }`}>
                                            {video.language || 'English'}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <span className="font-medium text-[12.7px] font-poppins">{video.order}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <button className={`px-4 py-1 rounded text-[10.89px] font-bold ${
                                            video.status === 'Active' 
                                                ? 'bg-[#31AB5A] text-white' 
                                                : 'bg-gray-500 text-white'
                                        }`}>
                                            {video.status}
                                        </button>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <select
                                            defaultValue=""
                                            className="border border-gray-300 rounded px-3 py-1 text-sm bg-white text-[10.89px] font-poppins cursor-pointer"
                                            onChange={(e) => {
                                                const action = e.target.value;
                                                if (action === "edit") {
                                                    navigate(`/admin/videos-management/edit/${video.id}`);
                                                } else if (action === "preview") {
                                                    window.open(video.youtube_url, '_blank');
                                                } else if (action === "delete") {
                                                    handleDelete(video.id);
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

            {/* New Video Button */}
            <div className="flex justify-center mt-8">
                <Link to="/admin/videos-management/create">
                    <button className="bg-[#DF0404] text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-bold text-[16.1px] leading-[100%] tracking-[-0.01em] font-poppins cursor-pointer">
                        New Video
                    </button>
                </Link>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteModal.show && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                        <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
                        <p className="text-gray-600 mb-6">Are you sure you want to delete this video? This action cannot be undone.</p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setDeleteModal({ show: false, videoId: null })}
                                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideosManagement;
