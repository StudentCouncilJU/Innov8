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
          {/* <Card
            name="Hackathon"
            description={``}
            link="#"
            image="/posters/hackathon.png"
          /> */}
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
            name="Ghost Code"
            description={`### About

All participants are required to adhere to these rules throughout the event. In this event, we take you on a journey designed to challenge your logical thinking and problem-solving skills, all without the use of a computer screen. Participants will go through three rounds, with each round presenting a unique logical problem to challenge their critical thinking and problem-solving abilities.

### Team

A team may consist of a maximum of 2 participants and a minimum of 1 participant.

### Rules and Regulations

- **Platform:** Participants are required to use only an online compiler for the event.  
- Any participant found using unfair methods will be immediately disqualified.

#### Round 1 (Easy Level)
- Participants will be given **20 minutes** to code the solution for the given questions in the first round.  
**Scoring:**  
  - 10 points for a perfect answer.  
  - 1 point will be deducted for every error.

#### Round 2 (Intermediate Level)
- Participants will be given **40 minutes** to code the solution for the given questions in the second round.  
**Scoring:**  
  - 10 points for a perfect answer.  
  - 1 point will be deducted for every error.

#### Round 3 (Final Level)
- Participants will be given a total of **40 minutes** to solve a single question.  
- The round is divided into two phases:  
    1. First phase – 20 minutes of coding with the screen turned on.  
    2. After a minute pause, the screen will be turned off, and participants will continue coding for the remaining time with the screen off.  
**Scoring:**  
  - 10 points for a perfect answer.  
  - 1 point will be deducted for every error.

- Ensure you have a stable internet connection for the duration of the event.  
- Maintain decorum and follow instructions provided by the organizers.  
- The decisions of the organizing committee will be final and binding in all matters.  

Good luck to all participants and may the best coder win!

> **Note:** Violation of any of the above rules will lead to disqualification.
`}
            link="#"
            image="/posters/ghostcode.png"
          />
          <Card
            name="Graphicon"
            description={`### About

This exciting competition is the perfect platform to showcase your creativity, innovation, and design skills. Whether you're a seasoned designer or a budding artist, this event encourages participants to push the boundaries of visual communication through various challenges. You'll get to express your unique style, explore design trends, and create impactful visuals. Get ready to turn your imagination into stunning graphics and compete with fellow designers for the top spot!

### Team

Only single participation is allowed.

### Rules and Regulations

- The designs must not contain any abusive language, racial slurs, or hateful remarks against any religion, caste, or community.  
- Software like **Adobe Firefly, Stable Diffusion, Dall-E, etc.** can be used.  
- No external reference is allowed; only the given set of resources must be used.  
- In case of a tie, preference will be given to the criteria mentioned above in decreasing order of weightage.  
- The event manager reserves the right to disqualify any participant if any section of the content is deemed inappropriate.  
- The decision made by the judges will be final and binding.

> **Note:** Violation of any of the above rules will lead to disqualification.
`}
            link="#"
            image="/posters/graphicon.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
