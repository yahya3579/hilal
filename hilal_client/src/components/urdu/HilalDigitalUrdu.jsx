// import React, { useState, useRef } from "react";
// import { Play, ChevronUp, ChevronDown } from "lucide-react";

// const HilalDigital = () => {
//   const [playingVideo, setPlayingVideo] = useState(null);
//   const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
//   const listRef = useRef(null);

//   const [newsItems, setNewsItems] = useState([
//     {
//       id: 1,
//       image: "https://i.ytimg.com/vi/jgXALm9Ec0w/maxresdefault.jpg",
//       videoId: "jgXALm9Ec0w",
//       title: "How to Learn React in 2024",
//     },
//     {
//       id: 2,
//       image: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
//       videoId: "dQw4w9WgXcQ",
//       title: "Never Gonna Give You Up - Rick Astley",
//     },
//     {
//       id: 3,
//       image: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
//       videoId: "9bZkp7q19f0",
//       title: "Gangnam Style by PSY",
//     },
//     {
//       id: 4,
//       image: "https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
//       videoId: "M7lc1UVf-VE",
//       title: "YouTube IFrame API Demo",
//     },
//     {
//       id: 5,
//       image: "https://i.ytimg.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
//       videoId: "LXb3EKWsInQ",
//       title: "Beautiful Nature Walk 4K",
//     },
//   ]);


//   const handleVideoClick = (videoId, index) => {
//     setPlayingVideo(videoId);
//     setPlayingVideoIndex(index);
//   };

//   const handleScrollUp = () => {
//     if (!listRef.current) return;
//     if (listRef.current.scrollTop === 0) {
//       setNewsItems((prev) => {
//         const arr = [...prev];
//         arr.unshift(arr.pop());
//         return arr;
//       });
//       setTimeout(() => {
//         listRef.current.scrollTop = 0;
//       }, 0);
//     } else {
//       listRef.current.scrollBy({ top: -300, behavior: "smooth" });
//     }
//   };

//   const handleScrollDown = () => {
//     if (!listRef.current) return;
//     const { scrollTop, scrollHeight, clientHeight } = listRef.current;
//     if (scrollTop + clientHeight >= scrollHeight) {
//       setNewsItems((prev) => {
//         const arr = [...prev];
//         arr.push(arr.shift());
//         return arr;
//       });
//       setTimeout(() => {
//         listRef.current.scrollTop = scrollHeight - clientHeight;
//       }, 0);
//     } else {
//       listRef.current.scrollBy({ top: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-white relative max-lg:px-4 flex font-poppins flex-col">
//       {/* Header */}
//       <div className="bg-white">
//         {/* Thin Red Line */}
//         <div className="border-t-[3px] border-red-600 w-full mb-4 mt-2" />

//         {/* Heading */}
//         <h2
//           className="text-red-600 font-[500] text-[24px] leading-[100%] uppercase font-poppins -mt-2"
//           style={{ letterSpacing: "-0.03em" }}
//         >
//           HILAL DIGITAL
//         </h2>
//       </div>

//       {/* Video List - align first thumbnail with TrendingHilalPublications */}
//       <div
//         ref={listRef}
//         className="flex-1 overflow-y-auto max-h-screen"
//         style={{ scrollbarWidth: "none" }}
//       >
//         {newsItems.map((item, index) => (
//           <div key={item.id} className="relative border-b my-2 border-gray-200">
//             <div className="relative">
//               {playingVideo === item.videoId && playingVideoIndex === index ? (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&controls=1`}
//                   className="w-full h-40"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               ) : (
//                 <div className="relative cursor-pointer" onClick={() => handleVideoClick(item.videoId, index)}>
//                   <img
//                     src={item.image}
//                     alt="thumbnail"
//                     className="w-full h-36 object-cover transition-opacity duration-200"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="bg-red-600 rounded-lg p-1.5 shadow-md">
//                       <Play className="text-white w-5 h-5 fill-current" />
//                     </div>
//                   </div>
//                   <div className="bg-white py-2">
//                     <p className="text-xs font-semibold line-clamp-4 text-black leading-[1.8]">{item.title}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Scroll Controls */}
//       <div className="flex justify-between mt-2">
//         <button
//           onClick={handleScrollUp}
//           className="bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition"
//         >
//           <ChevronUp className="w-5 h-5" />
//         </button>
//         <button
//           onClick={handleScrollDown}
//           className="bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition"
//         >
//           <ChevronDown className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HilalDigital;


import React, { useState, useRef } from "react";
import { Play, ChevronUp, ChevronDown } from "lucide-react";

const HilalDigitalUrdu = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
    const listRef = useRef(null);

    const [newsItems] = useState([
        {
            id: 1,
            image: "https://i.ytimg.com/vi/jgXALm9Ec0w/maxresdefault.jpg",
            videoId: "jgXALm9Ec0w",
            title: "How to Learn React in 2024",
        },
        {
            id: 2,
            image: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            videoId: "dQw4w9WgXcQ",
            title: "Never Gonna Give You Up - Rick Astley",
        },
        {
            id: 3,
            image: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
            videoId: "9bZkp7q19f0",
            title: "Gangnam Style by PSY",
        },
        {
            id: 4,
            image: "https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
            videoId: "M7lc1UVf-VE",
            title: "YouTube IFrame API Demo",
        },
        {
            id: 5,
            image: "https://i.ytimg.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
            videoId: "LXb3EKWsInQ",
            title: "Beautiful Nature Walk 4K",
        },
    ]);

    const handleVideoClick = (videoId, index) => {
        setPlayingVideo(videoId);
        setPlayingVideoIndex(index);
    };

    const handleScrollUp = () => {
        if (!listRef.current) return;
        listRef.current.scrollBy({ top: -300, behavior: "smooth" });
    };

    const handleScrollDown = () => {
        if (!listRef.current) return;
        listRef.current.scrollBy({ top: 300, behavior: "smooth" });
    };

    return (
        <div className="bg-white relative max-lg:px-4 flex font-poppins flex-col">
            {/* Header */}
            <div className="bg-white">
                <div className="border-t-[3px] border-red-600 w-full mb-4 mt-2" />
                <h2
                    className="text-red-600 font-[500] text-[24px] leading-[100%] uppercase font-poppins -mt-2"
                    style={{ letterSpacing: "-0.03em" }}
                >
                    ہلال ڈیجیٹل
                </h2>
            </div>

            {/* Video List */}
            <div
                ref={listRef}
                className="flex-1 overflow-y-auto max-h-screen"
                style={{ scrollbarWidth: "none" }}
            >
                {newsItems.map((item, index) => (
                    <div key={item.id} className="relative border-b my-2 border-gray-200">
                        <div className="relative">
                            {playingVideo === item.videoId && playingVideoIndex === index ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&controls=1`}
                                    className="w-full h-40"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="relative cursor-pointer"
                                    onClick={() => handleVideoClick(item.videoId, index)}
                                >
                                    <img
                                        src={item.image}
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
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Controls */}
            {/* <div className="flex justify-between mt-2">
        <button
          onClick={handleScrollUp}
          className="bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={handleScrollDown}
          className="bg-red-600 text-white p-2 rounded-full shpadow-md hover:bg-red-700 transition"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div> */}
        </div>
    );
};

export default HilalDigitalUrdu;
