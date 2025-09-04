// import React from 'react'
// import RenderModel from '../Render'
// import { Model } from './RotatingModal'

// const VerticlesSections = () => {
//   return (
//     <section id='model-section' className='w-full bg-black flex justify-center relative'>
//         <div className='w-full h-screen absolute inset-'>
//             <RenderModel >
//             <Model />
//             </RenderModel>
//         </div>
//         <div className='relative z-10 flex flex-col items-center justify-center gap-10 pt-20'>
//           <div className='p-20 border-2 bg-red-500 border-white rounded-xl mb-10 opacity-50'>
//             <h1 className='text-white text-4xl md:text-6xl font-bold text-center'>Innovative Solutions</h1>
//             <p className='text-white text-center mt-4 max-w-2xl mx-auto'>Discover cutting-edge technology and creative designs that push the boundaries of innovation. Our solutions are crafted to meet the demands of the future, today.</p>
//           </div>
//           <div className='p-20 border-2 bg-red-500 border-white rounded-xl mb-10 opacity-50'>
//             <h1 className='text-white text-4xl md:text-6xl font-bold text-center'>Innovative Solutions</h1>
//             <p className='text-white text-center mt-4 max-w-2xl mx-auto'>Discover cutting-edge technology and creative designs that push the boundaries of innovation. Our solutions are crafted to meet the demands of the future, today.</p>
//           </div>
//           <div className='p-20 border-2 bg-red-500 border-white rounded-xl mb-10 opacity-50 '>
//             <h1 className='text-white text-4xl md:text-6xl font-bold text-center'>Innovative Solutions</h1>
//             <p className='text-white text-center mt-4 max-w-2xl mx-auto'>Discover cutting-edge technology and creative designs that push the boundaries of innovation. Our solutions are crafted to meet the demands of the future, today.</p>
//           </div>
//         </div>
//     </section>
//   )
// }

// export default VerticlesSections

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RenderModel from "../Render";
import { Model } from "./RotatingModal";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";
// import { MovingBorder } from "../ui/moving-border";
import { BorderBeam } from "../magicui/border-beam";
import { DotBackgroundDemo } from "../dotbackground";

gsap.registerPlugin(ScrollTrigger);

const VerticlesSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=300% top", // enough room for 3 cards
          scrub: true,
          pin: true,
        },
      });

      cardsRef.current.forEach((card) => {
        tl.fromTo(
          card,
          { autoAlpha: 0, xPercent: -100, yPercent: 100 },
          { autoAlpha: 1, xPercent: 0, yPercent: 0, duration: 0.25 }
        );
        tl.to(card, {
          autoAlpha: 0,
          xPercent: 100,
          yPercent: -100,
          duration: 0.25,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const setRef = (el: HTMLDivElement | null, i: number) => {
    if (el) {
      cardsRef.current[i] = el;
    }
  };

  return (
    <section
      id="verticles-section"
      ref={containerRef}
      className="w-full h-screen bg-black flex justify-center relative overflow-hidden"
    >
      <DotBackgroundDemo>
        {/* 3D Model stays pinned */}
      <div className="w-full h-screen absolute inset-0 pointer-events-none">
        <RenderModel>
          <Model />
        </RenderModel>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => setRef(el, i)}
            className="absolute  border-2 border-black rounded-xl bg-black"
          >
            <video
              className="w-full max-w-2xl rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={`/video/${i + 1}.mp4`} type="video/mp4" />
              {/* <source src={`/videos/video-${i + 1}.webm`} type="video/webm" /> */}
              Your browser does not support the video tag.
            </video>
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-orange-300 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-300 to-transparent"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 flex items-center justify-center p-6 w-full text-white">
              <h2 className="text-4xl font-anton tracking-wider text-white/40 mb-2">{i + 1 === 1 ? "Software" : i + 1 === 2 ? "Hardware" : "Esports"}</h2>
            </div>
          </div>
        ))}
      </div>
      </DotBackgroundDemo>
    </section>
  );
};

export default VerticlesSections;
