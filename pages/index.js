import Image from "next/image";
import { useEffect } from "react";
import anime from "animejs";

const Home = () => {
    useEffect(() => {
      const bannerTexts = document.querySelectorAll(".banner-text");

          const breakpoints = [
            { width: 200, duration: 7000, distance: 500, percentage: 390 },
            { width: 700, duration: 11000, distance: 1100, percentage: 1100 },
            { width: 1536, duration: 14000, distance: 1600, percentage:1600 },
            // Add more breakpoints and corresponding animation properties as needed
          ];

      const { duration, distance, percentage } = getAnimationProperties(breakpoints);

      // Animation configuration
      const animationConfig = {
        targets: bannerTexts,
        translateX: [`-${distance}%`, `${percentage}%`], // Slide from left to right
        easing: "linear",
        duration: duration,
        loop: true,
      };

      // Slide the banner texts
      anime(animationConfig);
    }, []);

      const getAnimationProperties = (breakpoints) => {
        const sortedBreakpoints = breakpoints.sort((a, b) => b.width - a.width);
        const windowWidth = window.innerWidth;

        console.log(window.innerWidth);

        for (let i = 0; i < sortedBreakpoints.length; i++) {
          if (windowWidth > sortedBreakpoints[i].width) {
            return {
              duration: sortedBreakpoints[i].duration,
              distance: sortedBreakpoints[i].distance,
              percentage: sortedBreakpoints[i].percentage,
            };
          }
        }

        // Default animation properties if no matching breakpoint is found
        return {
          duration: 3000,
          distance: 80,
          percentage: 100
        };
      };

  return (
    <div className="flex-col flex-center h-screen">
      <div className="sm:w-5/6 xl:w-4/5 w-full bg-gray-700 mx-auto sm:flex-center sm:flex-row flex-col sm:rounded-lg sm:mb-5 sm:py-8">
        <div className="sm:h-96 sm:w-96 h-108 sm:rounded-full bg-green-100">
          <div className="sm:py-0 py-10 flex justify-center sm:mt-10">
            <Image
              src="/assets/images/iced-coffee.png"
              alt="Iced Coffee"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="marketing_text sm:w-1/4 text-center sm:ml-10 xl:ml-20 sm:mx-0 my-6">
          Great Days Start With Coffee
        </div>
      </div>

      <div className="w-full bg-gray-700 sm:mt-28 mt-16 flex justify-evenly font-comforta text-yellow-100 italic text-lg font-bold">
        <div className="banner-text">CAFFEINE</div>
        <div className="banner-text">CAFFEINE</div>
        <div className="banner-text">CAFFEINE</div>
        <div className="banner-text hidden sm:block">CAFFEINE</div>
        <div className="banner-text hidden sm:block">CAFFEINE</div>
      </div>
    </div>
  );
};

export default Home;
