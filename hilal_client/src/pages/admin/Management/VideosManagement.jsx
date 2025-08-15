import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, Play } from 'lucide-react';
import Loader from '../../../components/Loader/loader';

const fetchVideos = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos/management/`);
    return res.data.data;
};

const deleteVideo = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/video/${id}/`);
};

const VideosManagement = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [videoToDelete, setVideoToDelete] = useState(null);
    const queryClient = useQueryClient();

    const { data: videos = [], isLoading, error } = useQuery({
        queryKey: ['videos-management'],
        queryFn: fetchVideos,
    });

    const deleteMutation = useMutation({
        mutationFn: deleteVideo,
        onSuccess: () => {
            queryClient.invalidateQueries(['videos-management']);
            setShowDeleteModal(false);
            setVideoToDelete(null);
        },
    });

    const handleDelete = (video) => {
        setVideoToDelete(video);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (videoToDelete) {
            deleteMutation.mutate(videoToDelete.id);
        }
    };

    if (isLoading) return <Loader />;
    if (error) return <p>Error fetching videos</p>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Videos Management</h1>
                <Link
                    to="/admin/videos-management/create"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors"
                >
                    <Plus size={20} />
                    Add New Video
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Thumbnail
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Video ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Order
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Created
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {videos.map((video) => (
                                <tr key={video.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img
                                                src={video.thumbnail_url}
                                                alt={video.title}
                                                className="h-16 w-24 object-cover rounded"
                                            />
                                            <div className="ml-2">
                                                <Play size={16} className="text-red-600" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {video.title}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {video.description && video.description.length > 50
                                                ? `${video.description.substring(0, 50)}...`
                                                : video.description}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {video.video_id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                video.status === 'Active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}
                                        >
                                            {video.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {video.order}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(video.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <Link
                                                to={`/admin/videos-management/edit/${video.id}`}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                <Edit size={16} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(video)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Delete Video
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Are you sure you want to delete "{videoToDelete?.title}"? This action cannot be undone.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                    disabled={deleteMutation.isPending}
                                >
                                    {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideosManagement;
