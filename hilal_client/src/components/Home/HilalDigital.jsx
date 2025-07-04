import React, { useState, useRef } from "react";
import { Play, Maximize2, ChevronUp, ChevronDown } from "lucide-react";
import Books5 from './Books5';



const HilalDigital = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const listRef = useRef(null);

  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      image: "https://i.ytimg.com/vi/jgXALm9Ec0w/maxresdefault.jpg",
      videoId: "jgXALm9Ec0w",
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      image: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      videoId: "9bZkp7q19f0",
    },
    {
      id: 4,
      image: "https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
      videoId: "M7lc1UVf-VE",
    },
    {
      id: 5,
      image: "https://i.ytimg.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
      videoId: "LXb3EKWsInQ",
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
      videoId: "kJQP7kiw5Fk",
    },
    {
      id: 7,
      image: "https://i.ytimg.com/vi/ZZ5LpwO-An4/maxresdefault.jpg",
      videoId: "ZZ5LpwO-An4",
    },
    {
      id: 8,
      image: "https://i.ytimg.com/vi/HEXWRTEbj1I/maxresdefault.jpg",
      videoId: "HEXWRTEbj1I",
    },
  ]);

  const handleVideoClick = (videoId, index) => {
    setPlayingVideo(videoId);
    setPlayingVideoIndex(index);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const stopVideo = () => {
    setPlayingVideo(null);
    setPlayingVideoIndex(null);
    setIsFullscreen(false);
  };

  const handleScrollUp = () => {
    if (!listRef.current) return;
    if (listRef.current.scrollTop === 0) {
      setNewsItems((prev) => {
        const arr = [...prev];
        arr.unshift(arr.pop());
        return arr;
      });
      setTimeout(() => {
        listRef.current.scrollTop = 0;
      }, 0);
    } else {
      listRef.current.scrollBy({ top: -300, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    if (!listRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollTop + clientHeight >= scrollHeight) {
      setNewsItems((prev) => {
        const arr = [...prev];
        arr.push(arr.shift());
        return arr;
      });
      setTimeout(() => {
        listRef.current.scrollTop = scrollHeight - clientHeight;
      }, 0);
    } else {
      listRef.current.scrollBy({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-md ml-6 bg-white relative h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white pt-6 px-4 relative">
        <div className="h-1 w-full bg-red-600 mt-2 mb-4" />
        <h2
          className="text-red-600 font-[500] text-[24px] leading-[100%] uppercase font-poppins"
          style={{ letterSpacing: "-0.03em" }}
        >
          HILAL DIGITAL
        </h2>
        {/* Absolutely positioned Books5 next to the red line */}
        <Books5 className="absolute left-63 top-8 z-10" />
        {/* Absolutely positioned ArmedForcesNews just below Books5 */}
        
      </div>
      <div>
       

       
      </div>

      {/* Top scroll button (arrow) */}
      <div className="bg-white py-2 px-4 flex justify-center">
        <button
          onClick={handleScrollUp}
          className="bg-gray-800 rounded-full p-1"
        >
          <ChevronUp className="text-white w-4 h-4" />
        </button>
      </div>

      {/* Scrollable news container */}
      <div
        ref={listRef}
        className="flex-1 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {newsItems.map((item, index) => (
          <div key={item.id} className="relative border-b border-gray-200">
            <div className="relative">
              {playingVideo === item.videoId && playingVideoIndex === index ? (
                <div className="relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&controls=1`}
                    className="w-60 h-50"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={handleFullscreen}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={stopVideo}
                    className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleVideoClick(item.videoId, index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-60 h-36 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 rounded-lg p-1.5 shadow-md">
                      <Play className="text-white w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4">
              {item.urduText && (
                <div className="bg-green-600 text-white p-2 rounded mb-2 text-right">
                  <p className="text-sm font-medium">{item.urduText}</p>
                </div>
              )}
              <h3 className="text-gray-800 font-semibold text-sm leading-tight">
                {item.title}
              </h3>
            </div>

            {index === 1 && (
              <>
                <div className="absolute top-2 left-2 flex space-x-1">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                </div>
                <div className="absolute top-2 right-2 flex space-x-1">
                  <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Bottom scroll button */}
      <div className="bg-white py-2 px-4 flex justify-center">
        <button
          onClick={handleScrollDown}
          className="bg-gray-800 rounded-full p-1"
        >
          <ChevronDown className="text-white w-4 h-4" />
        </button>
      </div>

      {/* Fullscreen video overlay */}
      {isFullscreen && playingVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&controls=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={handleFullscreen}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HilalDigital;
