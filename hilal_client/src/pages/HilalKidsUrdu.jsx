import React, { Suspense, lazy, useState, useEffect } from "react";
import TrendingHilalPublicationsKidsUrdu from "../components/urdu/kids/TrendingHilalPublicationsKidsUrdu";
import TrendingHilalSectionKidsUrdu from "../components/urdu/kids/TrendingHilalSectionKidsUrdu";

// Lazy load components for performance optimization
const TrendingHilalPublicationsUrdu = lazy(() => import("../components/urdu/TrendingHilalPublicationsUrdu"));
const HilalDigitalUrdu = lazy(() => import("../components/urdu/HilalDigitalUrdu"));
const ArmedForcesNewsUrdu = lazy(() => import("../components/urdu/ArmedForcesNewsUrdu"));
const NewsLetterUrdu = lazy(() => import("../components/urdu/NewsLetterUrdu"));
const PreviousMonthHilalUrdu = lazy(() => import("../components/urdu/PreviousMonthHiilalUrdu"));
const ReaderOpinionUrdu = lazy(() => import("../components/urdu/ReadersOpinionUrdu"));
const HilalDigital2Urdu = lazy(() => import("../components/urdu/HilalDigital2Urdu"));
const Advertisement2Urdu = lazy(() => import("../components/urdu/Advertisment2Urdu"));
const TrendingHilalSectionUrdu = lazy(() => import("../components/urdu/TrendingHilalSectionUrdu"));
const InFocusSectionUrduKids = lazy(() => import("../components/urdu/kids/InFocusUrduKids"));
const HilalMiscUrduKids = lazy(() => import("../components/urdu/kids/HilalMiscUrduKids"));
const Advertisement1 = lazy(() => import("../components/Home/Advertisement1"));
const Advertisement4 = lazy(() => import("../components/Home/Advertisement4"));

// Loading skeleton component
const ComponentSkeleton = ({ height = "h-48", width = "w-full" }) => (
    <div className={`${width} ${height} bg-gray-200 animate-pulse rounded-lg mb-4`}>
        <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
    </div>
);

// Intersection Observer hook for lazy loading
const useIntersectionObserver = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const [targetRef, setTargetRef] = useState(null);

    useEffect(() => {
        if (!targetRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(targetRef);
        return () => observer.disconnect();
    }, [targetRef, threshold]);

    return [setTargetRef, isVisible];
};

const HilalKidsUrdu = () => {
    const [belowFoldRef, belowFoldVisible] = useIntersectionObserver(0.1);
    const [bottomRef, bottomVisible] = useIntersectionObserver(0.1);

    return (
        <>
            <div className="flex lg:flex-row flex-col">
                {/* LEFT COLUMN - Main content with articles and videos */}
                <div style={{ scrollbarWidth: "none" }} className="lg:w-[70%] overflow-y-auto max-h-screen">
                    <div className="flex lg:flex-row flex-col">
                        <div className="lg:w-3/4">
                            <Suspense fallback={<ComponentSkeleton height="h-64" />}>
                                <TrendingHilalPublicationsKidsUrdu />
                            </Suspense>
                        </div>
                        <div className="lg:w-1/4">
                            <Suspense fallback={<ComponentSkeleton height="h-48" />}>
                                <HilalDigitalUrdu />
                            </Suspense>
                        </div>
                    </div>

                    <Suspense fallback={<ComponentSkeleton height="h-56" />}>
                        <InFocusSectionUrduKids />
                    </Suspense>

                    <Suspense fallback={<ComponentSkeleton height="h-64" />}>
                        <HilalMiscUrduKids />
                    </Suspense>

                    <Suspense fallback={<ComponentSkeleton height="h-64" />}>
                        <TrendingHilalSectionKidsUrdu />
                    </Suspense>
                </div>

                {/* RIGHT COLUMN - Sidebar with ads and news */}
                <div className="lg:w-[30%] relative">
                    <div className="sticky top-0">
                        <div style={{ scrollbarWidth: "none" }} className="overflow-y-auto max-h-screen">
                            <Suspense fallback={<ComponentSkeleton height="h-40" />}>
                                <ArmedForcesNewsUrdu />
                            </Suspense>

                            <Suspense fallback={<ComponentSkeleton height="h-32" />}>
                                <Advertisement1 />
                            </Suspense>

                            <Suspense fallback={<ComponentSkeleton height="h-36" />}>
                                <NewsLetterUrdu />
                            </Suspense>

                            <Suspense fallback={<ComponentSkeleton height="h-32" />}>
                                <Advertisement2Urdu />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

            {/* Below-the-fold content - Loads only when scrolled into view */}
            <div ref={belowFoldRef}>
                {belowFoldVisible && (
                    <>
                        <Suspense fallback={<ComponentSkeleton height="h-40" />}>
                            <Advertisement4 />
                        </Suspense>

                        <Suspense fallback={<ComponentSkeleton height="h-48" />}>
                            <HilalDigital2Urdu />
                        </Suspense>
                    </>
                )}
            </div>

            {/* Bottom section - Loads when user scrolls further */}
            <div ref={bottomRef}>
                {bottomVisible && (
                    <div className="flex lg:flex-row flex-col px-4 py-2 gap-x-4">
                        <div className="lg:w-[70%]">
                            <Suspense fallback={<ComponentSkeleton height="h-56" />}>
                                <PreviousMonthHilalUrdu />
                            </Suspense>
                        </div>
                        <div>
                            <Suspense fallback={<ComponentSkeleton height="h-48" />}>
                                <ReaderOpinionUrdu />
                            </Suspense>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default HilalKidsUrdu;
