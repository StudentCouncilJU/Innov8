"use client";
import Card from "@/components/domainscomponents/Card";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full pt-28 md:pt-8 flex flex-col items-center h-screen bg-black">
        <h1 className="text-white uppercase font-anton text-[6rem] sm:text-[12rem] md:text-[15rem] lg:text-[20rem] ">
          Software
        </h1>
        <div className="w-full bg-[#23D3ED] p-4 flex gap-3 items-center justify-between mt-10 md:mt-0 ">
          <div className="flex items-center gap-5 animate-marquee">
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
            <span className="text-black text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-3 h-3 rounded-full bg-black " />
          </div>
        </div>
        <div className="w-full px-8 py-4 mt-20 flex flex-wrap gap-7 justify-center">
          <Card
            name="Hackathon"
            description="Description for Card 1"
            link="#"
            image="/posters/hackathon.png"
          />
          <Card
            name="Code Hunt"
            description="Description for Card 2"
            link="#"
            image="/posters/codehunt.png"
          />
          <Card
            name="Ghost Code"
            description="Description for Card 3"
            link="#"
            image="/posters/ghostcode.png"
          />
          <Card
            name="Graphicon"
            description="Description for Card 4"
            link="#"
            image="/posters/graphicon.png"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
