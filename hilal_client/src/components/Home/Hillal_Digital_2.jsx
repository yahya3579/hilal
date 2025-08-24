import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from '../Loader/loader';

const fetchHilalDigitalData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos/hilal-digital/`);
    return res.data.data;
};

const HilalDigital2 = () => {
    const [playingVideo, setPlayingVideo] = useState(null);

    const { data: videoData, isLoading, error } = useQuery({
        queryKey: ['hilal-digital'],
        queryFn: fetchHilalDigitalData,
    });

    const handleVideoClick = (videoId) => {
        setPlayingVideo(videoId);
    };

    if (isLoading) return <Loader />;
    if (error) return <p>Error loading videos</p>;
    if (!videoData) return <p>No videos available</p>;

    const { featured_video, other_videos } = videoData;

    return (
        <div className="bg-white font-poppins px-4 py-2 font-poppins ">
            {/* In Focus Header */}
            <div className="border-t-[3px] border-red-600">
                <div className="py-2 mb-2">
                    <h2 className="heading-text-primary">Hilal Digital</h2>
                </div>



                {/* Main Content */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 max-lg:gap-y-1 lg:gap-x-8">

                    {/* Featured Video (Left Side) */}
                    <div className="lg:col-span-1">
                        {playingVideo ? (
                            <div className="overflow-hidden">
                                <div className="aspect-video h-[350px] w-full bg-gray-900 relative">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&controls=1`}
                                        title="Playing Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        ) : featured_video ? (
                            <div className="overflow-hidden">
                                <div 
                                    className="aspect-video h-[350px] w-full bg-gray-900 relative cursor-pointer"
                                    onClick={() => handleVideoClick(featured_video.video_id)}
                                >
                                    <img
                                        src={featured_video.thumbnail_url}
                                        alt={featured_video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-red-600 rounded-lg p-2 shadow-md">
                                            <svg className="text-white w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="aspect-video h-[350px] w-full bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-500">No featured video available</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Videos (Right Side) */}
                    <div className="space-y-4">
                        {other_videos.map((video, index) => (
                            <div key={video.id} className="bg-white">
                                <div className="flex gap-3">
                                    <div 
                                        className="w-20 h-16 bg-gray-200 flex-shrink-0 overflow-hidden cursor-pointer relative"
                                        onClick={() => handleVideoClick(video.video_id)}
                                    >
                                        <img
                                            src={video.thumbnail_url}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {playingVideo === video.video_id ? (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                <div className="bg-red-600 rounded-full p-1">
                                                    <svg className="text-white w-3 h-3 fill-current" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                                <div className="bg-black bg-opacity-70 rounded-full p-1">
                                                    <svg className="text-white w-3 h-3 fill-current" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span>1.4K views</span>
                                            <span>3 days ago</span>
                                        </div>
                                        <h3 className="text-xs font-semibold line-clamp-2 text-black leading-[1.8]">
                                            {video.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div >
    );
};

export default HilalDigital2;
