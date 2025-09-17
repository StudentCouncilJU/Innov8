"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerformanceMonitor } from '@react-three/drei';
import { getOptimalSettings } from '@/lib/performance';
import LoadingSpinner from './LoadingSpinner';

interface Performance3DLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const Performance3DLoader: React.FC<Performance3DLoaderProps> = ({ 
  children, 
  fallback = <div className="h-full w-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />,
  className = ""
}) => {
  const [settings, setSettings] = useState(getOptimalSettings());
  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Delay 3D rendering for better initial page load
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePerformanceChange = (details: { fps: number }) => {
    if (details.fps < 20) {
      setSettings(prev => ({
        ...prev,
        particleCount: Math.max(50, prev.particleCount * 0.5),
        shadowsEnabled: false,
        fps: 20
      }));
    } else if (details.fps < 30) {
      setSettings(prev => ({
        ...prev,
        particleCount: Math.max(100, prev.particleCount * 0.7),
        enablePostProcessing: false
      }));
    }
  };

  if (!isReady) {
    return (
      <div className={`relative ${className}`}>
        {fallback}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <LoadingSpinner message="Initializing 3D Experience..." />
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className={`relative ${className}`}>
        {fallback}
        <div className="absolute top-4 left-4 text-white/50 text-xs">
          3D content unavailable
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        className="w-full h-full"
        shadows={settings.shadowsEnabled}
        dpr={settings.dpr as [number, number]}
        gl={{ 
          antialias: settings.enablePostProcessing,
          alpha: true,
          powerPreference: "high-performance"
        }}
        frameloop="demand"
        onCreated={() => console.log('3D Canvas initialized')}
      >
        {settings.enablePostProcessing && <Environment preset="city" />}
        
        {/* Minimal lighting for model visibility - same as original setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <PerformanceMonitor
          onIncline={handlePerformanceChange}
          onDecline={handlePerformanceChange}
          flipflops={3}
          bounds={() => [20, 60]}
        >
          <Suspense 
            fallback={null}
          >
            <ErrorBoundary onError={() => setLoadError(true)}>
              {children}
            </ErrorBoundary>
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
};

// Simple Error Boundary for 3D components
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('3D Component Error:', error);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

export default Performance3DLoader;
