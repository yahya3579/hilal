import ArmedForcesNews from "../components/Home/ArmedForcesNews";
import HilalDigital from "../components/Home/HilalDigital";
import { HomeAdBanner } from "../components/Home/HomeAdBanner";
import InFocusSection from "../components/Home/InFocus";
import NewsletterSubscription from "../components/Home/NewsLetterSubscription";
import PreviousMonthHilal from "../components/Home/PreviousMonthHilal";
import ReadersOpinion from "../components/Home/ReadersOpinion";
import TrendingHilalPublications from "../components/Home/TrendingHilalPublications";


const Home = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-x-4 border-t-2 border-b border-b-black border-t-[#DF1600] mb-3 mt-8 ml-[45px] mr-7">
                <div className="w-full lg:w-[70%]  min-h-screen ">
                    <HilalDigital />
                    <TrendingHilalPublications />
                    <InFocusSection />
                </div>
                <div className="w-full lg:w-[30%] border-l   border-black my-5">
                    <ArmedForcesNews />
                    <NewsletterSubscription />
                </div>
            </div>
            <div className="mb-4 ">
                <HomeAdBanner />
            </div>
            <div className="flex flex-col lg:flex-row gap-x-4    ml-[45px]  mr-7 ">
                <div className="w-full lg:w-[70%]   "><PreviousMonthHilal /></div>
                <div className="w-full lg:w-[30%] border-l border-black "> <ReadersOpinion /></div>


            </div>
        </>
    );
};

export default Home;
