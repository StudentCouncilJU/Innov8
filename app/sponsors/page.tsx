"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorGrid from "@/components/sponsers/SponsorGrid";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="w-full pt-20 sm:pt-28 md:pt-8 flex flex-col items-center min-h-screen bg-black pb-8">
        {/* Title Section */}
        <h1 className="text-white uppercase font-anton text-[4rem] sm:text-[6rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] text-center px-4">
          Sponsors
        </h1>
        
        {/* Header Section with Marquee */}
        <div className="w-full bg-[#23D3ED] p-2 sm:p-4 flex gap-2 sm:gap-3 items-center justify-between mt-6 sm:mt-10 md:mt-0 overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-5 animate-marquee whitespace-nowrap">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Our Sponsors
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Powered By Innovation
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Our Sponsors
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Powered By Innovation
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Our Sponsors
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Powered By Innovation
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Our Sponsors
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
            <span className="text-black text-lg sm:text-2xl font-anton uppercase tracking-wider text-nowrap">
              Powered By Innovation
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black" />
          </div>
        </div>

        {/* Description */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-12">
          <p className="text-white/60 text-center text-base sm:text-lg max-w-3xl mx-auto">
            We are grateful to our sponsors who make JU Innov8 3.0 possible. Their support empowers innovation and helps us create an unforgettable experience for all participants.
          </p>
        </div>

        {/* Sponsor Grid */}
        <SponsorGrid />
      </div>

      <Footer />
    </div>
  );
};

export default SponsorsPage;
