"use client";
import React, { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface OptimizedHeroModelProps {
  performance?: 'high' | 'medium' | 'low';
}

export const OptimizedHeroModel: React.FC<OptimizedHeroModelProps> = ({ 
  performance = 'high' 
}) => {
  const { nodes } = useGLTF(
    "/Models/uploads_files_6203010_Futuristic+Combat+Robot+Soldier+(1).glb"
  ) as unknown as {
    nodes: {
      mesh_0: THREE.Mesh;
    };
    materials: Record<string, THREE.Material>;
  };

  const group = useRef<THREE.Group>(null!);

  // Performance-based settings - same scale as original model (2.8)
  const settings = useMemo(() => {
    switch (performance) {
      case 'low':
        return {
          scale: 2.8, // Same as original
          animationSpeed: 0.5, // Slightly reduced for performance
          floatIntensity: 0.1, // Same as original
          swayIntensity: 0.2, // Same as original
          enableShadows: false
        };
      case 'medium':
        return {
          scale: 2.8, // Same as original
          animationSpeed: 0.75, // Slightly reduced
          floatIntensity: 0.1, // Same as original
          swayIntensity: 0.2, // Same as original
          enableShadows: true
        };
      default: // high
        return {
          scale: 2.8, // Same as original
          animationSpeed: 1, // Same as original
          floatIntensity: 0.1, // Same as original
          swayIntensity: 0.2, // Same as original
          enableShadows: true
        };
    }
  }, [performance]);

  // Use original material with minimal optimizations
  const optimizedMaterial = useMemo(() => {
    // Just use the original material from the model like the original
    if (nodes?.mesh_0?.material) {
      const originalMaterial = Array.isArray(nodes.mesh_0.material) 
        ? nodes.mesh_0.material[0] 
        : nodes.mesh_0.material;
      
      // Only optimize texture filtering for performance on low settings
      if (performance === 'low' && originalMaterial && typeof originalMaterial.clone === 'function') {
        const clonedMaterial = originalMaterial.clone();
        // Minimal optimization - just texture filtering
        const materialWithMap = clonedMaterial as THREE.MeshStandardMaterial;
        if (materialWithMap.map) {
          materialWithMap.map.minFilter = THREE.LinearFilter;
        }
        return clonedMaterial;
      }
      
      return originalMaterial;
    }
    
    return null;
  }, [nodes, performance]);

  // Floating animation with performance consideration
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    const t = clock.getElapsedTime() * settings.animationSpeed;
    group.current.position.y = 0.2 + Math.sin(t * 2) * settings.floatIntensity;
    group.current.rotation.y = Math.sin(t * 0.5) * settings.swayIntensity;
  });

  if (!nodes?.mesh_0) {
    return null;
  }

  return (
    <group 
      ref={group} 
      dispose={null} 
      scale={settings.scale} 
      position={[0, 0.2, 0]}
    >
      <mesh
        name="mesh_0"
        castShadow={settings.enableShadows}
        receiveShadow={settings.enableShadows}
        geometry={nodes.mesh_0.geometry}
        material={optimizedMaterial || nodes.mesh_0.material}
        frustumCulled={true}
      />
    </group>
  );
};

// Preload with optimizations
useGLTF.preload("/Models/uploads_files_6203010_Futuristic+Combat+Robot+Soldier+(1).glb");

export default OptimizedHeroModel;
