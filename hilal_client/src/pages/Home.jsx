import React, { Suspense, lazy, useState, useEffect } from "react";
import HilalMiscEnglish from "../components/Home/HilalMiscEnglish";

// Lazy load components to improve initial page load
const TrendingHilalPublications = lazy(() => import("../components/Home/TrendingHilalPublications"));
const HilalDigital = lazy(() => import("../components/Home/HilalDigital"));
const ArmedForcesNews = lazy(() => import("../components/Home/ArmedForcesNews"));
const HilalDigital2 = lazy(() => import("../components/Home/Hillal_Digital_2"));
const PreviousMonthHilal = lazy(() => import("../components/Home/PreviousMonthHilal"));
const ReaderOpinion = lazy(() => import("../components/Home/ReaderOpinion"));
const InFocusSection = lazy(() => import("../components/Home/InFocus"));
const TrendingHilalSection = lazy(() => import("../components/Home/TrendingHilal"));
const NewsLetter = lazy(() => import("../components/Home/NewsLetter"));
const Advertisement2 = lazy(() => import("../components/Home/Advertisement2"));
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

// Intersection Observer hook for lazy loading below-the-fold content
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

const Home = () => {
  const [belowFoldRef, belowFoldVisible] = useIntersectionObserver(0.1);
  const [bottomRef, bottomVisible] = useIntersectionObserver(0.1);

  return (
    <>
      <div className="flex lg:flex-row flex-col">
        {/* LEFT COLUMN (scrolls first) - Critical content loads first */}
        <div style={{ scrollbarWidth: "none" }} className="lg:w-[70%] overflow-y-auto max-h-screen">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-3/4">
              <Suspense fallback={<ComponentSkeleton height="h-64" />}>
                <TrendingHilalPublications />
                <HilalMiscEnglish />
              </Suspense>
            </div>
            <div className="lg:w-1/4">
              <Suspense fallback={<ComponentSkeleton height="h-48" />}>
                <HilalDigital />
              </Suspense>
            </div>
          </div>

          <Suspense fallback={<ComponentSkeleton height="h-56" />}>
            <InFocusSection />
          </Suspense>

          <Suspense fallback={<ComponentSkeleton height="h-64" />}>
            <TrendingHilalSection />
          </Suspense>
        </div>

        {/* RIGHT COLUMN (sticky, then scroll) - Secondary content */}
        <div className="lg:w-[30%] relative">
          <div className="sticky top-0">
            <div style={{ scrollbarWidth: "none" }} className="overflow-y-auto max-h-screen">
              <Suspense fallback={<ComponentSkeleton height="h-40" />}>
                <ArmedForcesNews />
              </Suspense>

              <Suspense fallback={<ComponentSkeleton height="h-32" />}>
                <Advertisement1 />
              </Suspense>

              <Suspense fallback={<ComponentSkeleton height="h-36" />}>
                <NewsLetter />
              </Suspense>

              <Suspense fallback={<ComponentSkeleton height="h-32" />}>
                <Advertisement2 />
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
              <HilalDigital2 />
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
                <PreviousMonthHilal />
              </Suspense>
            </div>
            <div>
              <Suspense fallback={<ComponentSkeleton height="h-48" />}>
                <ReaderOpinion />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
