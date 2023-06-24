'use client'

import Image from "next/image";
import { useEffect } from "react";
import anime from "animejs";

const About = () => {
      useEffect(() => {
        console.log("Here")
        // Animation configuration
        const animationConfig = {
          targets: "#outer > div", // Select all the divs inside the outer div
          translateX: ["-1000%", "0%"], // Slide from left to right
          easing: "easeOutExpo",
          duration: 1000, // Animation duration in milliseconds
          delay: anime.stagger(200), // Delay each div animation
        };

        // Slide in the divs on component mount
        anime(animationConfig);
      }, []);

  return (
    <div className="">
      <div className="w-4/5 mx-auto mt-20 sm:flex">
        <div className="sm:w-1/2 ">
          <Image
            src="/assets/images/customers-happy.svg"
            alt="Coffee being served to customers"
            width={550}
            height={550}
          ></Image>
        </div>
        <div className="xl:mt-14 sm:mt-0 mt-10 sm:ml-20 font-comforta w-full text-lg">
          <div>
            At BrewBox, we're all about the perfect cup of coffee. Our dedicated
            baristas meticulously source and roast the finest beans to deliver a
            truly exceptional experience. From rich espressos to indulgent
            lattes, we're here to satisfy your coffee cravings. Step into our
            cozy space and let the aroma whisk you away. Discover the magic of
            coffee at BrewBox.
          </div>
          <div className="mt-10">
            Nestled in the heart of Winnipeg, BrewBox is a haven for coffee
            aficionados. With a passion for quality and a commitment to craft,
            we take pride in serving up delicious brews that ignite your senses.
            Our skilled baristas are artists, expertly pouring velvety
            cappuccinos and flavorful pour-overs. We believe that great coffee
            is an experience to be savored, and we invite you to embark on this
            sensory journey with us. From the first sip to the last, let BrewBox
            be your sanctuary of taste and tranquility.
          </div>
        </div>
      </div>
      <div className="w-full flex mt-20" id="outer">
        <div className="h-6 w-1/6 bg-green-100"></div>
        <div className="h-6 w-1/6 bg-green-100 mt-4"></div>
        <div className="h-6 w-1/6 bg-green-100 mt-8"></div>
        <div className="h-6 w-1/6 bg-green-100 mt-12"></div>
        <div className="h-6 w-1/6 bg-green-100 mt-16"></div>
        <div className="h-6 w-1/6 bg-green-100 mt-20"></div>
      </div>
    </div>
  );
};

export default About;
