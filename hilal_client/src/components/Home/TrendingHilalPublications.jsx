import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";
import { CommonCard1English } from "../shared/english/CommonCard1English";

const fetchArticlesByCategory = async (category) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/articles/category/${category}/`);
  return res.data.data;
};

const TrendingHilalPublications = () => {
  // Fetch articles from three different categories
  const { data: inFocusArticles, isLoading: inFocusLoading, error: inFocusError } = useQuery({
    queryKey: ["articles", "in-focus"],
    queryFn: () => fetchArticlesByCategory("in-focus"),
  });

  const { data: miscArticles, isLoading: miscLoading, error: miscError } = useQuery({
    queryKey: ["articles", "misc"],
    queryFn: () => fetchArticlesByCategory("misc"),
  });

  const { data: nationalArticles, isLoading: nationalLoading, error: nationalError } = useQuery({
    queryKey: ["articles", "national-international-news"],
    queryFn: () => fetchArticlesByCategory("national-international-news"),
  });

  // Check if any of the queries are still loading
  if (inFocusLoading || miscLoading || nationalLoading) return <Loader />;

  // Check if any of the queries have errors
  if (inFocusError || miscError || nationalError) return <p>Error fetching articles</p>;

  // Shuffle articles from each category randomly
  const shuffledInFocus = [...(inFocusArticles || [])].sort(() => Math.random() - 0.5);
  const shuffledMisc = [...(miscArticles || [])].sort(() => Math.random() - 0.5);
  const shuffledNational = [...(nationalArticles || [])].sort(() => Math.random() - 0.5);

  // Create the grid layout with specific positions
  const gridArticles = [
    // Row 1: Column 1 (in-focus), Column 2 (misc), Column 3 (national)
    shuffledInFocus[0] || null,
    shuffledNational[0] || null,
    shuffledMisc[0] || null,
    // Row 2: Column 1 (in-focus), Column 2 (misc), Column 3 (national)
    shuffledInFocus[1] || null,
    shuffledNational[1] || null,
    shuffledMisc[1] || null,
  ];

  return (
    <div className="py-2 px-4 font-poppins">
      {/* Header */}
      <div className="border-t-[3px] border-red-600">
        <div className="bg-white py-2 mb-2">
          <h2 className="heading-text-primary">TRENDING</h2>
        </div>

        {/* Images Grid */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {gridArticles.map((article, index) => (
            article ? (
              <CommonCard1English key={`${article.id}-${index}`} article={article} />
            ) : (
              <div key={`empty-${index}`} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                <p className="text-gray-500 text-sm">No article available</p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingHilalPublications;