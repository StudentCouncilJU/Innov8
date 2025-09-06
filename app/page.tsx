"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Footer from "@/components/Footer"
import { GlowingSphere } from "@/components/glowing-sphere"
import Hero from "@/components/Hero"
import LabSection from "@/components/lab/lab-section"
import { Model } from "@/components/models/Model"
import Navbar from "@/components/Navbar"
import RenderModel from "@/components/Render"
import Team from "@/components/Team"
import VerticlesSections from "@/components/Verticles/VerticlesSections"

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
      <div className="absolute inset-0 z-20">
        <RenderModel>
          <Model />
          <GlowingSphere scale={5} />
        </RenderModel>
      </div>
      <Hero />
      <VerticlesSections />
     <div ref={containerRef} className="w-full min-h-screen bg-black relative transition-colors duration-1000">
      <div id="lab">
        <LabSection />
      </div>
      <div id="team">
        <Team />
      </div>
     </div>
      <Footer />
    </div>
  )
}
