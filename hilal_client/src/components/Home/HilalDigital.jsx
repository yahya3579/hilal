// import React, { useState, useRef } from "react";
// import { Play } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import Loader from '../Loader/loader';

// const fetchVideos = async () => {
//     const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos/`);
//     return res.data.data;
// };

// const HilalDigital = () => {
//     const [playingVideo, setPlayingVideo] = useState(null);
//     const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
//     const listRef = useRef(null);

//     const { data: videos = [], isLoading, error } = useQuery({
//         queryKey: ['videos'],
//         queryFn: fetchVideos,
//     });

//     const handleVideoClick = (videoId, index) => {
//         setPlayingVideo(videoId);
//         setPlayingVideoIndex(index);
//     };

//     if (isLoading) return <Loader />;
//     if (error) return <p>Error loading videos</p>;
//     if (!videos || videos.length === 0) return <p>No videos available</p>;

//     return (
//         <div className="bg-white relative max-lg:px-4 flex font-poppins flex-col">
//             {/* Header */}
//             <div className="bg-white">
//                 <div className="border-t-[3px] border-red-600 w-full mb-4 mt-2" />
//                 <h2
//                     className="text-red-600 font-[500] text-[24px] mb-4 leading-[100%] uppercase font-poppins -mt-2"
//                     style={{ letterSpacing: "-0.03em" }}
//                 >
//                     HILAL DIGITAL
//                 </h2>
//             </div>

//             {/* Video List */}
//             <div
//                 ref={listRef}
//                 className="flex-1 overflow-y-auto max-h-screen"
//                 style={{ scrollbarWidth: "none" }}
//             >
//                 {videos.map((video, index) => (
//                     <div key={video.id} className="relative border-b my-2 border-gray-200">
//                         <div className="relative">
//                             {playingVideo === video.video_id && playingVideoIndex === index ? (
//                                 <iframe
//                                     src={`https://www.youtube.com/embed/${video.video_id}?autoplay=1&controls=1`}
//                                     className="w-full h-40"
//                                     frameBorder="0"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                 />
//                             ) : (
//                                 <div
//                                     className="relative cursor-pointer"
//                                     onClick={() => handleVideoClick(video.video_id, index)}
//                                 >
//                                     <img
//                                         src={video.thumbnail_url}
//                                         alt="thumbnail"
//                                         className="w-full h-36 object-cover transition-opacity duration-200"
//                                     />
//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <div className="bg-red-600 rounded-lg p-1.5 shadow-md">
//                                             <Play className="text-white w-5 h-5 fill-current" />
//                                         </div>
//                                     </div>
//                                     <div className="bg-white py-2">
//                                         <p className="text-xs font-semibold line-clamp-4 text-black leading-[1.8]">
//                                             {video.title}
//                                         </p>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HilalDigital;

import React, { useState, useRef } from "react";
import { Play } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from '../Loader/loader';

const fetchVideos = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/videos/`);
    // Filter videos to show only English content
    const allVideos = res.data.data;
    const englishVideos = allVideos.filter(video => 
        video.language === 'English' || !video.language // Default to English if no language set
    );
    return englishVideos;
};

const HilalDigital = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
    const listRef = useRef(null);

    const { data: videos = [], isLoading, error } = useQuery({
        queryKey: ['videos'],
        queryFn: fetchVideos,
    });

    const handleVideoClick = (videoId, index) => {
        setPlayingVideo(videoId);
        setPlayingVideoIndex(index);
    };



    if (isLoading) return <Loader />;
    if (error) return <p>Error loading videos</p>;
    if (!videos || videos.length === 0) return <p>No videos available</p>;

    // Get only the videos to display based on visibleCount
    const videosToShow = videos;

    return (
        <div className="bg-white relative max-lg:px-4 flex font-poppins flex-col">
            {/* Header */}
            <div className="bg-white">
                <div className="border-t-[3px] border-red-600 w-full mb-4 mt-2" />
                <h2
                    className="text-red-600 font-[500] text-[24px] mb-4 leading-[100%] uppercase font-poppins -mt-2"
                    style={{ letterSpacing: "-0.03em" }}
                >
                    HILAL DIGITAL
                </h2>
            </div>

            {/* Video List */}
            <div
                ref={listRef}
                className="overflow-y-auto h-[560px]"
                style={{ scrollbarWidth: "none" }}
            >
                {videosToShow.map((video, index) => (
                    <div key={video.id} className="relative border-b my-2 border-gray-200">
                        <div className="relative">
                            {playingVideo === video.video_id && playingVideoIndex === index ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.video_id}?autoplay=1&controls=1`}
                                    className="w-full h-40"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="relative cursor-pointer"
                                    onClick={() => handleVideoClick(video.video_id, index)}
                                >
                                    <img
                                        src={video.thumbnail_url}
                                        alt="thumbnail"
                                        className="w-full h-36 object-cover transition-opacity duration-200"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-red-600 rounded-lg p-1.5 shadow-md">
                                            <Play className="text-white w-5 h-5 fill-current" />
                                        </div>
                                    </div>
                                    <div className="bg-white py-2">
                                        <p className="text-xs font-semibold line-clamp-4 text-black leading-[1.8]">
                                            {video.title}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HilalDigital;