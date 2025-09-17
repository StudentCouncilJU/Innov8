// Performance monitoring script to validate improvements
console.log('🚀 Performance Monitoring Active');

// Monitor FPS
let frames = 0;
let lastTime = performance.now();
const fpsElement = document.createElement('div');
fpsElement.style.cssText = `
  position: fixed; 
  top: 50px; 
  right: 10px; 
  background: rgba(0,0,0,0.8); 
  color: white; 
  padding: 10px; 
  font-family: monospace;
  font-size: 12px;
  z-index: 10000;
  border-radius: 4px;
`;
document.body.appendChild(fpsElement);

function updateFPS() {
  frames++;
  const currentTime = performance.now();
  if (currentTime - lastTime >= 1000) {
    const fps = Math.round((frames * 1000) / (currentTime - lastTime));
    const memory = performance.memory;
    
    fpsElement.innerHTML = `
      FPS: ${fps}<br>
      Memory: ${memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB' : 'N/A'}<br>
      Particles: ${document.querySelectorAll('canvas').length} canvases<br>
      Device: ${window.innerWidth < 768 ? 'Mobile' : 'Desktop'}
    `;
    
    frames = 0;
    lastTime = currentTime;
  }
  requestAnimationFrame(updateFPS);
}

updateFPS();

// Log performance improvements
console.log('✅ Applied Performance Improvements:');
console.log('- Particle counts reduced by 60-80%');
console.log('- Video preload disabled on mobile');
console.log('- 3D models disabled on low/medium devices'); 
console.log('- Canvas settings optimized for performance');
console.log('- Emergency performance mode available');
