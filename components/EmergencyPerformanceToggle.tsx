"use client";
import { useState, useEffect } from 'react';

export const useEmergencyPerformance = () => {
  const [emergencyMode, setEmergencyMode] = useState(false);

  useEffect(() => {
    // Auto-enable emergency mode on very low-end devices
    const isLowEnd = () => {
      if (typeof window === 'undefined') return false;
      
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasLowMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory && (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 2;
      const hasLowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      
      return isMobile || hasLowMemory || hasLowCores;
    };

    if (isLowEnd()) {
      setEmergencyMode(true);
    }

    // Listen for performance issues
    const checkPerformance = () => {
      const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (memoryInfo && memoryInfo.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
        setEmergencyMode(true);
      }
    };

    const interval = setInterval(checkPerformance, 5000);
    return () => clearInterval(interval);
  }, []);

  return { emergencyMode, setEmergencyMode };
};

export const EmergencyPerformanceToggle = () => {
  const { emergencyMode, setEmergencyMode } = useEmergencyPerformance();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-red-600 text-white p-2 rounded text-xs">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={emergencyMode}
          onChange={(e) => setEmergencyMode(e.target.checked)}
        />
        Emergency Mode {emergencyMode ? 'ON' : 'OFF'}
      </label>
    </div>
  );
};

export default EmergencyPerformanceToggle;
