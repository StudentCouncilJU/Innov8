"use client";
import React from "react";
// import RenderModel from "./Render";
// import { Model } from "./models/Model";
// import { GlowingSphere } from "./glowing-sphere";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { Vortex } from "./vortex";
import VortexDemoSecond from "./vortex-demo-2";

function Hero() {
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursor.current.x = e.clientX / window.innerWidth - 0.5; // normalized -0.5 to 0.5
      cursor.current.y = e.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center relative">

      <div className="w-full h-full flex px-10 py-10 flex-1">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-0">
            <VortexDemoSecond />
          </div>
          {/* <RenderModel>
            <Model />
            <GlowingSphere scale={5} />
          </RenderModel> */}
        </div>
        <div className="flex flex-col z-50 justify-end items-start gap-4 w-full">
          <h1 className="uppercase font-impact text-white text-8xl">
            JU Innov8 &apos; 25
          </h1>
          <p className="font-sans capitalize text-md max-w-2xl text-white">
            Immerse yourself in a hub of technological innovation at INNOV8,
            where the brightest minds in Software, Hardware, and eSports
            converge to compete and collaborate.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end items-center h-32 z-10 absolute bg-gradient-to-t from-black to-transparent bottom-0"/>
    </div>
  );
}

export default Hero;
