import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { ExternalLink, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import articleProfile from "../assets/articleprofile.png";
import ArticlePageImage from "../assets/ArticlePageImage.png";
import useAuthStore from "../utils/store";
import Loader from "../components/Loader/loader";

const fetchArticle = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/article/${id}`);
  console.log(res.data)
  return res.data;
};

const fetchRecentArticles = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-recent-articles/`);
  return res.data.data;
};

export default function ArticlePage() {
  const { articleId } = useParams();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const userRole = useAuthStore((state) => state.userRole);
  const isAuthorized = useAuthStore((state) => state.isAuthorized);


  const { data: article, isLoading: isArticleLoading, error: articleError } = useQuery({
    queryKey: ["article", articleId],
    queryFn: () => fetchArticle(articleId),
    enabled: !!articleId,
  });

  const { data: recentArticles, isLoading: isRecentArticlesLoading, error: recentArticlesError } = useQuery({
    queryKey: ["recentArticles"],
    queryFn: fetchRecentArticles,
  });

  const handleSubmitComment = async () => {
    if (!rating) {
      alert("Rating is required.");
      return;
    }
    if (!comment.trim()) {
      alert("Comment is required.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/create-comment/`, {
        comment,
        user: article.user, // Replace with the actual user ID
        article: article.id,
        rating,
      });
      setSuccessMessage("Comment and rating submitted successfully!");
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  if (isArticleLoading) return <Loader />;
  if (articleError) return <p>Error fetching article</p>;

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Main layout with sidebar starting from top */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - 25% width on desktop, full width on mobile */}
        <div className="w-full lg:w-1/4 flex flex-col">
          {/* Profile and content section */}
          <div className="py-6 flex-1 flex flex-col items-center px-4 lg:px-0">
            {/* Profile Image */}
            <div className="w-[253px] h-[291px] max-w-full overflow-hidden">
              <img
                src={article.cover_image || "/placeholder.svg"}
                alt="Article Cover"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content container with fixed width */}
            <div className="w-full max-w-[253px] lg:w-[253px]">
              {/* Author Name */}
              <h2 className="text-[#DF1600] font-extrabold text-[20px] lg:text-[24px] leading-tight text-center whitespace-nowrap mt-2 mb-2 font-poppins">
                {article.writer || "Author Name"}
              </h2>

              {/* Bio */}
              <p className="text-black mb-4 text-left font-poppins font-medium text-sm leading-[150%] tracking-[-0.03em]">
                {article.description.split(".")[0] || "Author bio goes here."}
              </p>

              {/* Contact */}
              <div className="flex items-center gap-2 mb-6 border-b-2 border-black pb-2">
                <EnvelopeIcon className="w-6 h-6 text-black" />
                <a
                  href="mailto:hello@website.com"
                  className="text-black text-sm italic hover:text-red-600 transition-colors"
                >
                  hello@website.com
                </a>
              </div>

              {/* Recent Articles */}
              <div>
                <h3 className="text-xl font-extrabold text-black mb-3 uppercase">
                  Recent Articles
                </h3>
                {isRecentArticlesLoading ? (
                  <Loader />
                ) : recentArticlesError ? (
                  <p>Error fetching recent articles</p>
                ) : (
                  <ul className="space-y-3">
                    {recentArticles.slice(0, 7).map((recentArticle) => (
                      <li key={recentArticle.id} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mt-1 flex-shrink-0">
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </div>
                        <Link
                          to={`/article/${recentArticle.id}`}
                          className="font-poppins font-light text-sm leading-[150%] tracking-[-0.03em] capitalize underline hover:text-red-600 transition-colors"
                        >
                          {recentArticle.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area - 75% width on desktop, full width on mobile */}
        <div className="w-full lg:w-3/4 flex flex-col">
          {/* Top header bar */}
          <div className="bg-white relative">
            {/* Title & Heading */}
            <div className="relative px-4 lg:px-6 pt-10 lg:pt-6 pb-4">
              {/* Title and Heading */}
              <div className="text-black font-poppins font-light text-[18px] sm:text-[20px] lg:text-[32px] leading-[100%] tracking-[-0.03em] uppercase mb-2">
                {article.category == "hilal-kids-english" ? "Hilal FOR KIDS - English" : article.category == "hilal-kids-urdu" ? "Hilal FOR KIDS - Urdu" : article.category == "hilal-her" ? "Hilal HER" : article.category == "hilal-urdu" ? "Hilal - Urdu" : "Article Category"}
              </div>

              {/* Heading with Date aligned to bottom right */}
              <div className="relative">
                <h1 className="text-black max-w-[80%] font-poppins font-medium line-clamp-2  text-[24px] sm:text-[28px]  lg:text-[52px] leading-[100%] tracking-[-0.03em] uppercase pr-20 sm:pr-24 lg:pr-0">
                  {article.title || "Article Title"}
                </h1>

                {/* Date positioned at bottom-right corner of the heading */}
                <span className="absolute bottom-0 right-0 text-black font-poppins font-light text-[10px] sm:text-[12px] lg:text-[24px] leading-[100%] tracking-[-0.03em] uppercase z-10">
                  {new Date(article.publish_date).toLocaleDateString("en-GB") || "Publish Date"}
                </span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 px-4 lg:px-6 relative">
            <div className="lg:pl-6 py-6">
              <p className="text-black font-poppins font-medium text-sm sm:text-base leading-relaxed [letter-spacing:-0.03em] capitalize">
                {article.description}
              </p>
              {isAuthorized == true && (
                <div className="mt-8">
                  {/* Rate this article section */}
                  <div className="w-full flex justify-center mb-4">
                    <p className="font-poppins font-medium text-[14px] sm:text-[16px] leading-[150%] tracking-[-0.03em] text-center capitalize text-black">
                      ( Rate This Article )
                    </p>
                  </div>
                  {/* Stars */}
                  <div className="flex justify-center mb-4 gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={idx}
                        onClick={() => setRating(idx + 1)}
                        className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 cursor-pointer ${rating > idx ? "fill-yellow-500" : "fill-gray-300"
                          }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4-6.3-4.6-6.3 4.6 2.4-7.4-6.3-4.6h7.8z" />
                      </svg>
                    ))}
                  </div>
                  {/* Write a comment heading */}
                  <p className="font-poppins font-bold text-[14px] sm:text-[16px] leading-[150%] tracking-[-0.03em] uppercase text-black text-left mb-4">
                    WRITE A COMMENT TO EXPRESS YOUR THOUGHTS
                  </p>
                  {/* Comment input */}
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-black w-full h-[80px] sm:h-[111px] bg-white p-2"
                    placeholder="Write your comment here..."
                  />
                  {/* Submit button */}
                  <button
                    onClick={handleSubmitComment}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                  {/* Success message */}
                  {successMessage && (
                    <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}