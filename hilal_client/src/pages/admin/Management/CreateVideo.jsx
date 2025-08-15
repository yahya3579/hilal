import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../../components/Loader/loader';

const createVideo = async (videoData) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/video/create/`, videoData);
    return res.data;
};

const CreateVideo = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState({
        title: '',
        youtube_url: '',
        description: '',
        status: 'Active',
        order: 0
    });

    const createMutation = useMutation({
        mutationFn: createVideo,
        onSuccess: () => {
            queryClient.invalidateQueries(['videos-management']);
            navigate('/admin/videos-management');
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createMutation.mutate(formData);
    };

    if (createMutation.isPending) return <Loader />;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Video</h1>
            <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Video Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="youtube_url" className="block text-sm font-medium text-gray-700 mb-2">
                            YouTube URL *
                        </label>
                        <input
                            type="url"
                            id="youtube_url"
                            name="youtube_url"
                            value={formData.youtube_url}
                            onChange={handleInputChange}
                            placeholder="https://www.youtube.com/watch?v=VIDEO_ID"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Enter video description..."
                        />
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-2">
                            Display Order
                        </label>
                        <input
                            type="number"
                            id="order"
                            name="order"
                            value={formData.order}
                            onChange={handleInputChange}
                            min="0"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>

                    <div className="flex justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            onClick={() => navigate('/admin/videos-management')}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={createMutation.isPending}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                        >
                            {createMutation.isPending ? 'Creating...' : 'Create Video'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateVideo;
