


// import React from "react";

// const HilalArchives = () => {
//   const archiveData = [
//     {
//       id: 1,
//       title: "Hilal Urdu July 2025",
//       date: "2025-07-04",
//       cover:
//         "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
//     },
//     {
//       id: 2,
//       title: "Hilal Urdu June 2025",
//       date: "2025-06-04",
//       cover:
//         "https://images.unsplash.com/photo-1568721997944-b0ad0b70f5f2?w=300&h=400&fit=crop",
//     },
//     {
//       id: 3,
//       title: "Hilal Urdu May 2025",
//       date: "2025-05-01",
//       cover:
//         "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=300&h=400&fit=crop",
//     },
//     {
//       id: 4,
//       title: "Hilal Urdu April 2025",
//       date: "2025-04-07",
//       cover:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
//     },
//     {
//       id: 5,
//       title: "Hilal Urdu February 2025",
//       date: "2025-02-04",
//       cover:
//         "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&h=400&fit=crop",
//     },
//     {
//       id: 6,
//       title: "Hilal Urdu March 2025",
//       date: "2025-03-05",
//       cover:
//         "https://images.unsplash.com/photo-1570821268926-82b0c6d1d166?w=300&h=400&fit=crop",
//     },
//     {
//       id: 7,
//       title: "Hilal Urdu February 2025",
//       date: "2025-02-04",
//       cover:
//         "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=400&fit=crop",
//     },
//     {
//       id: 8,
//       title: "Hilal Urdu January 2025",
//       date: "2025-01-07",
//       cover:
//         "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=300&h=400&fit=crop",
//     },
//   ];

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Header */}
//       <div className="px-3 sm:px-6 pt-3 sm:pt-4">
//         <h1 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#DF1600] font-[Poppins] mt-1 sm:mt-2">
//           HILAL ARCHIVES
//         </h1>
//       </div>

//       {/* Grid + Red Line */}
//       <div className="px-3 sm:px-6 py-3 sm:py-4">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
//           {/* Red Line */}
//           <div className="col-span-full border-t-[3px] border-[#DF1600] mb-1 sm:mb-2" />

//           {/* Archive Items */}
//           {archiveData.map((issue) => (
//             <div
//               key={issue.id}
//               className="border border-gray-200 shadow-sm bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
//             >
//               <div className="relative">
//                 <img
//                   src={issue.cover}
//                   alt={issue.title}
//                   className="w-full aspect-[3/4] object-cover"
//                 />
//               </div>
//               <div className="p-1.5 sm:p-2">
//                 <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
//                   {issue.title}
//                 </h3>
//                 <p className="text-xs text-gray-500 text-center mt-0.5">
//                   ({issue.date})
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HilalArchives;




import React from "react";

const HilalArchives = () => {
  const archiveData = [
    {
      id: 1,
      title: "Hilal Urdu July 2025",
      date: "2025-07-04",
      cover:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Hilal Urdu June 2025",
      date: "2025-06-04",
      cover:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Hilal Urdu May 2025",
      date: "2025-05-01",
      cover:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Hilal Urdu April 2025",
      date: "2025-04-07",
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Hilal Urdu February 2025",
      date: "2025-02-04",
      cover:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Hilal Urdu March 2025",
      date: "2025-03-05",
      cover:
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop",
    },
    {
      id: 7,
      title: "Hilal Urdu February 2025",
      date: "2025-02-04",
      cover:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
    },
    {
      id: 8,
      title: "Hilal Urdu January 2025",
      date: "2025-01-07",
      cover:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-3 sm:px-6 pt-3 sm:pt-4">
        <h1 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#DF1600] font-[Poppins] mt-1 sm:mt-2">
          HILAL ARCHIVES
        </h1>
      </div>

      {/* Grid + Red Line */}
      <div className="px-3 sm:px-6 py-3 sm:py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {/* Red Line */}
          <div className="col-span-full border-t-[3px] border-[#DF1600] mb-1 sm:mb-2" />

          {/* Archive Items */}
          {archiveData.map((issue) => (
            <div
              key={issue.id}
              className="border border-gray-200 shadow-sm bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={issue.cover}
                  alt={issue.title}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="p-1.5 sm:p-2">
                <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
                  {issue.title}
                </h3>
                <p className="text-xs text-gray-500 text-center mt-0.5">
                  ({issue.date})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HilalArchives;