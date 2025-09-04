import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GlowingSphere } from "@/components/glowing-sphere"

function RenderGlowingStars() {
  return (
    <div>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.1} />
                <GlowingSphere />
                <OrbitControls enableZoom={true} enablePan={false} />
              </Canvas>
    </div>
  )
}

export default RenderGlowingStars