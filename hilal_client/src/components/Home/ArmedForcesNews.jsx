import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const fetchArticlesByCategory = async (category) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}`);
  return res.data.data;
};

const ArmedForcesNews = () => {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['articles', 'armed-forces-news'],
    queryFn: () => fetchArticlesByCategory('armed-forces-news'),
  });

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>Error fetching articles</p>;

  return (
    <>
      <div className='px-4 pb-3'>

        <div className="flex max-md:flex-wrap gap-2 py-3 justify-center">
          {articles.slice(0, 4).map((article, index) => (
            <Link to={`/article/${article.id}`}>
              <img
                key={index}
                src={article.cover_image}

                alt={`Book ${index + 1}`}
                className="w-20 h-13 object-cover flex-shrink-0 "
              />
            </Link>
          ))}
        </div>


        <div className=" border-gray-200 relative  py-6  outline-none">
          {/* Header */}
          <div className="text-center py-1 mb-2 outline-none">
            <span className="bg-red-600 text-white px-8 py-2 font-bold text-sm outline-none">
              Armed Forces News
            </span>
          </div>

          <div className=" pb-2 mt-5 outline-none">
            {/* News Items */}
            <div className="space-y-5 outline-none">

              {articles.map((article) => (
                <Link to={`/article/${article.id}`} key={article.id} className='flex items-start gap-2 hover:bg-gray-50  rounded cursor-pointer outline-none'>
                  <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-16 h-10 object-cover flex-shrink-0  outline-none"
                  />
                  <p className="text-gray-500 text-xs    outline-none font-bold">
                    {article.title}
                  </p>

                </Link>
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
