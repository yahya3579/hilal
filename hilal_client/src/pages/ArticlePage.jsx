import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { ExternalLink, Star } from "lucide-react";
import articleProfile from "../assets/articleprofile.png";
import ArticlePageImage from "../assets/ArticlePageImage.png";

export default function ArticlePage() {
  const recentArticles = [
    "Foreigners Who Have Made Pakistan Their Home (Part III)",
    "Foreigners Who Made Pakistan Their Home (Part II)",
    "Foreigners Who Made Pakistan Their Home (Part I)",
    "Is COP Still Fit For Purpose",
    "From The Rubble: The Struggle For Palestinian Survival Amidst Bombardment Of Gaza And Lebanon",
  ];

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
                src={articleProfile || "/placeholder.svg"}
                alt="Jennifer McKay"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content container with fixed width */}
            <div className="w-full max-w-[253px] lg:w-[253px]">
              {/* Author Name */}
              <h2 className="text-[#DF1600] font-extrabold text-[20px] lg:text-[24px] leading-tight text-center whitespace-nowrap mt-2 mb-2 font-poppins">
                Jennifer McKay
              </h2>

              {/* Bio */}
              <p className="text-black mb-4 text-left font-poppins font-medium text-sm leading-[150%] tracking-[-0.03em]">
                The Writer Is Australian Disaster Management And Civil-Military
                Relations Consultant, Based In Islamabad Where She Consults For
                Government And UN Agencies. She Has Also Worked With ERRA And
                NDMA.
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

                <ul className="space-y-3">
                  {recentArticles.map((article, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mt-1 flex-shrink-0">
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </div>
                      <a
                        href="#"
                        className="font-poppins font-light text-sm leading-[150%] tracking-[-0.03em] capitalize underline hover:text-red-600 transition-colors"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area - 75% width on desktop, full width on mobile */}
        <div className="w-full lg:w-3/4 flex flex-col">
          {/* Top header bar */}
          <div className="bg-white relative">
            {/* Icon Buttons - Positioned Top Right */}
            <div className="absolute top-0 right-0 flex items-center">
              {/* Download PDF */}
              <button
                className="h-8 px-2 lg:h-12 lg:px-4 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#DEDEDE" }}
              >
                <span className="text-black font-medium text-[10px] lg:text-sm">
                  DOWNLOAD PDF
                </span>
              </button>

              {/* WhatsApp */}
              <button
                className="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#CBCBCB" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="lg:w-6 lg:h-6"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Twitter */}
              <button
                className="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#B0B0B0" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="lg:w-6 lg:h-6"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Instagram */}
              <button
                className="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#858585" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="lg:w-6 lg:h-6"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            {/* Title & Heading + Date in one block */}
            <div className="relative px-4 lg:px-6 pt-10 lg:pt-6 pb-4">
              {/* Title and Heading */}
              <div className="text-black font-poppins font-light text-[18px] sm:text-[20px] lg:text-[32px] leading-[100%] tracking-[-0.03em] uppercase mb-2">
                HILAL ENGLISH
              </div>

              {/* Heading with Date aligned to bottom right */}
              <div className="relative">
                <h1 className="text-black font-poppins font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[64px] leading-[100%] tracking-[-0.03em] uppercase pr-20 sm:pr-24 lg:pr-0">
                  FUNDING CLIMATE ACTION
                </h1>

                {/* Date positioned at bottom-right corner of the heading */}
                <span className="absolute bottom-0 right-0 text-black font-poppins font-light text-[10px] sm:text-[12px] lg:text-[24px] leading-[100%] tracking-[-0.03em] uppercase z-10">
                  5TH JULY 2025
                </span>
              </div>
            </div>
            {/* Shadow line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
          </div>

          {/* Main content area */}
          <div className="flex-1 px-4 lg:px-6 relative">
            {/* Extended vertical line - full height - hidden on mobile */}
            <div className="absolute left-4 top-8 bottom-0 w-[0.5px] bg-black hidden lg:block" />

            {/* Content with proper spacing */}
            <div className="lg:pl-6 py-6">
              <p className="text-black font-poppins font-medium text-sm sm:text-base leading-relaxed [letter-spacing:-0.03em] capitalize mb-6">
                Since 1947, People From Across The Globe Have Chosen To Make
                Pakistan Their Home, Drawn By Its Rich Culture, Stunning
                Landscapes, And The Warmth Of Its People. Through Resilience,
                Contribution, And Adaptation, They Have Become Integral To The
                Nation's Fabric, Leaving Indelible Marks On Its Communities And
                Industries.
              </p>

              {/* Article Image */}
              <div className="w-full mb-6">
                <img
                  src={ArticlePageImage || "/placeholder.svg"}
                  alt="Article content"
                  className="w-full max-w-[1061.648px] h-auto lg:h-[430px] object-cover rounded opacity-100 rotate-0"
                />
              </div>

              {/* Additional article content */}
              <p className="text-black font-poppins font-medium text-sm sm:text-base leading-relaxed [letter-spacing:-0.03em] capitalize">
                From the birth of Pakistan in 1947 to today, people from many
                countries made the bold choice to settle in Pakistan and, in
                doing so, became integral to the nation's fabric through their
                contributions, resilience, and love for this land. Some just
                came to visit and fell in love with the cultural diversity, the
                extraordinary landscapes, and, most of all, the hospitality and
                generosity of the people. For some, they saw ways to contribute
                to society through education, healthcare, community welfare, and
                work for the environment and wildlife. Some came because they
                married Pakistanis and then saw how they could make meaningful
                contributions through entrepreneurial businesses, increasing
                skills and employment for locals. Everyone has a different story
                of why they came and why they stayed. No matter the reason,
                moving to a new country is challenging, regardless of where you
                go. Millions of people around the world have discovered that,
                after the initial excitement wears off, relocating to a new
                country is not always what they expected. Assimilating into a
                different culture and system is hard. And often foreigners are
                treated with an element of suspicion because of their different
                ways and the countries from which they come. But in time, mostly
                their lives settle into the culture of their adopted land but
                always keeping a piece of their homeland in their heart. After
                Partition, numerous non-Muslim foreigners who were stationed in
                British India moved across to Pakistan. Some were already here,
                posted in cities like Peshawar and Rawalpindi, and chose to
                remain. These included British and European civilians who worked
                in the bureaucracy, and missionaries who had run schools in
                British India. Other early arrivals came directly to Pakistan
                from their home countries and stayed most of their lives. To
                this day, there are foreigners who are choosing Pakistan as
                their home, and their stories are often inspirational. But
                first, it is some of the earlier arrivals that we look at in
                this article and their extraordinary contributions to a new
                nation. Others and more recent arrivals will be covered in part
                two of this story. Amongst those who came when Pakistan was in
                its infancy were some remarkable people, including three
                extraordinary women who stayed for 60 years, and others who left
                an indelible mark on the nation through their commitment to
                education and health, their resilience and courage, and their
                love of the people. Their legacies live on to this day.
              </p>

              {/* Rating Component */}
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
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12"
                      fill="#D9D9D9"
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

                {/* Rectangle for comment */}
                <div className="border-2 border-black w-full h-[80px] sm:h-[111px] bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
