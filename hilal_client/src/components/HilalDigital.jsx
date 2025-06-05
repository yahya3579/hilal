// import { Play } from "lucide-react"
// import { useState, useEffect } from "react"

// const videoData = [
//     {
//         id: 1,
//         title: "3:30Now playingYalghar Hai – Pakistan’s Victory Anthem | ISPR",
//         youtubeId: "dQw4w9WgXcQ",
//     },
//     {
//         id: 2,
//         title: "Meeting with Defense Officials",
//         youtubeId: "iik25wqIuFo",
//     },
//     {
//         id: 3,
//         title: "Military Cooperation Summit 2025",
//         youtubeId: "ScMzIvxBSi4",
//     },
//     {
//         id: 4,
//         title: "Strategic Talks on Regional Security",
//         youtubeId: "M7lc1UVf-VE",
//     },
// ]

// export default function HilalDigital() {
//     const [playing, setPlaying] = useState(null)

//     // Prefetch thumbnails
//     useEffect(() => {
//         videoData.forEach((video) => {
//             const img = new Image()
//             img.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`

//         })

//     }, [])

//     return (
//         <>
//             {/* <div className="h-[1px] bg-gradient-to-r  from-red-600 to-black " style={{ backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(to right, #dc2626 20%, black 20%)' }}></div> */}

//             <header className="bg-white ">
//                 <div className="max-w-7xl mx-auto px-4 pt-4">
//                     <h1 className="text-2xl font-medium py-1 pb-4 text-[#F65050] oswald">Hilal Digital</h1>
//                     <div className="h-[1px] bg-gradient-to-r from-red-600 w-[93%] to-black " style={{ backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(to right, #dc2626 20%, black 20%)' }}></div>
//                 </div>
//             </header>


//             <div className="max-w-7xl mx-auto px-4 pt-6">
//                 <div style={{ scrollbarWidth: "none" }} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
//                     {videoData.map((item) => (
//                         <div
//                             key={item.id}
//                             className="bg-white rounded-2xl shadow-[0_4px_6px_0_#00000040] overflow-hidden flex-shrink-0 w-[250px]"
//                         >
//                             <div className="relative w-[250px] h-[183px]">
//                                 {playing === item.id ? (
//                                     <iframe
//                                         className="w-full h-full"
//                                         src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
//                                         title={item.title}
//                                         frameBorder="0"
//                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                         allowFullScreen
//                                     />
//                                 ) : (
//                                     <>
//                                         <img
//                                             src={`https://img.youtube.com/vi/${item.youtubeId}/0.jpg`}
//                                             alt={item.title}
//                                             className="w-full h-full object-cover"
//                                             onError={(e) => {
//                                                 console.log("Thumbnail failed to load:", e.currentTarget.src);
//                                                 e.currentTarget.src = "/fallback-thumbnail.jpg";
//                                             }}
//                                         />
//                                         <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
//                                             <div
//                                                 className="bg-red-600 rounded-full p-3 hover:bg-red-700 cursor-pointer"
//                                                 onClick={() => setPlaying(item.id)}
//                                             >
//                                                 <Play className="w-6 h-6 text-white fill-current" />
//                                             </div>
//                                         </div>
//                                     </>
//                                 )}
//                             </div>
//                             <div className="p-3">
//                                 <h3 className="text-[16px] oswald font-light text-black line-clamp-2">
//                                     {item.title}
//                                 </h3>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </>
//     )
// }

import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const videoData = [
    {
        id: 1,
        title: "Yalghar Hai – Pakistan’s Victory Anthem | ISPR",
        youtubeId: "r5NakehI994", // from your example video link
    },
    {
        id: 2,
        title: "PAF Song - Tum hi sai aai Mujahido by Alamgir",
        youtubeId: "tZKVWtvgtoc",
    },
    {
        id: 3,
        title: "Haroon - Dil Say Pakistan (feat. Muniba Mazari, Javed Bashir, Farhan Bogra)",
        youtubeId: "IuGxQgF-cNI",
    },
    {
        id: 4,
        title: "Har Ghari Tayyar Kamran | Defence and Martyrs’ Day Song - 2020",
        youtubeId: "z7U8C0_MYUY",
    },
];

export default function HilalDigital() {
    const [playing, setPlaying] = useState(null);

    useEffect(() => {
        videoData.forEach((video) => {
            const img = new Image();
            img.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
        });
    }, []);

    return (
        <>
            <header className="bg-white ">
                <div className="max-w-7xl mx-auto px-4 pt-4">
                    <h1 className="text-2xl font-medium py-1 pb-4 text-[#F65050] oswald">
                        Hilal Digital
                    </h1>
                    <div
                        className="h-[1px] bg-gradient-to-r from-red-600 w-[93%] to-black "
                        style={{
                            backgroundSize: "100% 100%",
                            backgroundImage: "linear-gradient(to right, #dc2626 20%, black 20%)",
                        }}
                    ></div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 pt-6">
                <div
                    style={{ scrollbarWidth: "none" }}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
                >
                    {videoData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-[0_4px_6px_0_#00000040] overflow-hidden flex-shrink-0 w-[250px]"
                        >
                            <div className="relative w-[250px] h-[183px]">
                                {playing === item.id ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                                        title={item.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                console.log("Thumbnail failed to load:", e.currentTarget.src);
                                                e.currentTarget.src = "/fallback-thumbnail.jpg";
                                            }}
                                        />
                                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                                            <button
                                                className="bg-red-600 rounded-full p-3 hover:bg-red-700 cursor-pointer"
                                                onClick={() => setPlaying(item.id)}
                                                aria-label={`Play ${item.title}`}
                                            >
                                                <Play className="w-6 h-6 text-white fill-current" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="p-3">
                                <h3 className="text-[16px] oswald font-light text-black line-clamp-2">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
