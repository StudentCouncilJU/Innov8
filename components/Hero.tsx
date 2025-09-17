"use client";
import React from "react";
import Performance3DLoader from "./Performance3DLoader";
// import OptimizedHeroModel from "./OptimizedHeroModel";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect, useRef, useState } from "react";
import VortexDemoSecond from "./vortex-demo-2";
import { Model } from "./models/Model";
import RenderModel from "./Render";

function Hero() {
  const cursor = useRef({ x: 0, y: 0 });
  const [show3D, setShow3D] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursor.current.x = e.clientX / window.innerWidth - 0.5;
      cursor.current.y = e.clientY / window.innerHeight - 0.5;
    };

    // Show loading first, then start 3D model loading after delay
    const timer = setTimeout(() => {
      setShow3D(true);
      // Hide loading after model has had time to load
      setTimeout(() => setIsLoading(false), 2000);
    }, 800);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center relative">
      <div className="w-full h-full flex px-10 py-10 flex-1">
        <div className="absolute inset-0">
          {/* Background vortex effect */}
          <div className="absolute inset-0 z-0">
            <VortexDemoSecond />
          </div>
          
          {/* Loading state before 3D model */}
          {!show3D && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <LoadingSpinner message="Initializing Robot Model..." />
            </div>
          )}
          
          {/* Optimized 3D Model with conditional loading */}
          {show3D && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              {/* <Performance3DLoader 
                className="w-full h-full"
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LoadingSpinner message="Loading Robot Model..." />
                  </div>
                }
              > */}
                <RenderModel>
                  <Model />
                </RenderModel>
              {/* </Performance3DLoader> */}
            </div>
          )}
          
          {/* Loading overlay during initial load */}
          {isLoading && (
            <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-1000">
              <div className="text-center">
                <LoadingSpinner message="Loading Experience..." />
                <p className="mt-4 text-white/60 font-anton text-sm">Preparing 3D Environment...</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col z-30 justify-end items-start gap-4 w-full">
          <h1 className="uppercase font-anton text-white text-6xl md:text-8xl">
            JU Innov8 3.0
          </h1>
          <p className="font-sans capitalize text-md max-w-2xl text-white line-clamp-2 md:line-clamp-3">
            Immerse yourself in a hub of technological innovation at INNOV8,
            where the brightest minds in Software, Hardware, and eSports
            converge to compete and collaborate. From crafting software
            solutions to engineering hardware prototypes and
            mastering the world of gaming.
          </p>
          <h2 className="font-anton text-white text-2xl md:text-4xl">9th - 11th October</h2>
          <button onClick={() => {
            const footerElement = document.getElementById('domains');
            if (footerElement) {
              footerElement.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-3 px-8 text-lg rounded-full">
            Register Now
          </button>
        </div>
      </div>
      <div className="w-full flex justify-end items-center h-32 z-10 absolute bg-gradient-to-t from-black to-transparent bottom-0" />
    </div>
  );
}

export default Hero;
