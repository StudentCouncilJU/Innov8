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
          animationSpeed: 0.3, // Much slower for performance
          floatIntensity: 0.03, // Reduced movement
          swayIntensity: 0.05, // Minimal sway
          enableShadows: false
        };
      case 'medium':
        return {
          scale: 2.8, // Same as original
          animationSpeed: 0.5, // Reduced speed
          floatIntensity: 0.05, // Reduced movement
          swayIntensity: 0.08, // Reduced sway
          enableShadows: true
        };
      default: // high
        return {
          scale: 2.8, // Same as original
          animationSpeed: 0.8, // Smooth animation
          floatIntensity: 0.05, // Gentler than original
          swayIntensity: 0.1, // Gentler than original
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
      
      // Performance optimizations based on level
      if (originalMaterial && typeof originalMaterial.clone === 'function') {
        const clonedMaterial = originalMaterial.clone();
        const materialWithMap = clonedMaterial as THREE.MeshStandardMaterial;
        
        if (performance === 'low') {
          // Aggressive optimizations for low-end devices
          if (materialWithMap.map) {
            materialWithMap.map.minFilter = THREE.LinearFilter;
            materialWithMap.map.magFilter = THREE.LinearFilter;
          }
          if (materialWithMap.normalMap) materialWithMap.normalMap = null;
          if (materialWithMap.roughnessMap) materialWithMap.roughnessMap = null;
          materialWithMap.envMapIntensity = 0.3;
        } else if (performance === 'medium') {
          // Moderate optimizations
          if (materialWithMap.map) {
            materialWithMap.map.minFilter = THREE.LinearMipmapLinearFilter;
          }
          materialWithMap.envMapIntensity = 0.7;
        }
        
        return clonedMaterial;
      }
      
      return originalMaterial;
    }
    
    return null;
  }, [nodes, performance]);

  // Floating animation with performance consideration - smoother and less intensive
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    try {
      const t = clock.getElapsedTime() * settings.animationSpeed;
      group.current.position.y = 0.2 + Math.sin(t * 0.8) * settings.floatIntensity; // Smoother floating
      group.current.rotation.y = Math.sin(t * 0.3) * settings.swayIntensity; // Gentler sway
    } catch (error) {
      console.error('Animation error:', error);
    }
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
      frustumCulled={true}
    >
      <mesh
        name="mesh_0"
        castShadow={settings.enableShadows}
        receiveShadow={settings.enableShadows}
        geometry={nodes.mesh_0.geometry}
        material={optimizedMaterial || nodes.mesh_0.material}
        frustumCulled={true}
        matrixAutoUpdate={performance !== 'low'} // Reduce matrix updates on low-end
      />
    </group>
  );
};

// Preload with optimizations
useGLTF.preload("/Models/uploads_files_6203010_Futuristic+Combat+Robot+Soldier+(1).glb");

export default OptimizedHeroModel;
