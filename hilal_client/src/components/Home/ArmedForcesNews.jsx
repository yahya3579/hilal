

import React from 'react';
import Books5 from './Books5';

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
    <>
      <div className='px-4 pb-3'>

        <div className="flex max-md:flex-wrap gap-2 py-3 justify-center">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <img
              key={index}
              src="https://www.nbf.org.pk/sites/default/files/book_covers/WhatsApp%20Image%202024-01-25%20at%2011.46.36%20AM.jpeg"
              className="max-lg:w-32 w-full "
              alt={`Book ${index + 1}`}
            />
          ))}
        </div>


        <div className=" border-gray-200 relative  py-6  outline-none">
          {/* Header */}
          <div className="text-center py-1 mb-2 outline-none">
            <span className="bg-red-600 text-white px-8 py-2 font-bold text-sm outline-none">
              Arm Forces News
            </span>
          </div>

          <div className=" pb-2 mt-5 outline-none">
            {/* News Items */}
            <div className="space-y-5 outline-none">
              {newsItems.map((item) => (
                <div key={item.id} className="flex items-start gap-2 hover:bg-gray-50  rounded cursor-pointer outline-none">
                  <img
                    src={item.image}
                    alt={`News ${item.id}`}
                    className="w-16 h-10 object-cover flex-shrink-0  outline-none"
                  />
                  <p className="text-gray-500 text-xs    outline-none font-bold">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Advertisement Banner */}
            <div className="mt-6 relative outline-none">
              <img
                src="https://picsum.photos/552/100?random=6"
                alt="Advertisement"
                className=" h-[100px] object-cover rounded outline-none"
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
      </div>
    </>

  );
};

export default ArmedForcesNews;
