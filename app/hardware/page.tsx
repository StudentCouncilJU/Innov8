"use client";

import Card from "@/components/domainscomponents/Card";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="w-full pt-20 sm:pt-28 md:pt-8 flex flex-col items-center min-h-screen bg-black pb-8">
        <h1 className="text-white uppercase font-anton text-[4rem] sm:text-[6rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] text-center px-4">
          Hardware
        </h1>
        <div className="w-full bg-[#23D3ED] p-2 sm:p-4 flex gap-2 sm:gap-3 items-center justify-between mt-6 sm:mt-10 md:mt-0 overflow-hidden">
         <div className="flex items-center gap-3 sm:gap-5 animate-marquee whitespace-nowrap">
           <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
         </div>
        </div>
        <div className="w-full px-4 sm:px-6 md:px-8 py-4 flex mt-8 sm:mt-14 md:mt-20 flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center">
          <Card
            name="Robo War (3lbs, 8kg, 15kg)"
            description="Description for Card 1"
            link="#"
            image="/posters/robowar.png"
          />
          <Card
            name="Robo Soccer"
            description="Description for Card 2"
            link="#"
            image="/posters/robosoccer.png"
          />
          <Card
            name="Robo Rush"
            description="Description for Card 3"
            link="#"
            image="/posters/roborush.png"
          />
          <Card
            name="Go-Karting"
            description="Description for Card 4"
            link="#"
            image="/posters/gokarting.png"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
