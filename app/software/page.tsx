"use client";
import Card from "@/components/domainscomponents/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="w-full pt-20 sm:pt-28 md:pt-8 flex flex-col items-center min-h-screen bg-black pb-8">
        <h1 className="text-white uppercase font-anton text-[4rem] sm:text-[6rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] text-center px-4">
          Software
        </h1>
        <div className="w-full bg-[#23D3ED] p-2 sm:p-4 flex gap-2 sm:gap-3 items-center justify-between mt-6 sm:mt-10 md:mt-0 overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-5 animate-marquee whitespace-nowrap">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Hackathon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Code Hunt
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Ghost Code
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Graphicon
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black " />
          </div>
        </div>
        <div className="w-full px-4 sm:px-6 md:px-8 py-4 mt-8 sm:mt-14 md:mt-20 flex flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center">
          <Card
            name="Bid2code"
            description={``}
            link="#"
            image="/posters/bid2cote.png"
          />
          <Card
            name="Code Hunt"
            description={`### About

In this event, we test your grasp on programming languages through a series of questions about coding and finding an output. It is a competitive, time-bound game consisting of **4 knockout levels**. In each level, you have to solve a problem statement using your desired programming language and reach an output. After each round, you will receive a clue of where to find your next problem statement. The level of questions increases after each round.

### Team

A team may consist of a maximum of **3 participants** and a minimum of **1 participant**.

### Requirements

- You need to bring your own laptop (with an offline compiler installed).  
- No sort of internet will be provided, and phones will be kept for security.

### Rules and Regulations

- One of the team players will solve the code, and the other is meant to run to the location in the code and bring back the envelope.  
- The seal of the envelope must be opened in front of the coordinator. If the seal is found broken, you will be disqualified.  
- The decision of the judge is final and not subject to review or appeal.  
- You can code in any language and on any compiler **EXCEPT PYTHON**.  
- Use of any unfair means will lead to disqualification, including the use of Google or any AI to steal or copy code.  
- Rules are subject to change before the final briefing session.

> **Note:** Violation of any of the above rules will lead to disqualification.
`}
            link="#"
            image="/posters/codehunt.png"
          />
          <Card
            name="Bug Bounty"
            description={`coming soon...`}
            link="#"
            image="/posters/bugbounty.png"
          />
          <Card
            name="Promtify"
            description={`Coming Soon...`}
            link="#"
            image="/posters/promptify.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
