import React, { useState, useEffect } from "react";
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

// Function to get proper category display name
const getCategoryDisplayName = (category) => {
  const categoryMap = {
    // Hilal English
    "trending-english-1": "Trending English",
    "trending-english-2": "Trending English",
    "in-focus": "In Focus",
    "war-on-terror": "War on Terror",
    "special-reports": "Special Reports",
    "national-international-news": "National International News",
    "armed-forces-news": "Armed Forces News",
    "misc": "Misc",

    // Hilal Urdu
    "in-focus-urdu": "ان فوکس",
    "trending-urdu": "ٹرینڈنگ اردو",
    "national-international-news-urdu": "قومی و بین الاقوامی خبریں",
    "armed-forces-news-urdu": "مسلح افواج کی خبریں",

    // Hilal Urdu Kids
    "in-focus-urdu-kids": "ان فوکس - بچوں کے لیے",
    "trending-urdu-kids": "ٹرینڈنگ - بچوں کے لیے",
    "national-international-news-urdu-kids": "قومی و بین الاقوامی خبریں - بچوں کے لیے",

    // Hilal Her
    "in-focus-her": "In Focus - Her",
    "trending1-her": "Trending - Her",
    "hilal-her": "Hilal Her",

    // Hilal Kids
    "hilal-kids-english": "Hilal for Kids - English",
    "in-focus-kids": "In Focus - Kids",
    "trending-kids": "Trending - Kids",

    // Digital
    "digital": "Digital"
  };

  return categoryMap[category] || category;
};

export default function ArticlePage() {
  const userId = useAuthStore((state) => state.userId);
  const { articleId } = useParams();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [isUrdu, setIsUrdu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userRole = useAuthStore((state) => state.userRole);
  const isAuthorized = useAuthStore((state) => state.isAuthorized);


  const { data: article, isLoading: isArticleLoading, error: articleError } = useQuery({
    queryKey: ["article", articleId],
    queryFn: () => fetchArticle(articleId),
    enabled: !!articleId,
  });
  console.log(article)
  const { data: recentArticles, isLoading: isRecentArticlesLoading, error: recentArticlesError } = useQuery({
    queryKey: ["recentArticles"],
    queryFn: fetchRecentArticles,
  });

  // Update isUrdu state when article data changes
  useEffect(() => {
    if (article && article.category) {
      setIsUrdu(article.category.toLowerCase().includes('urdu'));
    }
  }, [article]);

  const handleSubmitComment = async () => {
    if (!rating) {
      alert("Rating is required.");
      return;
    }
    if (!comment.trim()) {
      alert("Comment is required.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/create-comment/`, {
        comment,
        user: userId, // Replace with the actual user ID
        article: article.id,
        rating,
      });
      setSuccessMessage("Comment and rating submitted successfully!");
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Error submitting comment:", err);
      alert("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isArticleLoading) return <Loader />;
  if (articleError) return <p>Error fetching article</p>;

  return (
    <div className={`w-full min-h-screen bg-white ${isUrdu ? 'rtl' : 'ltr'}`}>
      {/* Main layout with sidebar starting from top */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - 25% width on desktop, full width on mobile */}
        <div className="w-full lg:w-1/4 flex flex-col">
          {/* Profile and content section */}
          <div className="py-4 lg:py-6 flex-1 flex flex-col items-center px-4 lg:px-0">
            {/* Profile Image */}
            <div className="w-full max-w-[280px] h-[200px] sm:h-[250px] lg:h-[291px] overflow-hidden rounded-lg">
              <img
                src={article.cover_image || "/placeholder.svg"}
                alt="Article Cover"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content container with responsive width */}
            <div className="w-full max-w-[280px] lg:w-[280px] mt-4 lg:mt-0">
              {/* Author Name */}
              <h2 className="text-[#DF1600] font-extrabold text-[18px] sm:text-[20px] lg:text-[24px] leading-tight text-center mt-2 mb-2 font-poppins break-words px-2">
                {article.writer || "Author Name"}
              </h2>

              {/* Bio */}
              <p className="text-black mb-4 text-center lg:text-left font-poppins font-medium text-xs sm:text-sm leading-[150%] tracking-[-0.03em] px-2">
                {article.description.split(".")[0] || "Author bio goes here."}
              </p>

              {/* Contact */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 lg:mb-6 border-b-2 border-black pb-2 px-2">
                <EnvelopeIcon className="w-5 h-5 lg:w-6 lg:h-6 text-black flex-shrink-0" />
                <a
                  href="mailto:hello@website.com"
                  className="text-black text-xs sm:text-sm italic hover:text-red-600 transition-colors text-center lg:text-left"
                >
                  hello@website.com
                </a>
              </div>

              {/* Recent Articles */}
              <div className="px-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-black mb-3 uppercase text-center lg:text-left">
                  Recent Articles
                </h3>
                {isRecentArticlesLoading ? (
                  <Loader />
                ) : recentArticlesError ? (
                  <p>Error fetching recent articles</p>
                ) : (
                  <ul className="space-y-2 lg:space-y-3">
                    {recentArticles.slice(0, 5).map((recentArticle) => (
                      <li key={recentArticle.id} className="flex items-start gap-2">
                        <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black flex items-center justify-center mt-1 flex-shrink-0">
                          <ExternalLink className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white" />
                        </div>
                        <Link
                          to={`/article/${recentArticle.id}`}
                          className="font-poppins font-light text-xs sm:text-sm leading-[150%] tracking-[-0.03em] capitalize underline hover:text-red-600 transition-colors text-center lg:text-left"
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
            <div className="relative px-4 lg:px-6 pt-6 lg:pt-6 pb-4">
              {/* Title and Heading */}
              <div className={`font-poppins font-light text-[16px] sm:text-[18px] lg:text-[32px] leading-[120%] tracking-[-0.03em] uppercase mb-3 lg:mb-2 text-center lg:text-left ${isUrdu ? 'lg:text-right' : ''}`}>
                {getCategoryDisplayName(article.category)}
              </div>

              {/* Heading with Date aligned to bottom right */}
              <div className="relative">
                <h1 className={`text-black w-full lg:max-w-[80%] font-poppins font-medium line-clamp-3 lg:line-clamp-2 text-[20px] sm:text-[24px] lg:text-[52px] leading-[120%] lg:leading-[100%] tracking-[-0.03em] uppercase pr-16 sm:pr-20 lg:pr-0 text-center lg:text-left ${isUrdu ? 'lg:text-right' : ''}`}>
                  {article.title || "Article Title"}
                </h1>

                {/* Date positioned at bottom-right corner of the heading */}
                <span className="absolute bottom-0 right-0 text-black font-poppins font-light text-[8px] sm:text-[10px] lg:text-[24px] leading-[100%] tracking-[-0.03em] uppercase z-10">
                  {new Date(article.publish_date).toLocaleDateString("en-GB") || "Publish Date"}
                </span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 px-4 lg:px-6 relative">
            <div className="lg:pl-6 py-4 lg:py-6">
              <p className={`text-black font-poppins font-medium text-sm sm:text-base leading-relaxed [letter-spacing:-0.03em] capitalize text-center lg:text-left ${isUrdu ? 'lg:text-right' : ''}`}>
                {article.description}
              </p>
              {isAuthorized == true && (
                <div className="mt-6 lg:mt-8">
                  {/* Rate this article section */}
                  <div className="w-full flex justify-center mb-4">
                    <p className="font-poppins font-medium text-[12px] sm:text-[14px] lg:text-[16px] leading-[150%] tracking-[-0.03em] text-center capitalize text-black">
                      ( Rate This Article )
                    </p>
                  </div>
                  {/* Stars */}
                  <div className="flex justify-center mb-4 gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={idx}
                        onClick={() => !isSubmitting && setRating(idx + 1)}
                        className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-12 lg:h-12 transition-all duration-200 ${isSubmitting
                          ? 'cursor-not-allowed opacity-50'
                          : 'cursor-pointer hover:scale-110'
                          } ${rating > idx ? "fill-yellow-500" : "fill-gray-300"}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4-6.3-4.6-6.3 4.6 2.4-7.4-6.3-4.6h7.8z" />
                      </svg>
                    ))}
                  </div>
                  {/* Write a comment heading */}
                  <p className="font-poppins font-bold text-[12px] sm:text-[14px] lg:text-[16px] leading-[150%] tracking-[-0.03em] uppercase text-black text-center lg:text-left mb-4">
                    WRITE A COMMENT TO EXPRESS YOUR THOUGHTS
                  </p>
                  {/* Comment input */}
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={isSubmitting}
                    className={`border w-full h-[60px] sm:h-[80px] lg:h-[111px] p-2 text-sm transition-all duration-200 ${isSubmitting
                      ? 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'border-black bg-white hover:border-red-500 focus:border-red-500 focus:outline-none'
                      }`}
                    placeholder={isSubmitting ? "Submitting comment..." : "Write your comment here..."}
                  />
                  {/* Submit button */}
                  <button
                    onClick={handleSubmitComment}
                    disabled={isSubmitting}
                    className={`mt-4 px-4 py-2 rounded text-sm w-full sm:w-auto transition-all duration-200 ${isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700 hover:scale-105 active:scale-95'
                      }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>
                  {/* Success message */}
                  {successMessage && (
                    <p className="mt-4 text-green-600 font-medium text-center lg:text-left">{successMessage}</p>
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