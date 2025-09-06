"use client";

import Card from "@/components/domainscomponents/Card";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full pt-28 md:pt-8  flex flex-col items-center h-screen bg-black">
        <h1 className="text-white uppercase font-anton text-[6rem] sm:text-[12rem] md:text-[15rem] lg:text-[20rem] ">
          Hardware
        </h1>
        <div className="w-full bg-[#23D3ED] p-4 flex gap-3 items-center justify-between mt-10 md:mt-0 ">
         <div className="flex items-center gap-5 animate-marquee">
           <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo War (3lbs, 8kg, 15kg)
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Soccer
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Robo Rush
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
          <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
            Go-Karting
          </span>
          <div className="w-3 h-3 rounded-full bg-black " />
         </div>
        </div>
        <div className="w-full px-8 py-4 flex mt-20 flex-wrap gap-7 justify-center">
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
