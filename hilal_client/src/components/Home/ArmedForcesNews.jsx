

import React from 'react';

const ArmedForcesNews = () => {
  const newsItems = [
    {
      id: 1,
      image: 'https://picsum.photos/80/60?random=1',
      title: 'Chief of Army Staff (COAS), General Syed Asim Munir, NI (M), chaired the'
    },
    {
      id: 2,
      image: 'https://picsum.photos/80/60?random=2',
      title: 'On February 5, 2025, Chief of the Army Staff (COAS), General Syed Asim'
    },
    {
      id: 3,
      image: 'https://picsum.photos/80/60?random=3',
      title: 'General Syed Asim Munir, NI (M), Chief of Army Staff, visited Wana in So'
    },
    {
      id: 4,
      image: 'https://picsum.photos/80/60?random=4',
      title: 'A high-level delegation from the United States, led by Mr. Eric Meyer, S'
    },
    {
      id: 5,
      image: 'https://picsum.photos/80/60?random=5',
      title: 'On night 6/7 April 2025, an intelligence based operation was conducted'
    }
  ];

  return (
    <div className="w-[520px]  border-gray-200 relative left-3 mt-25 outline-none">
      {/* Header */}
      <div className="text-center py-1 mb-2 outline-none">
        <span className="bg-red-600 text-white px-8 py-2 font-bold text-sm outline-none">
          Arm Forces News
        </span>
      </div>

      <div className="px-2 pb-2 outline-none">
        {/* News Items */}
        <div className="space-y-2 outline-none">
          {newsItems.map((item) => (
            <div key={item.id} className="flex items-start gap-2 hover:bg-gray-50 p-1 rounded cursor-pointer outline-none">
              <img
                src={item.image}
                alt={`News ${item.id}`}
                className="w-12 h-10 object-cover flex-shrink-0  outline-none"
              />
              <p className="text-gray-500 text-xs    outline-none font-bold">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Advertisement Banner */}
        <div className="mt-3 relative outline-none">
          <img
            src="https://picsum.photos/552/100?random=6"
            alt="Advertisement"
            className="w-[552px] h-[100px] object-cover rounded outline-none"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded outline-none">
            <div className="text-white text-center outline-none">
              <div className="text-xl font-bold outline-none">Ad space</div>
              <div className="text-sm outline-none">552*100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArmedForcesNews;
