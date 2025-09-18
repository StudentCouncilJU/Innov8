"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LazyComponent from "@/components/LazyComponent"

// Lazy load heavy components
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-screen bg-black animate-pulse" />
})

const Team = dynamic(() => import("@/components/Team"), {
  ssr: false,
  loading: () => <div className="h-96 bg-blue-600 animate-pulse" />
})

const LabSection = dynamic(() => import("@/components/lab/lab-section"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})

const VerticlesSections = dynamic(() => import("@/components/Verticles/VerticlesSections"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-800 animate-pulse" />
})

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current

      if (!container) return

      // LabSection background
      ScrollTrigger.create({
        trigger: "#lab",
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
        onEnterBack: () =>
          gsap.to(container, { backgroundColor: "#000000", duration: 1.5, ease: "power2.inOut" }),
      })

      // Team background
      ScrollTrigger.create({
        trigger: "#team",
        start: "top center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(container, { backgroundColor: "#0f1ef0", duration: 1.5, ease: "power2.inOut" }),
        onEnterBack: () =>
          gsap.to(container, { backgroundColor: "#0f1ef0", duration: 1.5, ease: "power2.inOut" }),
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])


  return (
    <div className="w-full h-screen bg-black relative">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div ref={containerRef} className="w-full min-h-screen bg-black relative transition-colors duration-1000">
        
      <LazyComponent fallback={<div className="h-96 bg-gray-800 animate-pulse" />}>
          <VerticlesSections />
        </LazyComponent>
        
        
        {/* Lab Section */}
        <div id="lab">
          <LabSection />
        </div>
        
        {/* Team Section with Lazy Loading
        <LazyComponent fallback={<div className="h-96 mt-10 bg-blue-600 animate-pulse" />}>
          <div id="team">
            <Team />
          </div>
        </LazyComponent> */}
      </div>
      
      {/* Footer with Lazy Loading */}
      <LazyComponent fallback={<div className="h-screen bg-black animate-pulse" />}>
        <Footer />
      </LazyComponent>
    </div>
  )
}
