// utils/performance.ts
export const getDevicePerformanceLevel = (): 'low' | 'medium' | 'high' => {
  if (typeof window === 'undefined') return 'medium';
  
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) return 'low';
  
  const glContext = gl as WebGLRenderingContext;
  const renderer = glContext.getParameter(glContext.RENDERER);
  // const vendor = glContext.getParameter(glContext.VENDOR); // Removed unused variable
  
  // Check for mobile devices
  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return 'low';
  }
  
  // Check memory if available
  if ('deviceMemory' in navigator) {
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    if (memory && memory <= 4) return 'low';
    if (memory && memory <= 8) return 'medium';
  }
  
  // Check CPU cores
  if ('hardwareConcurrency' in navigator) {
    const cores = navigator.hardwareConcurrency;
    if (cores <= 2) return 'low';
    if (cores <= 4) return 'medium';
  }
  
  // Check for integrated graphics
  if (renderer && renderer.toString().toLowerCase().includes('intel')) {
    return 'medium';
  }
  
  return 'high';
};

export const getOptimalSettings = () => {
  const level = getDevicePerformanceLevel();
  
  switch (level) {
    case 'low':
      return {
        particleCount: 50,  // Much lower
        shadowsEnabled: false,
        fps: 20,  // Lower FPS
        dpr: [0.5, 1],
        enablePostProcessing: false,
      };
    case 'medium':
      return {
        particleCount: 150,  // Reduced
        shadowsEnabled: false,  // Disable shadows even on medium
        fps: 30,  // Lower FPS
        dpr: [1, 1.5],
        enablePostProcessing: false,
      };
    case 'high':
    default:
      return {
        particleCount: 300,  // Much lower than before
        shadowsEnabled: true,
        fps: 60,
        dpr: [1, 2],
        enablePostProcessing: true,
      };
  }
};
