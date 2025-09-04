"use client"

import Footer from "@/components/Footer"
import { GlowingSphere } from "@/components/glowing-sphere"
import Hero from "@/components/Hero"
import LabSection from "@/components/lab/lab-section"
import { Model } from "@/components/models/Model"
import Navbar from "@/components/Navbar"
import RenderModel from "@/components/Render"
import VerticlesSections from "@/components/Verticles/VerticlesSections"

export default function Home() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Navbar />
      <div className="absolute inset-0 z-10">
        <RenderModel>
          <Model />
          <GlowingSphere scale={5} />
        </RenderModel>
      </div>
      <Hero />
      <VerticlesSections />
      <LabSection />
      <Footer />
    </div>
  )
}
