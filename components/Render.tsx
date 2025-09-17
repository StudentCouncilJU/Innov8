"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import { Environment, PerformanceMonitor } from "@react-three/drei";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
  environment?: string;
}

const RenderModel = ({ children, className, environment = "sunset" }: RenderModelProps) => {
  return (
    <Canvas
      className={clsx("w-full h-full", className)}
      shadows
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      {/* Environment Lighting - better for hologram model */}
      {environment && <Environment preset="city" />}
      
      {/* Additional lighting for better model visibility */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      <PerformanceMonitor>
        <Suspense fallback={null}>{children}</Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
};

export default RenderModel;