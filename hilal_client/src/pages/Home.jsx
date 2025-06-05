import HilalDigital from "../components/HilalDigital";
import TrendingHilalPublications from "../components/TrendingHilalPublications";

const Home = () => {

    return (
        <>

            <div className="grid grid-cols-12 gap-x-4 border-t-2 border-[#DF1600] mt-8 ml-[45px] mr-7">
                <div className="min-h-screen col-span-9 ">
                    <HilalDigital />
                    <TrendingHilalPublications />
                </div>
                <div className="col-span-3  p-4">
                    Hi
                </div>
            </div>

        </>
    );
};

export default Home;
