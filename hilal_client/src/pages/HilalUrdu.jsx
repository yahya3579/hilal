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



import { useRef, useEffect, useState } from "react";
import TrendingHilalPublicationsUrdu from "../components/urdu/TrendingHilalPublicationsUrdu";
import HilalDigitalUrdu from "../components/urdu/HilalDigitalUrdu";
import ArmedForcesNewsUrdu from "../components/urdu/ArmedForcesNewsUrdu";
import NewsLetterUrdu from "../components/urdu/NewsLetterUrdu";
import InFocusSectionUrdu from "../components/InFocusUrdu";
import PreviousMonthHilalUrdu from "../components/urdu/PreviousMonthHiilalUrdu";
import ReaderOpinionUrdu from "../components/urdu/ReadersOpinionUrdu";
import HilalDigital2Urdu from "../components/urdu/HilalDigital2Urdu";
import Advertisement2Urdu from "../components/urdu/Advertisment2Urdu";
import TrendingHilalSectionUrdu from "../components/urdu/TrendingHilalSectionUrdu";

const HilalUrdu = () => {
    const leftRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!leftRef.current) return;

            const rect = leftRef.current.getBoundingClientRect();
            const bottomReached =
                rect.bottom <= window.innerHeight - 70; // bottom within 70px

            setCanScroll(bottomReached);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="flex lg:flex-row flex-col">
                {/* LEFT COLUMN */}


                {/* RIGHT COLUMN */}
                <div className="lg:w-[30%] relative">
                    <div className="sticky top-0">
                        <div style={{ scrollbarWidth: "none" }} className="overflow-y-auto max-h-screen">
                            <ArmedForcesNewsUrdu />
                            <Advertisement1 />
                            <NewsLetterUrdu />
                            <Advertisement2Urdu />
                        </div>
                    </div>
                </div>
                <div
                    ref={leftRef}
                    style={{ scrollbarWidth: "none" }}
                    className={`lg:w-[70%] ${canScroll ? "overflow-y-auto" : "overflow-hidden"
                        } max-h-screen`}
                >
                    <div className="flex lg:flex-row flex-col">
                        <div className="lg:w-1/4">
                            <HilalDigitalUrdu />
                        </div>
                        <div className="lg:w-3/4">
                            <TrendingHilalPublicationsUrdu />
                        </div>

                    </div>
                    <InFocusSectionUrdu />
                    <TrendingHilalSectionUrdu />
                </div>


            </div>

            <Advertisement4 />
            <HilalDigital2Urdu />

            <div className="flex lg:flex-row flex-col px-4 py-2 gap-x-4">
                <div className="lg:w-[70%]">
                    <PreviousMonthHilalUrdu />
                </div>
                <div>
                    <ReaderOpinionUrdu />
                </div>
            </div>
        </>
    );
};

export default HilalUrdu;
