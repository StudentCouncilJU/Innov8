"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import { Environment, PerformanceMonitor, SpotLight } from "@react-three/drei";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
  environment?: string;
}

const RenderModel = ({ children, className, environment = "sunset" }: RenderModelProps) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen  absolute inset-0", className)}
      shadows
      dpr={[1, 2]}

    >
      {/* Environment Lighting */}
      {environment && <Environment preset="forest" />}

      {/* Add a spotlight for better illumination
      <SpotLight
        position={[0, 5, 0]} // Adjust lighting to match the larger model
        angle={0.1}
        penumbra={1}
        intensity={0.6}
        decay={2}
        castShadow
      /> */}

      <PerformanceMonitor>
        <Suspense fallback={null}>{children}</Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
};

export default RenderModel;