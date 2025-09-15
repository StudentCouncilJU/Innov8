"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useState } from "react";
import { Environment, PerformanceMonitor } from "@react-three/drei";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
  environment?: string;
}

const RenderModel = ({ children, className, environment = "sunset" }: RenderModelProps) => {
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);
  const [performance, setPerformance] = useState<'low' | 'medium' | 'high'>('high');

  const handlePerformanceChange = (details: { fps: number }) => {
    if (details.fps < 30) {
      setDpr([0.5, 1]);
      setPerformance('low');
    } else if (details.fps < 50) {
      setDpr([1, 1.5]);
      setPerformance('medium');
    }
  };

  return (
    <Canvas
      className={clsx("w-screen h-screen absolute inset-0", className)}
      shadows={performance !== 'low'}
      dpr={dpr}
      gl={{ 
        antialias: performance === 'high',
        alpha: false,
        powerPreference: "high-performance"
      }}
      performance={{ min: 0.5 }}
      frameloop="demand" // Only render when needed
    >
      {/* Environment Lighting - Simplified for low performance */}
      {environment && performance !== 'low' && <Environment preset="forest" />}

      <PerformanceMonitor
        onIncline={handlePerformanceChange}
        onDecline={handlePerformanceChange}
        flipflops={3}
        bounds={() => [50, 90]}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
};

export default RenderModel;