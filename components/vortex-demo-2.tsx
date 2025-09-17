import { Vortex } from "./vortex";


export default function VortexDemoSecond() {
  return (
    // <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={800}
        baseHue={180} // blue (fallback if palette not applied)
        baseRadius={2}
        rangeRadius={2}
        sphereRadius={6000}
        minSeparationAngle={0.14}
        // sphereScale={0.5}
        palette={["#377ded", "#ffffff", "#377ded","#377ded"]}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      />
    // </div>
  )
}
