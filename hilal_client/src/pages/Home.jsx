import TrendingHilalPublications from "../components/Home/TrendingHilalPublications";
import HilalDigital from "../components/Home/HilalDigital";
import ArmedForcesNews from "../components/Home/ArmedForcesNews";
import HilalDigital2 from "../components/Home/Hillal_Digital_2";
import PreviousMonthHilal from "../components/Home/PreviousMonthHilal";
import ReaderOpinion from "../components/Home/ReaderOpinion";
import InFocusSection from "../components/Home/InFocus";
import TrendingHilalSection from "../components/Home/TrendingHilal";
import NewsLetter from "../components/Home/NewsLetter";
import Advertisement2 from "../components/Home/Advertisement2";
import Advertisement1 from "../components/Home/Advertisement1";
import Advertisement4 from "../components/Home/Advertisement4";
import GoogleSignInButton from "./Google";




const Home = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col  ">
        <div className="lg:w-[70%]">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-3/4">
              <TrendingHilalPublications />
            </div>
            <div className="lg:w-1/4">
              <HilalDigital />
            </div>
          </div>

        </div>

        {/* <HilalDigital /> */}
        <div className="lg:w-[30%]">
          <ArmedForcesNews />
        </div>

      </div>

      <div className="flex lg:flex-row flex-col gap-x-2">
        <div className="lg:w-[70%]">
          <InFocusSection />
          <TrendingHilalSection />
        </div>


        <div className="lg:w-[30%] px-4 py-2">
          <Advertisement1 />
          <NewsLetter />
          <Advertisement2 />
        </div>
      </div>
      <Advertisement4 />
      <HilalDigital2 />










      <div className="flex lg:flex-row flex-col px-4 py-2 gap-x-4">
        <div className="lg:w-[70%]">
          <PreviousMonthHilal />
        </div>
        <div>
          <ReaderOpinion />
        </div>

      </div>


    </>
  );
};

export default Home;
