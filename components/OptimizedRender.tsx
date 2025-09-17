"use client";

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useMemo } from "react";
import { Environment, PerformanceMonitor } from "@react-three/drei";

interface OptimizedRenderModelProps {
  children: React.ReactNode;
  className?: string;
  environment?: string;
  performance?: 'low' | 'medium' | 'high';
}

const OptimizedRenderModel = ({ 
  children, 
  className, 
  environment = "sunset",
  performance = 'high'
}: OptimizedRenderModelProps) => {

  // Performance-based Canvas settings
  const canvasSettings = useMemo(() => {
    switch (performance) {
      case 'low':
        return {
          dpr: [0.5, 1] as [number, number],
          shadows: false,
          antialias: false,
          alpha: true,
          powerPreference: 'default' as const,
          frameloop: 'demand' as const
        };
      case 'medium':
        return {
          dpr: [1, 1.5] as [number, number],
          shadows: true,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance' as const,
          frameloop: 'always' as const
        };
      default:
        return {
          dpr: [1, 2] as [number, number],
          shadows: true,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance' as const,
          frameloop: 'always' as const
        };
    }
  }, [performance]);

  // Performance-based lighting
  const renderLighting = useMemo(() => {
    switch (performance) {
      case 'low':
        return (
          <>
            <ambientLight intensity={0.8} />
          </>
        );
      case 'medium':
        return (
          <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
          </>
        );
      default:
        return (
          <>
            {environment && <Environment preset="forest" />}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />
          </>
        );
    }
  }, [performance, environment]);

  const handlePerformanceChange = (details: { fps: number }) => {
    // Auto-adapt performance based on FPS
    if (details.fps < 20 && performance !== 'low') {
      console.warn('Low FPS detected, consider reducing quality');
    }
  };

  return (
    <Canvas
      className={clsx("w-full h-full", className)}
      shadows={canvasSettings.shadows}
      dpr={canvasSettings.dpr}
      frameloop={canvasSettings.frameloop}
      gl={{ 
        alpha: canvasSettings.alpha, 
        antialias: canvasSettings.antialias,
        powerPreference: canvasSettings.powerPreference,
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: true
      }}
    >
      {renderLighting}

      <PerformanceMonitor
        onIncline={handlePerformanceChange}
        onDecline={handlePerformanceChange}
        bounds={() => [15, 60]}
        flipflops={3}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
};

export default OptimizedRenderModel;
