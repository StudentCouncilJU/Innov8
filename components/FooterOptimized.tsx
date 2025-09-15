"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [videoState, setVideoState] = useState<'loading' | 'loaded' | 'error' | 'timeout'>('loading');
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set a timeout for video loading
    timeoutRef.current = setTimeout(() => {
      if (videoState === 'loading') {
        console.log('Video loading timeout - switching to gradient background');
        setVideoState('timeout');
      }
    }, 8000); // 8 second timeout

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [videoState]);

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoState('loaded');
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleVideoError = (error: any) => {
    console.error('Video failed to load:', error);
    setVideoState('error');
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div id="footer" className="relative min-h-screen w-full overflow-hidden">
      {/* Always show fallback background first */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black z-0" />
      
      {/* Video - only try to load if we haven't timed out or errored */}
      {videoState !== 'error' && videoState !== 'timeout' && (
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 w-screen h-screen object-cover transition-opacity duration-1000 ${
            videoState === 'loaded' ? 'z-10 opacity-100' : 'z-5 opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          onError={handleVideoError}
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            width: "100vw",
            height: "100vh",
          }}
        >
          <source src="/innov8.mp4" type="video/mp4" />
        </video>
      )}

      {/* Loading indicator - only show briefly */}
      {videoState === 'loading' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-white/80 text-sm font-anton animate-pulse">
            Loading Experience...
          </div>
        </div>
      )}

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 z-20 text-white/70 text-xs bg-black/50 p-2 rounded">
          Video State: {videoState}
        </div>
      )}

      {/* Content overlay */}
      <div className="relative z-30 flex items-end justify-between md:items-end md:justify-center min-h-screen px-6">
        <div className="text-white/40 hidden md:block stroke-2 stroke-amber-300 text-3xl md:text-[10rem] uppercase -mb-15  font-big-shoulders-extrabold tracking-wider">
          Ju Innov8 3.0
        </div>
        {/* Collaboration Form */}
        <div className="bg-white/30 backdrop-blur-sm mx-auto rounded-t-full px-8 md:px-12 pt-8 md:pt-12 max-w-[25rem] w-full shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8 flex flex-col gap-3 h-full justify-between items-center">
            <h1 className="text-xl md:text-3xl w-full  uppercase font-anton tracking-wide text-white mb-6">
              Find US!
            </h1>

            {/* Google Maps */}
            <div className="mb-6 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.9312881326605!2d75.87389800094068!3d26.776580151088893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1757135014600!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>

            {/* Instagram Links */}
            <div className="space-y-3 w-full">
              <a
                href="https://www.instagram.com/student_council_ju/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white font-anton tracking-widest text-center py-3 px-4 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                @Student_Council_JU
              </a>
              <a
                href="https://www.instagram.com/jecrcuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white font-anton tracking-widest text-center py-3 px-4 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                @jecrcuniversity
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="-space-y-1 mt-5 w-full">
              {/* Phone 1 - Left aligned */}
              <div className="text-left">
                <a
                  href="tel:+919664330564"
                  className="text-white hover:text-white/80 transition-colors duration-200 font-anton tracking-wide"
                >
                  +91 96643 30564
                </a>
              </div>

              {/* Phone 2 - Right aligned */}
              <div className="text-right">
                <a
                  href="tel:+918619964199"
                  className="text-white hover:text-white/80 transition-colors duration-200 font-anton tracking-wide"
                >
                 +91 861 996 4199
                </a>
              </div>

              {/* Phone 3 - Left aligned */}
              <div className="text-left">
                <a
                  href="tel:+918003150294"
                  className="text-white hover:text-white/80 transition-colors duration-200 font-anton tracking-wide"
                >
                  +91 80031 50294
                </a>
              </div>
            </div>
            <div className="w-full">
              {/* copyright */}
              <p className="text-sm text-center text-white font-anton ">
                &copy; {new Date().getFullYear()} Ju Innov8 . All rights
                reserved.
              </p>
            </div>
            <div className="w-full">
              {/* copyright */}
              <p className="text-sm text-center text-white font-anton ">
                Build by <Link className="text-blue-600" href="https://amanjanwani.me">Aman Janwani</Link> and designed by Saksham Saraogi
              </p>
            </div>
        <div className="text-white/40 md:hidden  stroke-2 stroke-amber-300 text-5xl uppercase -mb-12  font-big-shoulders-extrabold tracking-wider">
          Ju Innov8 3.0
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
