// import React from "react";

// // Hilal Magazine Team Images
// import team1 from "../assets/Our Contributors Images/Hilal magzine team/1.png";
// import team2 from "../assets/Our Contributors Images/Hilal magzine team/2.png";
// import team3 from "../assets/Our Contributors Images/Hilal magzine team/3.png";
// import team4 from "../assets/Our Contributors Images/Hilal magzine team/4.png";

// // Hilal Urdu Images
// import urdu1 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-1.png";
// import urdu2 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-2.png";
// import urdu3 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-3.png";
// import urdu4 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-4.png";
// import urdu5 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-5.png";
// import urdu6 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name.png";

// // Hilal English Images
// import english1 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-1.png";
// import english2 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-2.png";
// import english3 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-3.png";
// import english4 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-4.png";
// import english5 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name.png";

// const OurContributors = () => {
//   return (
//     <div className="bg-white min-h-screen px-4 sm:px-6 py-6 sm:py-8">
//       {/* HILAL MAGAZINE TEAM Section */}
//       <div className="mb-8">
//         <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
//           HILAL MAGAZINE TEAM
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
//           {/* Lt Gen Ahmed Sharif Chaudhry, HI (M) */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={team1}
//               alt="Lt Gen Ahmed Sharif Chaudhry, HI (M)"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Lt Gen Ahmed Sharif Chaudhry, HI (M)
//             </p>
//           </div>

//           {/* Rashid Minhas */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={team2}
//               alt="Rashid Minhas"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Rashid Minhas
//             </p>
//           </div>

//           {/* Syed Umar Waqar Ahmed */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={team3}
//               alt="Syed Umar Waqar Ahmed"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Syed Umar Waqar Ahmed
//             </p>
//           </div>

//           {/* Uroosa Saeed Iqbal */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={team4}
//               alt="Uroosa Saeed Iqbal"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Uroosa Saeed Iqbal
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* HILAL URDU Section */}
//       <div className="mb-8">
//         <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
//           HILAL URDU
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
//           {/* Dr. Yousuf Khushk */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={urdu1}
//               alt="Dr. Yousuf Khushk"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p
//               className="text-center text-xs sm:text-sm font-poppins text-gray-700"
//               dir="rtl"
//             >
//               ڈاکٹر یوسف خوشک
//             </p>
//           </div>

//           {/* Shahid Jabari */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={urdu2}
//               alt="Shahid Jabari"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p
//               className="text-center text-xs sm:text-sm font-poppins text-gray-700"
//               dir="rtl"
//             >
//               شہید جابری
//             </p>
//           </div>

//           {/* Aashi Khalil */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={urdu3}
//               alt="Aashi Khalil"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p
//               className="text-center text-xs sm:text-sm font-poppins text-gray-700"
//               dir="rtl"
//             >
//               آشی خلیل
//             </p>
//           </div>

//           {/* Sultan Ahmad */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={urdu4}
//               alt="Sultan Ahmad"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p
//               className="text-center text-xs sm:text-sm font-poppins text-gray-700"
//               dir="rtl"
//             >
//               سلطان احمد
//             </p>
//           </div>

//           {/* Sajjad Ali */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={urdu5}
//               alt="Sajjad Ali"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p
//               className="text-center text-xs sm:text-sm font-poppins text-gray-700"
//               dir="rtl"
//             >
//               سجاد علی
//             </p>
//           </div>

//           {/* Riyaz Khalil */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={urdu6}
//               alt="Riyaz Khalil"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p
//               className="text-center text-xs sm:text-sm font-poppins text-gray-700"
//               dir="rtl"
//             >
//               ریاض خلیل
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* HILAL ENGLISH Section */}
//       <div className="mb-8">
//         <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
//           HILAL ENGLISH
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
//           {/* English Contributor 1 */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={english1}
//               alt="English Contributor 1"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               John Smith
//             </p>
//           </div>

//           {/* English Contributor 2 */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={english2}
//               alt="English Contributor 2"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Sarah Johnson
//             </p>
//           </div>

//           {/* English Contributor 3 */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={english3}
//               alt="English Contributor 3"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Michael Brown
//             </p>
//           </div>

//           {/* English Contributor 4 */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={english4}
//               alt="English Contributor 4"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Emily Davis
//             </p>
//           </div>

//           {/* English Contributor 5 */}
//           <div className="border border-gray-300 p-2 sm:p-3">
//             <img
//               src={english5}
//               alt="English Contributor 5"
//               className="w-[304px] h-[318px] object-cover mb-2 mx-auto"
//             />
//             <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
//               Robert Wilson
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Our Contributors Sections */}

//       {/* Red Line */}
//       <div className="w-full h-0 border-t-[2px] sm:border-t-[3px] border-[#DF1600] mb-2" />

//       {/* Our Contributors Title */}
//       <h1 className="text-[#DF1600] font-medium text-[48px] leading-[100%] tracking-[-0.03em] uppercase font-poppins text-center w-[459px] h-[72px] mx-auto mb-4 sm:mb-6">
//         OUR CONTRIBUTORS
//       </h1>

//       {/* HILAL ENGLISH Submission Guidelines */}
//       <div className="mb-8">
//         <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
//           HILAL ENGLISH
//         </h2>

//         <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] mb-4 leading-relaxed">
//           PROSPECTIVE WRITERS ARE INVITED TO SUBMIT THEIR MANUSCRIPTS TO THE
//           FOLLOWING EMAIL ADDRESSES:
//         </p>

//         {/* Updated Email Lines */}
//         <div className="mb-6 space-y-2">
//           <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed">
//             <span className="font-bold">HILAL ENGLISH:</span>{" "}
//             <span className="underline">HILAL.ENGLISH@GMAIL.COM</span>
//           </p>
//           <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed">
//             <span className="font-bold">HILAL URDU:</span>{" "}
//             <span className="underline">HILAL.URDU@GMAIL.COM</span>
//           </p>
//           <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed">
//             <span className="font-bold">HILAL FOR HER:</span>{" "}
//             <span className="underline">HILAL.FORHER@GMAIL.COM</span>
//           </p>
//           <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed">
//             <span className="font-bold">HILAL FOR KIDS:</span>{" "}
//             <span className="underline">HILAL.FORKIDS@GMAIL.COM</span>
//           </p>
//         </div>

//         {/* Submission Guidelines Heading (Black & Bold) */}
//         <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
//           SUBMISSION REQUIREMENTS AND GUIDELINES:
//         </h3>

//         <ul className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed space-y-3 mb-6 list-disc pl-5">
//           <li>
//             WE ENCOURAGE ORIGINAL CONTENT EXCLUSIVELY WRITTEN FOR HILAL
//             MAGAZINE. PREVIOUSLY PUBLISHED PIECES OR THOSE UNDER CONSIDERATION
//             BY ANOTHER PUBLICATION WILL NOT BE ACCOMMODATED.
//           </li>
//           <li>
//             DUE TO OUR MONTHLY SUBMISSION SCHEDULE, FREQUENCY, ARTICLES SHOULD
//             BE WRITTEN AND SUBMITTED A MONTH IN ADVANCE. PLEASE CONSIDER THIS
//             TIME FRAME ACCORDINGLY.
//           </li>
//           <li>
//             LIMIT YOUR SUBMISSIONS TO ONE ARTICLE PER MONTH TO MAINTAIN
//             EDITORIAL BALANCE.
//           </li>
//           <li>
//             THE ARTICLE/REPORT/FEATURE/OPINION PIECE SHOULD BE CONCISE, CLEAR,
//             AND WRITTEN IN A GRAMMATICALLY CORRECT MANNER.
//           </li>
//           <li>
//             INCLUDE AN OUTLINE IN 70-80 WORDS HIGHLIGHTING THE SALIENT POINTS OF
//             THE ARTICLE IN THE EMAIL.
//           </li>
//           <li>
//             PROVIDE A SHORT BIOGRAPHY, A CLEAR PASSPORT-SIZED PICTURE OF THE
//             AUTHOR SUPPORTING HIGH-RESOLUTION PHOTOGRAPHS FOR THE PIECE, AND
//             CONTACT INFORMATION.
//           </li>
//         </ul>

//         <h3 className="text-[#DF1600] font-poppins font-medium text-base sm:text-lg uppercase mb-3">
//           RIGHTS AND REGULATIONS:
//         </h3>

//         <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed mb-6">
//           WRITERS RETAIN INTELLECTUAL PROPERTY RIGHTS TO THEIR ORIGINAL CONTENT.
//           HOWEVER, THE EDITORIAL TEAM RESERVES THE RIGHT TO EDIT ARTICLES TO
//           MEET EDITORIAL POLICIES. SUBMISSION ALONE DOES NOT GUARANTEE
//           PUBLICATION. BY CONTRIBUTING, AUTHORS AGREE TO THESE TERMS.
//         </p>
//       </div>
//       {/* HILAL URDU Submission Guidelines */}
//       <div className="mb-8">
//         <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
//           HILAL URDU
//         </h2>

//         <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] mb-4 leading-relaxed">
//           IF YOU INTEND TO WRITE FOR HILAL MAGAZINE, DISCUSS THE TOPIC WITH
//           EDITOR BY SENDING EMAIL AT HILALURDU@GMAIL.COM
//         </p>

//         {/* Black Bold Heading */}
//         <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
//           SUBMISSION TIPS:
//         </h3>

//         <ul className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed space-y-3 mb-6 list-disc pl-5">
//           <li>CONTENT TO BE SUBMITTED IN INPAGE / MS WORD (URDU).</li>
//           <li>ARTICLES SHOULD NOT LESS THAN 1500 WORDS.</li>
//           <li>
//             PLEASE INCLUDE A SHORT BIOGRAPHY AND CONTACT INFORMATION WITH EACH
//             SUBMISSION.
//           </li>
//           <li>PHOTOS FILE SIZE SHOULD BE AT LEAST 1 MB AND SIZE.</li>
//         </ul>

//         {/* Black Bold Heading */}
//         <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
//           RIGHTS
//         </h3>

//         <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed mb-6">
//           AUTHORS RETAIN ALL RIGHTS TO THEIR ORIGINAL MATERIAL. HOWEVER, WE
//           RESERVE THE RIGHT TO EDIT ARTICLES TO MEET THE SPACE AND POLICY
//           REQUIREMENTS. ARTICLE SUBMISSION DOES NOT GUARANTEE PUBLICATION.
//           ORGANIZATION RESERVES THE RIGHT TO PUBLISH OR NOT TO PUBLISH ANY
//           CONTENT SUBMITTED. BY CONTRIBUTING TO HILAL, YOU AGREE TO THESE TERMS.
//         </p>

//         {/* Black Bold Heading */}
//         <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
//           CATEGORIES OF MAGAZINE:
//         </h3>

//         <div className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed space-y-2 mb-6">
//           <p>EDITORIAL</p>
//           <p>NATIONAL AND INTERNATIONAL ISSUES</p>
//           <p>GHAZI-O-SHAHUDA</p>
//           <p>YOUNG-E-PAKISTAN</p>
//           <p>YOUNG-E-AZADI</p>
//           <p>MAHAOITAT (ENVIRONMENT)</p>
//           <p>BIAG-E-TORIAL</p>
//           <p>BIAG-E-QUAD</p>
//           <p>YOUNG-E-DEFEND (DEFENSE DAY)</p>
//           <p>INTERVIEWS</p>
//           <p>SHER-O-ADAB</p>
//           <p>HEALTH</p>
//           <p>MUTAFARIQAT (MISCELLANEOUS)</p>
//         </div>
//       </div>

//       {/* HILAL FOR HER Section */}
//       <div className="mb-8">
//         <h2 className="text-[#DF1600] font-poppins font-medium text-xl sm:text-2xl uppercase leading-tight mb-4">
//           Hilal for Her
//         </h2>
//         <p className="text-[#000000] font-poppins text-sm sm:text-[19.32px] font-normal leading-relaxed tracking-tight whitespace-pre-line">
//           Empowerment in its raw form doesn’t mean to give power to someone but
//           to understand the factors which hamper women’s progress and gives them
//           enough strength, support and to help them achieve what they deserve.
//           Thanks to the institution of motherhood, and the willingness on part
//           of their male partners; women have withstood difficulties and paved
//           their way through challenging environments. Today’s woman is greatly
//           contributing to actually revolutionizing and bringing positive fortune
//           to the society. Now she is in every field; she is a banker, a soldier,
//           an artist, an astronaut etc. We have women excelling and outshining in
//           the defence forces, law enforcement & intelligence agencies,
//           government and semi-government organizations, private and industrial
//           sectors, IT and communication, media and transport and more
//           importantly, at home. Hilal for Her is a tribute to this fact of life.
//           Pakistan Armed Forces are providing women full representation and
//           opportunity of a career. We believe in encouraging them, promoting and
//           protecting their sense of identity and conviction, galvanizing their
//           talent and potential through education and knowledge. Hilal for Her is
//           just one part of the role the Armed Forces are playing in contributing
//           to the cause. We are confident that this will inspire and educate our
//           womenfolk, who can play an effective and vibrant role towards bringing
//           a progressive change in the society. In our efforts, Quaid’s vision
//           provides guiding inspiration: “There are two powers in the world; one
//           is the sword and the other is the pen. There is a great competition
//           and rivalry between the two. There is a third power stronger than
//           both, that of the women.” The objectives of Hilal For Her is about
//           celebrating the role that women of our country have played in its
//           creation, educating and inspiring the youth of today about the
//           importance of the role of women in the evolution and advancement of
//           society, increasing awareness that women have it in them to change the
//           course not only of their own lives but that of history, creation of
//           cognizance among women that empowerment is to realize one’s potential
//           and garner support and encouragement to achieve greatness, proved to
//           be in line with the pulse of the society, as demonstrated by the rave
//           reviews we got. It needs mention here, that despite what the name of
//           the magazine might lead one to believe, the target readership
//           comprises both women and men, because the issues that will be
//           highlighted are societal and not limited to any one particular gender.
//           Hilal For Her is an endeavor to celebrate, educate with inspiration,
//           and increase awareness about the power of women by highlighting many
//           achievements of the women of Pakistan. The importance of hard work,
//           determination, passion and the will to rise despite the many hurdles,
//           is the focus of the articles contained in this issue. It is heartening
//           to see that the Pakistani society is readier than ever, to evolve and
//           advance by embracing the accomplishments of its women in every field
//           and empowering those who are still in the shadows waiting to realize
//           their potential. We hope for a future, where there will be abundant
//           opportunities and every person, be it man or woman, will be able to
//           grow and be who they want, commensurate with their potential, making
//           use of the talents they are bestowed with, and become productive
//           citizens of this great nation of ours.
//         </p>
//       </div>

//       {/* HILAL FOR KIDS Section */}
//       <div className="mb-8">
//         <h2 className="text-[#DF1600] font-poppins font-medium text-xl sm:text-2xl uppercase leading-tight mb-4">
//           Hilal for Kids
//         </h2>
//         <p className="text-[#000000] font-poppins text-sm sm:text-[19.32px] font-normal leading-relaxed tracking-tight whitespace-pre-line">
//           Hilal Publications is proudly publishing now five separately combined
//           monthly magazines - Hilal English, Hilal Urdu, Hilal for Her, Hilal
//           for Kids (English) - Hilal braey Atfaal (Urdu), and Monthly Press
//           Review (MPR) (English). The main Hilal (English) and Hilal (Urdu)
//           cover subjects of security concerns and other motivational stories for
//           the consumption of national as well as international readership. Hilal
//           for Her addresses the women related subjects highlighting their
//           interests, latest trends and fashions, besides the issues and problems
//           they are facing in various capacities. Hilal for Kids (English
//           portion) focuses on the children as well as youth between 5 to 18
//           years of age while Hilal braey Atfaal (Urdu portion) addresses
//           children of age between 4 to 12 years. Hilal for Kids have covered a
//           number of unique and untouched issues relating to the health,
//           education, sport, physical and mental training, skill and
//           technological learning and career oriented subjects. The mission
//           statement of Hilal for Kids fundamentally includes how to cope with
//           the information deluge, how to sift useful information and use it into
//           our own benefit, and how to convert that information into positive
//           knowledge in order to enhance capacity of brain, its receptibility and
//           reflection, and the IQ level. It is aimed to shift the mindset from
//           soft understanding to learning hardcore useful and implementable
//           scientific and high-tech knowledge into the domains that reach
//           underground, underwater, on-ground, in-air, space and beyond in the
//           constellation and cosmos. From human intelligence to artificial
//           intelligence, cyberspace to hybrid warfare and from handwriting to
//           e-writing and brail-reading it has to be adopted not only meticulously
//           but also mathematically.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OurContributors;



import React from "react";

// Hilal Magazine Team Images
import team1 from "../assets/Our Contributors Images/Hilal magzine team/1.png";
import team2 from "../assets/Our Contributors Images/Hilal magzine team/2.png";
import team3 from "../assets/Our Contributors Images/Hilal magzine team/3.png";
import team4 from "../assets/Our Contributors Images/Hilal magzine team/4.png";

// Hilal Urdu Images
import urdu1 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-1.png";
import urdu2 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-2.png";
import urdu3 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-3.png";
import urdu4 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-4.png";
import urdu5 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name-5.png";
import urdu6 from "../assets/Our Contributors Images/Hilal Urdu/Team Photo & Name.png";

// Hilal English Images
import english1 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-1.png";
import english2 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-2.png";
import english3 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-3.png";
import english4 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name-4.png";
import english5 from "../assets/Our Contributors Images/Hilal English/Team Photo & Name.png";

const OurContributors = () => {
  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 py-6 sm:py-8">
     
      {/* HILAL MAGAZINE TEAM Section */}
      <div className="mb-8">
        <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
          HILAL MAGAZINE TEAM
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Lt Gen Ahmed Sharif Chaudhry, HI (M) */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={team4}
              alt="Lt Gen Ahmed Sharif Chaudhry, HI (M)"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              Lt Gen Ahmed Sharif Chaudhry, HI (M)
            </p>
          </div>

          {/* Rashid Minhas */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={team2}
              alt="Rashid Minhas"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              Rashid Minhas
            </p>
          </div>

          {/* Syed Umar Waqar Ahmed */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={team3}
              alt="Syed Umar Waqar Ahmed"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              Syed Umar Waqar Ahmed
            </p>
          </div>

          {/* Uroosa Saeed Iqbal */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={team1}
              alt="Uroosa Saeed Iqbal"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
             Uroosa Saeed Iqbal
            </p>
          </div>
        </div>
      </div>

      {/* HILAL URDU Section */}
      <div className="mb-8">
        <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
          HILAL URDU
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Dr. Yousuf Khushk */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={urdu1}
              alt="Dr. Yousuf Khushk"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700" dir="rtl">
              ڈاکٹر یوسف خوشک
            </p>
          </div>

          {/* Shahid Jabari */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={urdu2}
              alt="Shahid Jabari"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700" dir="rtl">
              شہید جابری
            </p>
          </div>

          {/* Aashi Khalil */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={urdu3}
              alt="Aashi Khalil"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700" dir="rtl">
              آشی خلیل
            </p>
          </div>

          {/* Sultan Ahmad */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={urdu4}
              alt="Sultan Ahmad"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700" dir="rtl">
              سلطان احمد
            </p>
          </div>

          {/* Sajjad Ali */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={urdu5}
              alt="Sajjad Ali"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700" dir="rtl">
              سجاد علی
            </p>
          </div>

          {/* Riyaz Khalil */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={urdu6}
              alt="Riyaz Khalil"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700" dir="rtl">
              ریاض خلیل
            </p>
          </div>
        </div>
      </div>

      {/* HILAL ENGLISH Section */}
      <div className="mb-8">
        <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
          HILAL ENGLISH
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* English Contributor 1 */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={english1}
              alt="English Contributor 1"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              John Smith
            </p>
          </div>

          {/* English Contributor 2 */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={english2}
              alt="English Contributor 2"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              Sarah Johnson
            </p>
          </div>

          {/* English Contributor 3 */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={english3}
              alt="English Contributor 3"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              Michael Brown
            </p>
          </div>

          {/* English Contributor 4 */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={english4}
              alt="English Contributor 4"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              Emily Davis
            </p>
          </div>

          {/* English Contributor 5 */}
          <div className="border border-gray-300 p-2 sm:p-3">
            <img 
              src={english5}
              alt="English Contributor 5"
              className="w-full sm:w-[304px] h-[250px] sm:h-[318px] object-cover mb-2 mx-auto"
            />
            <p className="text-center text-xs sm:text-sm font-poppins text-gray-700">
              Robert Wilson
            </p>
          </div>
        </div>
      </div>

      {/* Our Contributors Sections */}

       {/* Red Line */}
       <div className="w-full h-0 border-t-[2px] sm:border-t-[3px] border-[#DF1600] mb-2" />
      
{/* Our Contributors Title */}
<h1
  className="text-[#DF1600] font-medium text-2xl sm:text-[48px] leading-tight sm:leading-[100%] tracking-tight sm:tracking-[-0.03em] uppercase font-poppins text-center max-w-full sm:w-[459px] sm:h-[72px] mx-auto mb-4 sm:mb-6"
>
  OUR CONTRIBUTORS
</h1>

      {/* HILAL ENGLISH Submission Guidelines */}
<div className="mb-8">
  <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
    HILAL ENGLISH
  </h2>

  <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] mb-4 leading-relaxed">
    PROSPECTIVE WRITERS ARE INVITED TO SUBMIT THEIR MANUSCRIPTS TO THE FOLLOWING EMAIL ADDRESSES:
  </p>

  {/* Updated Email Lines */}
  <div className="mb-6 space-y-2">
    <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed break-words">
      <span className="font-bold">HILAL ENGLISH:</span>{" "}
      <span className="underline">HILAL.ENGLISH@GMAIL.COM</span>
    </p>
    <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed break-words">
      <span className="font-bold">HILAL URDU:</span>{" "}
      <span className="underline">HILAL.URDU@GMAIL.COM</span>
    </p>
    <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed break-words">
      <span className="font-bold">HILAL FOR HER:</span>{" "}
      <span className="underline">HILAL.FORHER@GMAIL.COM</span>
    </p>
    <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed break-words">
      <span className="font-bold">HILAL FOR KIDS:</span>{" "}
      <span className="underline">HILAL.FORKIDS@GMAIL.COM</span>
    </p>
  </div>

  {/* Submission Guidelines Heading (Black & Bold) */}
  <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
    SUBMISSION REQUIREMENTS AND GUIDELINES:
  </h3>

  <ul className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed space-y-3 mb-6 list-disc pl-5">
    <li>WE ENCOURAGE ORIGINAL CONTENT EXCLUSIVELY WRITTEN FOR HILAL MAGAZINE. PREVIOUSLY PUBLISHED PIECES OR THOSE UNDER CONSIDERATION BY ANOTHER PUBLICATION WILL NOT BE ACCOMMODATED.</li>
    <li>DUE TO OUR MONTHLY SUBMISSION SCHEDULE, FREQUENCY, ARTICLES SHOULD BE WRITTEN AND SUBMITTED A MONTH IN ADVANCE. PLEASE CONSIDER THIS TIME FRAME ACCORDINGLY.</li>
    <li>LIMIT YOUR SUBMISSIONS TO ONE ARTICLE PER MONTH TO MAINTAIN EDITORIAL BALANCE.</li>
    <li>THE ARTICLE/REPORT/FEATURE/OPINION PIECE SHOULD BE CONCISE, CLEAR, AND WRITTEN IN A GRAMMATICALLY CORRECT MANNER.</li>
    <li>INCLUDE AN OUTLINE IN 70-80 WORDS HIGHLIGHTING THE SALIENT POINTS OF THE ARTICLE IN THE EMAIL.</li>
    <li>PROVIDE A SHORT BIOGRAPHY, A CLEAR PASSPORT-SIZED PICTURE OF THE AUTHOR SUPPORTING HIGH-RESOLUTION PHOTOGRAPHS FOR THE PIECE, AND CONTACT INFORMATION.</li>
  </ul>

  <h3 className="text-[#DF1600] font-poppins font-medium text-base sm:text-lg uppercase mb-3">
    RIGHTS AND REGULATIONS:
  </h3>

  <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed mb-6">
    WRITERS RETAIN INTELLECTUAL PROPERTY RIGHTS TO THEIR ORIGINAL CONTENT. HOWEVER, THE EDITORIAL TEAM RESERVES THE RIGHT TO EDIT ARTICLES TO MEET EDITORIAL POLICIES. SUBMISSION ALONE DOES NOT GUARANTEE PUBLICATION. BY CONTRIBUTING, AUTHORS AGREE TO THESE TERMS.
  </p>
</div>
{/* HILAL URDU Submission Guidelines */}
<div className="mb-8">
  <h2 className="text-[#DF1600] font-poppins font-medium text-lg sm:text-xl uppercase mb-4">
    HILAL URDU
  </h2>

  <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] mb-4 leading-relaxed">
    IF YOU INTEND TO WRITE FOR HILAL MAGAZINE, DISCUSS THE TOPIC WITH EDITOR BY SENDING EMAIL AT HILALURDU@GMAIL.COM
  </p>

  {/* Black Bold Heading */}
  <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
    SUBMISSION TIPS:
  </h3>

  <ul className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed space-y-3 mb-6 list-disc pl-5">
    <li>CONTENT TO BE SUBMITTED IN INPAGE / MS WORD (URDU).</li>
    <li>ARTICLES SHOULD NOT LESS THAN 1500 WORDS.</li>
    <li>PLEASE INCLUDE A SHORT BIOGRAPHY AND CONTACT INFORMATION WITH EACH SUBMISSION.</li>
    <li>PHOTOS FILE SIZE SHOULD BE AT LEAST 1 MB AND SIZE.</li>
  </ul>

  {/* Black Bold Heading */}
  <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
    RIGHTS
  </h3>

  <p className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed mb-6">
    AUTHORS RETAIN ALL RIGHTS TO THEIR ORIGINAL MATERIAL. HOWEVER, WE RESERVE THE RIGHT TO EDIT ARTICLES TO MEET THE SPACE AND POLICY REQUIREMENTS. ARTICLE SUBMISSION DOES NOT GUARANTEE PUBLICATION. ORGANIZATION RESERVES THE RIGHT TO PUBLISH OR NOT TO PUBLISH ANY CONTENT SUBMITTED. BY CONTRIBUTING TO HILAL, YOU AGREE TO THESE TERMS.
  </p>

  {/* Black Bold Heading */}
  <h3 className="text-black font-poppins font-bold text-base sm:text-lg uppercase mb-3">
    CATEGORIES OF MAGAZINE:
  </h3>

  <div className="text-[#292D32] font-poppins text-sm sm:text-[19.32px] leading-relaxed space-y-2 mb-6">
    <p>EDITORIAL</p>
    <p>NATIONAL AND INTERNATIONAL ISSUES</p>
    <p>GHAZI-O-SHAHUDA</p>
    <p>YOUNG-E-PAKISTAN</p>
    <p>YOUNG-E-AZADI</p>
    <p>MAHAOITAT (ENVIRONMENT)</p>
    <p>BIAG-E-TORIAL</p>
    <p>BIAG-E-QUAD</p>
    <p>YOUNG-E-DEFEND (DEFENSE DAY)</p>
    <p>INTERVIEWS</p>
    <p>SHER-O-ADAB</p>
    <p>HEALTH</p>
    <p>MUTAFARIQAT (MISCELLANEOUS)</p>
  </div>
</div>


{/* HILAL FOR HER Section */}
<div className="mb-8">
  <h2 className="text-[#DF1600] font-poppins font-medium text-xl sm:text-2xl uppercase leading-tight mb-4">
    Hilal for Her
  </h2>
  <p className="text-[#000000] font-poppins text-sm sm:text-[19.32px] font-normal leading-relaxed tracking-tight whitespace-pre-line">
    Empowerment in its raw form doesn't mean to give power to someone but to understand the factors which hamper women's progress and gives them enough strength, support and to help them achieve what they deserve. Thanks to the institution of motherhood, and the willingness on part of their male partners; women have withstood difficulties and paved their way through challenging environments. Today's woman is greatly contributing to actually revolutionizing and bringing positive fortune to the society. Now she is in every field; she is a banker, a soldier, an artist, an astronaut etc. We have women excelling and outshining in the defence forces, law enforcement & intelligence agencies, government and semi-government organizations, private and industrial sectors, IT and communication, media and transport and more importantly, at home.

    Hilal for Her is a tribute to this fact of life. Pakistan Armed Forces are providing women full representation and opportunity of a career. We believe in encouraging them, promoting and protecting their sense of identity and conviction, galvanizing their talent and potential through education and knowledge. Hilal for Her is just one part of the role the Armed Forces are playing in contributing to the cause. We are confident that this will inspire and educate our womenfolk, who can play an effective and vibrant role towards bringing a progressive change in the society. In our efforts, Quaid's vision provides guiding inspiration: "There are two powers in the world; one is the sword and the other is the pen. There is a great competition and rivalry between the two. There is a third power stronger than both, that of the women."

    The objectives of Hilal For Her is about celebrating the role that women of our country have played in its creation, educating and inspiring the youth of today about the importance of the role of women in the evolution and advancement of society, increasing awareness that women have it in them to change the course not only of their own lives but that of history, creation of cognizance among women that empowerment is to realize one's potential and garner support and encouragement to achieve greatness, proved to be in line with the pulse of the society, as demonstrated by the rave reviews we got.

    It needs mention here, that despite what the name of the magazine might lead one to believe, the target readership comprises both women and men, because the issues that will be highlighted are societal and not limited to any one particular gender.
    Hilal For Her is an endeavor to celebrate, educate with inspiration, and increase awareness about the power of women by highlighting many achievements of the women of Pakistan. The importance of hard work, determination, passion and the will to rise despite the many hurdles, is the focus of the articles contained in this issue.

    It is heartening to see that the Pakistani society is readier than ever, to evolve and advance by embracing the accomplishments of its women in every field and empowering those who are still in the shadows waiting to realize their potential. We hope for a future, where there will be abundant opportunities and every person, be it man or woman, will be able to grow and be who they want, commensurate with their potential, making use of the talents they are bestowed with, and become productive citizens of this great nation of ours.
  </p>
</div>

{/* HILAL FOR KIDS Section */}
<div className="mb-8">
  <h2 className="text-[#DF1600] font-poppins font-medium text-xl sm:text-2xl uppercase leading-tight mb-4">
    Hilal for Kids
  </h2>
  <p className="text-[#000000] font-poppins text-sm sm:text-[19.32px] font-normal leading-relaxed tracking-tight whitespace-pre-line">
    Hilal Publications is proudly publishing now five separately combined monthly magazines - Hilal English, Hilal Urdu, Hilal for Her, Hilal for Kids (English) - Hilal braey Atfaal (Urdu), and Monthly Press Review (MPR) (English). The main Hilal (English) and Hilal (Urdu) cover subjects of security concerns and other motivational stories for the consumption of national as well as international readership. Hilal for Her addresses the women related subjects highlighting their interests, latest trends and fashions, besides the issues and problems they are facing in various capacities. Hilal for Kids (English portion) focuses on the children as well as youth between 5 to 18 years of age while Hilal braey Atfaal (Urdu portion) addresses children of age between 4 to 12 years.

    Hilal for Kids have covered a number of unique and untouched issues relating to the health, education, sport, physical and mental training, skill and technological learning and career oriented subjects. The mission statement of Hilal for Kids fundamentally includes how to cope with the information deluge, how to sift useful information and use it into our own benefit, and how to convert that information into positive knowledge in order to enhance capacity of brain, its receptibility and reflection, and the IQ level. It is aimed to shift the mindset from soft understanding to learning hardcore useful and implementable scientific and high-tech knowledge into the domains that reach underground, underwater, on-ground, in-air, space and beyond in the constellation and cosmos. From human intelligence to artificial intelligence, cyberspace to hybrid warfare and from handwriting to e-writing and brail-reading it has to be adopted not only meticulously but also mathematically.
  </p>
</div>
    </div>
  );
};

export default OurContributors;