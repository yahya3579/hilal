import articleProfile from "../assets/articleprofile.png";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Mail, ExternalLink } from "lucide-react";

export default function ArticlePage() {
  const recentArticles = [
    "Foreigners Who Have Made Pakistan Their Home (Part III)",
    "Foreigners Who Made Pakistan Their Home (Part II)",
    "Foreigners Who Made Pakistan Their Home (Part I)",
    "Is COP Still Fit For Purpose",
    "From The Rubble: The Struggle For Palestinian Survival Amidst Bombardment Of Gaza And Lebanon",
  ];

  return (
    <div className="w-[253px] bg-white min-h-screen ml-9 relative">
      {/* Profile Image */}
      <div className="relative w-[253px] h-[291px] mx-auto mt-3 overflow-hidden">
        <img
          src={articleProfile || "/placeholder.svg"}
          alt="Jennifer McKay"
          className="w-full h-full object-cover opacity-100 rotate-0"
        />
      </div>

      {/* Content */}
      <div className="p-1">
        {/* Author Name */}
        <h1 className="text-[#DF1600] mt-1 font-black text-[30px] leading-tight mb-1 font-poppins whitespace-nowrap">
          <strong>Jennifer McKay</strong>
        </h1>

        {/* Bio */}
        <p className="text-black mb-2 text-left font-poppins font-medium text-base leading-[150%] tracking-[-0.03em] capitalize">
          The writer is Australian Disaster Management and Civil-Military
          Relations Consultant, based in Islamabad where she consults for
          Government and UN agencies. She has also worked with ERRA and NDMA.
        </p>

        {/* Contact */}
        <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-4">
          <EnvelopeIcon className="w-5 h-5 text-black" />
          <a
            href="mailto:hello@website.com"
            className="text-black italic text-base hover:text-red-600 transition-colors"
          >
            hello@website.com
          </a>
        </div>

{/* Recent Articles */}
<div>
<h2 className="text-xl font-extrabold text-black mb-3 uppercase">
  Recent Articles
</h2>

  <ul className="space-y-3">
    {recentArticles.map((article, index) => (
      <li key={index} className="flex items-start gap-2">
        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mt-1 flex-shrink-0">
          <ExternalLink className="w-3.5 h-3.5 text-white" />
        </div>
        <a
          href="#"
          className="text-sm text-gray-700 hover:text-red-600 transition-colors leading-snug underline"
        >
          {article}
        </a>
      </li>
    ))}
  </ul>
</div>



        
      </div>
    </div>
  );
}
