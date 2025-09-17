"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { BorderBeam } from "../magicui/border-beam";
import { DotBackgroundDemo } from "../dotbackground";

// Lazy load heavy 3D components
const OptimizedRenderModel = dynamic(() => import("../OptimizedRender"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-b from-blue-900/20 to-purple-900/20 animate-pulse" />
});

const Model = dynamic(() => import("./RotatingModal").then(mod => ({ default: mod.Model })), {
  ssr: false
});

gsap.registerPlugin(ScrollTrigger);

// Performance detection utility
const getDevicePerformance = () => {
  if (typeof window === 'undefined') return 'high';
  
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
  
  if (!gl) return 'low';
  
  try {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
    
    // Check for mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return 'low';
    
    // Check for integrated graphics (usually lower performance)
    if (typeof renderer === 'string' && (renderer.includes('Intel') || renderer.includes('AMD Radeon(TM) Graphics'))) {
      return 'medium';
    }
  } catch (error) {
    console.warn('WebGL performance detection failed:', error);
  }
  
  // Check CPU cores and memory as additional indicators
  const cores = navigator.hardwareConcurrency || 2;
  const memory = (navigator as { deviceMemory?: number }).deviceMemory || 4;
  
  if (cores <= 2 || memory <= 4) return 'low';
  if (cores <= 4 || memory <= 8) return 'medium';
  
  return 'high';
};

const OptimizedVerticlesSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [performance, setPerformance] = useState<'low' | 'medium' | 'high'>('medium');
  const [showModel, setShowModel] = useState(false);

  // Performance-based settings
  const settings = useMemo(() => {
    switch (performance) {
      case 'low':
        return {
          modelEnabled: false,
          videoQuality: 'low',
          borderBeamCount: 1,
          animationDuration: 0.5,
          scrollScrub: 0.5,
          lighting: 'minimal'
        };
      case 'medium':
        return {
          modelEnabled: true,
          videoQuality: 'medium',
          borderBeamCount: 1,
          animationDuration: 0.3,
          scrollScrub: 0.3,
          lighting: 'reduced'
        };
      default:
        return {
          modelEnabled: true,
          videoQuality: 'high',
          borderBeamCount: 2,
          animationDuration: 0.25,
          scrollScrub: true,
          lighting: 'full'
        };
    }
  }, [performance]);

  useEffect(() => {
    setPerformance(getDevicePerformance());
    
    // Delay model loading for better initial performance
    const timer = setTimeout(() => {
      setShowModel(true);
    }, settings.modelEnabled ? 1000 : 0);

    return () => clearTimeout(timer);
  }, [settings.modelEnabled]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=300% top",
          scrub: settings.scrollScrub,
          pin: true,
          anticipatePin: 1,
        },
      });

      cardsRef.current.forEach((card) => {
        if (performance === 'low') {
          // Simplified animations for low-end devices
          tl.fromTo(
            card,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: settings.animationDuration }
          );
          tl.to(card, {
            opacity: 0,
            scale: 0.8,
            duration: settings.animationDuration,
          });
        } else {
          // Full animations for better devices
          tl.fromTo(
            card,
            { autoAlpha: 0, xPercent: -100, yPercent: 100 },
            { autoAlpha: 1, xPercent: 0, yPercent: 0, duration: settings.animationDuration }
          );
          tl.to(card, {
            autoAlpha: 0,
            xPercent: 100,
            yPercent: -100,
            duration: settings.animationDuration,
          });
        }
      });
    });

    return () => ctx.revert();
  }, [performance, settings]);

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
        {/* Performance indicator for debugging */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
            Performance: {performance}
          </div>
        )}

        {/* Conditional 3D Model rendering based on performance */}
        {settings.modelEnabled && showModel && (
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <OptimizedRenderModel 
              className="w-full h-full" 
              environment={settings.lighting === 'minimal' ? undefined : 'city'}
              performance={performance}
            >
              <Model performance={performance} />
            </OptimizedRenderModel>
          </div>
        )}

        {/* Optimized Cards container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => setRef(el, i)}
              className="absolute border-2 border-black rounded-xl bg-black"
            >
              {/* Optimized video loading */}
              <video
                className="w-full max-w-2xl rounded-lg"
                autoPlay={performance !== 'low'}
                muted
                loop
                playsInline
                preload={performance === 'low' ? 'none' : 'metadata'}
                style={{
                  maxWidth: performance === 'low' ? '480px' : '768px'
                }}
              >
                <source src={`/video/${i + 1}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Conditional BorderBeam effects */}
              {settings.borderBeamCount >= 1 && (
                <BorderBeam
                  duration={performance === 'low' ? 8 : 6}
                  size={performance === 'low' ? 300 : 400}
                  className="from-transparent via-orange-300 to-transparent"
                />
              )}
              {settings.borderBeamCount >= 2 && (
                <BorderBeam
                  duration={performance === 'low' ? 8 : 6}
                  delay={3}
                  size={performance === 'low' ? 300 : 400}
                  borderWidth={2}
                  className="from-transparent via-blue-300 to-transparent"
                />
              )}
              
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 flex items-center justify-center p-6 w-full text-white">
                <h2 className="text-4xl font-anton tracking-wider text-white/40 mb-2">
                  {i + 1 === 1 ? "Software" : i + 1 === 2 ? "Hardware" : "Esports"}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </DotBackgroundDemo>
    </section>
  );
};

export default OptimizedVerticlesSections;
