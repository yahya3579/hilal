import React from 'react';

const TrendingHilalPublications = () => {
  const articles = [
    {
      id: 1,
      category: "IN-FOCUS",
      categoryColor: "bg-green-800",
      title: "What Have We Given to Pakistan Strengthening the Economy through Entrepreneurship and Creative Endeavours...",
      author: "Amir Jahangir",
      date: "April 2025",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-green-600 to-green-700"
    },
    {
      id: 2,
      category: "NATIONAL & INTL ISSUES",
      categoryColor: "bg-gray-800",
      title: "Deporting the Afghan Refugees: Challenges and Policy Options, Pakistan has shouldered ...",
      author: "Ambassador Naghmana (R)",
      date: "April 2025",
      bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-amber-200 to-amber-300"
    },
    {
      id: 3,
      category: "MISC",
      categoryColor: "bg-gray-800",
      title: "History's Darkest Tool: Hunger and Starvation as Weapons of War, From the Roman sieges to modern conflicts ...",
      author: "Vice Admiral Taj (R)",
      date: "April 2025",
      bgImage: "https://images.unsplash.com/photo-1586892478025-2b5472316f22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-gray-500 to-gray-600"
    },
    {
      id: 4,
      category: "IN-FOCUS",
      categoryColor: "bg-green-800",
      title: "The Long Road to a Knowledge Economy, Pakistan's greatest investment isn't in ...",
      author: "Amir Zia",
      date: "April 2025",
      bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-green-600 to-green-700"
    },
    {
      id: 5,
      category: "NATIONAL & INTL ISSUES",
      categoryColor: "bg-gray-800",
      title: "Scaling Up Rainwater Harvesting in Pakistan: A Need of the Hour, Pakistan's escalating water...",
      author: "Syed Zaheer Gardezi",
      date: "April 2025",
      bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "from-gray-200 to-gray-300"
    },
    {
        id: 6,
        category: "MISC",
        categoryColor: "bg-gray-800",
        title: "Foreigners Who Have Made Pakistan Their Home (Part III), While many Pakistanis dream ...",
        author: "Jennifer McKay",
        date: "April 2025",
        bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

        bgColor: "from-gray-500 to-gray-600"
      }
      
  ];

  return (
    <div className="w-[700px] ml-5 pt-6">
      {/* Header */}
      <div className="h-1 w-full bg-red-600 mt-2 mb-4" />
      <div className="bg-white mb-6">
        <h2
          className="text-red-600 font-[500] text-[24px] leading-[100%] uppercase font-poppins"
          style={{ letterSpacing: '-0.03em' }}
        >
          TRENDING - HILAL PUBLICATIONS
        </h2>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            {/* Image Section */}
            <div 
              className={`h-40 relative overflow-hidden`}
              style={{ 
                backgroundImage: `url(${article.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                {article.category}
              </div>
            </div>
            {/* Content Section */}
            <div className="p-4">
              {/* Author and Date */}
              <div className="text-gray-400 text-xs mb-2">
                <span className="font-medium">{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
              {/* Title */}
              <h3 className="text-gray-800 font-bold text-sm leading-tight">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingHilalPublications;