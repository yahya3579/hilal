import ArmedForcesNews from "../components/ArmedForcesNews";
import HilalDigital from "../components/HilalDigital";
import InFocusSection from "../components/InFocus";
import NewsletterSubscription from "../components/NewsLetterSubscription";
import TrendingHilalPublications from "../components/TrendingHilalPublications";

const Home = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-x-4 border-t-2 border-[#DF1600] mt-8 ml-[45px] mr-7">
                <div className="w-full lg:w-[70%] min-h-screen">
                    <HilalDigital />
                    <TrendingHilalPublications />
                    <InFocusSection />
                </div>
                <div className="w-full lg:w-[30%] border-l border-black my-5">
                    <ArmedForcesNews />
                    <NewsletterSubscription />
                </div>
            </div>
        </>
    );
};

export default Home;
