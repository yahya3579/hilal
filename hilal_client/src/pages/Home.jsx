import TrendingHilalPublications from "../components/Home/TrendingHilalPublications";
import HilalDigital from "../components/Home/HilalDigital";
import ArmedForcesNews from "../components/Home/ArmedForcesNews";




const Home = () => {
  return (
    <>
      <div className="flex items-center  ">
        <TrendingHilalPublications />
        <HilalDigital />
        <ArmedForcesNews/>
      
   
      </div>
    </>
  );
};

export default Home;
