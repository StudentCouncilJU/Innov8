"use client";

import { useState } from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
}

const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "EaseMyTrip",
    logo: "/sponsors/easemytrip.svg",
    website: "https://www.easemytrip.com/",
  },
  {
    id: "2",
    name: "Utopian Drinks",
    logo: "/sponsors/utopianDrinks.png",
    website: "https://example.com",
  },
  {
    id: "3",
    name: "Internshala",
    logo: "/sponsors/internshala.png",
    website: "https://internshala.com/",
  },
  {
    id: "4",
    name: "Unstop",
    logo: "/sponsors/unstop.svg",
    website: "https://unstop.com/",
  },
  {
    id: "5",
    name: "WS Cube Tech",
    logo: "/sponsors/wslogo.svg",
    website: "https://www.wscubetech.com/",
  },
  {
    id: "6",
    name: "Plum",
    logo: "/sponsors/plum.png",
    website: "https://plumgoodness.com/",
  },
];

const SponsorGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Sponsor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            onMouseEnter={() => setHoveredId(sponsor.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Card Container */}
            <div className="relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-neutral-800 bg-transparent p-8 transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Glow Effect on Hover */}
              {hoveredId === sponsor.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
              )}

              {/* Border Beam Animation */}
              <BorderBeam
                duration={8}
                delay={parseInt(sponsor.id) * 0.5}
                size={400}
                borderWidth={2}
                className={`from-transparent via-blue-400 to-transparent ${
                  hoveredId === sponsor.id ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              />

              {/* Logo Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full aspect-video max-w-[280px]">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Sponsor Name Tooltip on Hover */}
              {hoveredId === sponsor.id && (
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-anton uppercase tracking-wide text-sm text-center truncate">
                    {sponsor.name}
                  </p>
                </div>
              )}
            </div>

            {/* External Link Icon */}
            <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-white/60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Become a Sponsor CTA */}
      <div className="mt-16 text-center">
        <div className="inline-block relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          <button
            onClick={() => {
              const footerElement = document.getElementById('footer');
              if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative inline-flex items-center gap-2 bg-blue-600 text-white border-2 border-blue-600 hover:bg-transparent hover:border-white duration-300 font-anton tracking-wide py-3 px-8 text-lg rounded-full cursor-pointer"
          >
            <span>Become a Sponsor</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-white/40 text-sm">
          Partner with us to empower the next generation of innovators
        </p>
      </div>
    </div>
  );
};

export default SponsorGrid;
