import TrendingHilalPublications from "../components/Home/TrendingHilalPublications";
import HilalDigital from "../components/Home/HilalDigital";
import ArmedForcesNews from "../components/Home/ArmedForcesNews";
import HilalDigital2 from "../components/Home/Hillal_Digital_2";
import PreviousMonthHilal from "../components/Home/PreviousMonthHilal";
import ReaderOpinion from "../components/Home/ReaderOpinion";
import InFocusSection from "../components/Home/InFocus";
import TrendingHilalSection from "../components/Home/TrendingHilal";




const Home = () => {
  return (
    <>
      {/* <div className="flex items-center  ">
        <TrendingHilalPublications />
        <HilalDigital />
        <ArmedForcesNews />


      </div>
      <InFocusSection /> */}
      <div className="flex gap-x-2">
        <div className="w-[75%]">
          <InFocusSection />
          <TrendingHilalSection />
        </div>
        <div className="w-[25%]">
          hello
        </div>
      </div>




      {/* <HilalDigital2 />



      <div className="grid grid-cols-1 py-8 px-4 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-7 ">
          <PreviousMonthHilal />
        </div>
        <ReaderOpinion />
      </div> */}

    </>
  );
};

export default Home;
