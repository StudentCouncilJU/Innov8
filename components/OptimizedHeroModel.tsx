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

  // Performance-based settings - smaller scale
  const settings = useMemo(() => {
    switch (performance) {
      case 'low':
        return {
          scale: 1.2,
          animationSpeed: 0.3,
          floatIntensity: 0.05,
          swayIntensity: 0.1
        };
      case 'medium':
        return {
          scale: 1.4,
          animationSpeed: 0.5,
          floatIntensity: 0.08,
          swayIntensity: 0.15
        };
      default:
        return {
          scale: 1.6,
          animationSpeed: 1,
          floatIntensity: 0.1,
          swayIntensity: 0.2
        };
    }
  }, [performance]);

  // Optimized material
  const optimizedMaterial = useMemo(() => {
    if (!nodes?.mesh_0?.material) return null;
    
    const material = Array.isArray(nodes.mesh_0.material) 
      ? nodes.mesh_0.material[0] 
      : nodes.mesh_0.material;
    
    if (!material || typeof material.clone !== 'function') return material;
    
    const clonedMaterial = material.clone() as THREE.MeshStandardMaterial;
    
    // Performance optimizations
    if (performance === 'low') {
      clonedMaterial.roughness = 0.8;
      clonedMaterial.metalness = 0.2;
      if (clonedMaterial.map) clonedMaterial.map.minFilter = THREE.LinearFilter;
      if (clonedMaterial.normalMap) clonedMaterial.normalMap = null;
      if (clonedMaterial.roughnessMap) clonedMaterial.roughnessMap = null;
    } else if (performance === 'medium') {
      clonedMaterial.roughness = 0.6;
      clonedMaterial.metalness = 0.4;
      if (clonedMaterial.map) clonedMaterial.map.minFilter = THREE.LinearMipmapLinearFilter;
    }

    return clonedMaterial;
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
        castShadow={performance !== 'low'}
        receiveShadow={performance !== 'low'}
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
