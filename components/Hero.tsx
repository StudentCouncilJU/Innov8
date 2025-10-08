"use client";
import React from "react";
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
          <div className="flex flex-wrap gap-4">
            <button onClick={() => {
              const footerElement = document.getElementById('domains');
              if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });
              }
            }} className="bg-blue-600 text-white border-blue-600 border-2 hover:bg-transparent hover:border-white duration-300 cursor-pointer font-anton tracking-wide py-3 px-8 text-lg rounded-full">
              Register Now
            </button>
            <a 
              href="/Guidelines.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent text-white border-white border-2 hover:bg-white hover:text-black duration-300 cursor-pointer font-anton tracking-wide py-3 px-8 text-lg rounded-full inline-flex items-center gap-2"
            >
              <span>Guidelines</span>
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center h-32 z-10 absolute bg-gradient-to-t from-black to-transparent bottom-0" />
    </div>
  );
}

export default Hero;
