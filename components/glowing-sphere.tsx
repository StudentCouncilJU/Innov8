// "use client";

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as THREE from "three";

// export function GlowingSphere({
//   position = [0, 0, 0],
//   scale = 4,
// }: {
//   position?: [number, number, number];
//   scale?: number;
// }) {
//   const pointsRef = useRef<THREE.Points>(null);
//   const materialRef = useRef<any>(null);

//   // Generate points on a sphere surface
//   const particlePositions = useMemo(() => {
//     const positions = new Float32Array(4000 * 3);

//     for (let i = 0; i < 4000; i++) {
//       const phi = Math.acos(2 * Math.random() - 1);
//       const theta = 2 * Math.PI * Math.random();
//       const radius = scale;

//       const x = radius * Math.sin(phi) * Math.cos(theta);
//       const y = radius * Math.sin(phi) * Math.sin(theta);
//       const z = radius * Math.cos(phi);

//       positions[i * 3] = x;
//       positions[i * 3 + 1] = y;
//       positions[i * 3 + 2] = z;
//     }

//     return positions;
//   }, [scale]);

//   // Animate rotation + pulsing
//   useFrame((state) => {
//     if (pointsRef.current) {
//       pointsRef.current.rotation.y += 0.002;
//       pointsRef.current.rotation.x =
//         Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
//     }

//     if (materialRef.current) {
//       // Pulse size with a sine wave
//       const pulse = 0.05 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
//       materialRef.current.size = pulse;
//     }
//   });

//   return (
//     <>
//       <Points ref={pointsRef} positions={particlePositions}>
//         <PointMaterial
//           ref={materialRef}
//           transparent
//           map={new THREE.TextureLoader().load("/3.png")}
//           size={0.06}
//           sizeAttenuation
//           depthWrite={false}
//           blending={THREE.AdditiveBlending}
//         />
//       </Points>
//     </>
//   );
// }

"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

interface GlowingSphereProps {
  position?: [number, number, number];
  scale?: number;
  particleCount?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  noiseIntensity?: number;
}

export function GlowingSphere({
  position = [0, 0, 0],
  scale = 3,
  particleCount = 2000,
  baseHue = 180,
  baseSpeed = 0.0001,
  rangeSpeed = 0.0002,
  baseRadius = 0.02,
  rangeRadius = 0.01,
  noiseIntensity = 0.1,
}: GlowingSphereProps) {
  // Reference to the Points object for rotation animation
      /* eslint-disable @typescript-eslint/no-explicit-any */
  const pointsRef = useRef<any>(null);
  const materialRef = useRef<any>(null);
  const particlePropsRef = useRef<Float32Array | null>(null);
  
  // Vortex-inspired constants
  const particlePropCount = 12; // x, y, z, vx, vy, vz, life, ttl, speed, radius, hue, initialRadius
  const particlePropsLength = particleCount * particlePropCount;
  const baseTTL = 50;
  const rangeTTL = 150;
  // const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  let tick = 0;
  
  const noise3D = createNoise3D();
  
  // Utility functions from Vortex
  const rand = (n: number): number => n * Math.random();
  // const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  // Initialize particle on sphere surface
  const initParticle = (i: number) => {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();
    const radius = scale;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    const vx = 0;
    const vy = 0;
    const vz = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const particleRadius = baseRadius + rand(rangeRadius);
    const hue = baseHue ;
    const initialRadius = Math.sqrt(x * x + y * y + z * z);

    if (particlePropsRef.current) {
      particlePropsRef.current.set(
        [x, y, z, vx, vy, vz, life, ttl, speed, particleRadius, hue, initialRadius],
        i
      );
    }
  };

  // Generate initial particle data with Vortex-style properties
  const { particlePositions, particleSizes, particleColors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    
    // Initialize particle properties array
    particlePropsRef.current = new Float32Array(particlePropsLength);
    
    // Initialize particle on sphere surface (moved inside useMemo)
    const initParticleLocal = (i: number) => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const radius = scale;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const vx = 0;
      const vy = 0;
      const vz = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const particleRadius = baseRadius + rand(rangeRadius);
      const hue = baseHue;
      const initialRadius = Math.sqrt(x * x + y * y + z * z);

      if (particlePropsRef.current) {
        particlePropsRef.current.set(
          [x, y, z, vx, vy, vz, life, ttl, speed, particleRadius, hue, initialRadius],
          i
        );
      }
    };
    
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticleLocal(i);
    }

    return {
      particlePositions: positions,
      particleSizes: sizes,
      particleColors: colors,
    };
  }, [particleCount, scale, particlePropsLength, baseHue, baseSpeed, rangeSpeed, baseRadius, rangeRadius]);

  // Update particles with Vortex-style animation
  const updateParticles = () => {
    if (!particlePropsRef.current) return;

    tick++;

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      const i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i;
      const i7 = 6 + i, i8 = 7 + i, i9 = 8 + i, i10 = 9 + i, i11 = 10 + i;

      let x = particlePropsRef.current[i];
      let y = particlePropsRef.current[i2];
      let z = particlePropsRef.current[i3];
      
      // Apply very subtle 3D noise for gentle movement along sphere surface
      const n1 = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * 0.1;
      const n2 = noise3D(y * xOff, z * yOff, tick * zOff) * noiseSteps * 0.1;
      const n3 = noise3D(z * xOff, x * yOff, tick * zOff) * noiseSteps * 0.1;
      
      const vx = lerp(particlePropsRef.current[i4], Math.cos(n1) * noiseIntensity, 0.02);
      const vy = lerp(particlePropsRef.current[i5], Math.sin(n2) * noiseIntensity, 0.02);
      const vz = lerp(particlePropsRef.current[i6], Math.cos(n3) * noiseIntensity, 0.02);
      
      const life = particlePropsRef.current[i7];
      const ttl = particlePropsRef.current[i8];
      const speed = particlePropsRef.current[i9];
      const radius = particlePropsRef.current[i10];
      const hue = particlePropsRef.current[i11];
      // const initialRadius = particlePropsRef.current[i12];

      // Update position with constrained movement to maintain sphere shape
      x += vx * speed;
      y += vy * speed;
      z += vz * speed;

      // Keep particles tightly on sphere surface with minimal variation
      const currentRadius = Math.sqrt(x * x + y * y + z * z);
      const targetRadius = scale; // Keep strict sphere shape
      const normalizeFactor = targetRadius / currentRadius;
      
      x *= normalizeFactor;
      y *= normalizeFactor;
      z *= normalizeFactor;

      // Update arrays for Three.js
      const particleIndex = i / particlePropCount;
      particlePositions[particleIndex * 3] = x;
      particlePositions[particleIndex * 3 + 1] = y;
      particlePositions[particleIndex * 3 + 2] = z;
      
      // Apply Vortex-style fade effect
      const alpha = fadeInOut(life, ttl);
      particleSizes[particleIndex] = radius * alpha;
      
      // Convert HSL to RGB for Three.js color attribute
      const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);
      particleColors[particleIndex * 3] = color.r * alpha;
      particleColors[particleIndex * 3 + 1] = color.g * alpha;
      particleColors[particleIndex * 3 + 2] = color.b * alpha;

      // Update particle properties
      particlePropsRef.current[i] = x;
      particlePropsRef.current[i2] = y;
      particlePropsRef.current[i3] = z;
      particlePropsRef.current[i4] = vx;
      particlePropsRef.current[i5] = vy;
      particlePropsRef.current[i6] = vz;
      particlePropsRef.current[i7] = life + 1;

      // Reinitialize particle if it's reached end of life
      if (life > ttl) {
        initParticle(i);
      }
    }

    // Mark attributes as needing update
    if (pointsRef.current?.geometry) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.geometry.attributes.size.needsUpdate = true;
      pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }
  };

  // Animation loop
  useFrame((state) => {
    updateParticles();
    
    if (pointsRef.current) {
      // Base rotation similar to your original
      pointsRef.current.rotation.y += 0.002;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particlePositions}
      position={position}
    >
      <PointMaterial
        ref={materialRef}
        transparent
        map={new THREE.TextureLoader().load("/3.png")}
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
      {/* Add size and color attributes */}
      <bufferAttribute
        attach="geometry-attributes-size"
        args={[particleSizes, 1]}
        count={particleCount}
        array={particleSizes}
        itemSize={1}
      />
      <bufferAttribute
        attach="geometry-attributes-color"
        args={[particleColors, 3]}
        count={particleCount}
        array={particleColors}
        itemSize={3}
      />
    </Points>
  );
}